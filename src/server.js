import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import 'dotenv/config';
import redirect from '@polka/redirect';
import { getLanguage, getMarket } from './utils/locale_utils.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const exprt = !!process.env.SAPPER_EXPORT;

const {PORT, NODE_ENV, BASE_URL} = process.env;
const dev = NODE_ENV === 'development';
const staging = NODE_ENV === 'staging';

var baseUrl = BASE_URL || '/';
baseUrl = baseUrl.replace(/\/$/, '');

console.log("base : " + baseUrl);

if(exprt) {

	polka() // You can also use Express
		.use(
			compression({ threshold: 0 }),
			sirv('static', { dev }),
			sapper.middleware({
				session: (req, res) => {
					const market = 'uk'
					const language = 'en'
					return {market, language, dev, environment : NODE_ENV, baseUrl: baseUrl + '/'};
				}
			})
		)
		.listen(PORT, err => {
			if (err) console.log('error', err);
		});

}else{


	const langPrefixes = ['EN', 'IT', 'FR', 'DE', 'ES', 'NL', 'RU', 'PL'];

	const allRoutes = langPrefixes
		.map((lang) => {
			return {
				baseUrl: `/${lang}${baseUrl}`,
				language: lang.toLowerCase()
			};
		})
		.concat({baseUrl : `${baseUrl}`});

	var app = polka()
		.get('/', (req, res) => {
			redirect(res, baseUrl);
		})
		.listen(PORT, err => {
			if (err) console.log('error', err);
		});

	app.use(bodyParser.json());
	app.use(cors());

	allRoutes.forEach(route => {
		app.use(route.baseUrl,
			compression({ threshold: 0 }),
			sirv('static', { dev }),
			sapper.middleware({
				session: (req, res) => {

					const market = getMarket(req);
					const language = route.language || getLanguage(req);
					return { market, language, dev, environment : NODE_ENV, baseUrl: baseUrl + '/' };
				},
			}))
	});
}
