<script context="module">

    export async function preload(page, session) {
        //try {

        var {host, path, params, query} = page;

        if (session.environment !== "production") {
            if (query.lang) {
                session.language = query.lang;
                session.market = query.lang;
            }
        }

        var combined = {};
        try {
            combined = await this.fetch(`api/copy.json?language=${session.language}`);
            combined = await combined.json();
        } catch (e) {
            //todo load backup from static
            console.log('Copy Error: ' + e.message);
        }

        var meta = {};
        try{
            meta = await this.fetch('api/meta.json?language=' + session.language + '&market=' + session.market);
            meta = await meta.json();
        }catch(e){
            console.warn('Meta Error : ' + e.message);
        }

        var stores = {};
        try {
            stores = await this.fetch('api/stores.json?market=' + session.market);
            stores = await stores.json();
        } catch (e) {
            console.warn('Stores Error : ' + e.message);
        }

        return {combined, session, stores, query, metaData : meta};
    }
</script>
<script>
    import {setContext, onMount} from 'svelte';
    import {meta, storeList} from '../store/store.js';
    import Main from '../components/Main.svelte';
    import {isAnalyticsAccepted} from '../store/store.js';
    import {TrackingUtils} from '../utils/tracking_utils.js'

    import Gate from '../components/Gate/Gate.svelte';

    //---------------------------------------------

    export let combined;
    export let session;
    export let stores;
    export let metaData;

    //---------------------------------------------

    meta.set(metaData);

    onMount(async () => {

        document.documentElement.setAttribute('lang', session.language);

        var script = document.createElement('script');
        script.type = 'module';
        script.src = session.dev ? './js/main.js' : './js/bundle/main.js';
        document.body.appendChild(script);

    });

    storeList.set(stores);

    let getCopy = key => {

        if (combined[key] !== undefined)
            return combined[key];

        console.warn('No copy key found : ' + key);

        return '';
    };

    setContext('app', {
        baseUrl: session.baseUrl,
        getCopy: getCopy,
        getStoresCities: () => {
            var cities = {};
            stores.stores.forEach(store => {
                if (!cities[store.city])
                    cities[store.city] = [];
                cities[store.city].push(store);
            });
            return Object.keys(cities);
        },
        getStoresByCity: city => {
            return stores.stores.filter(store => store.city == city);
        }
    });

    isAnalyticsAccepted.subscribe(value => {

        if (value) {
            TrackingUtils.InitializeDigitalData(session.market);
            TrackingUtils.InitializeUTAG(session.dev ? 'dev' : 'prod');
        }

    });
</script>


<svelte:head>
    <base target="_parent"/>
    <title>{getCopy('Page_Title')}</title>
    <meta property="description" content="{getCopy('Meta_description')}">
    <meta property="og:title" content="{getCopy('Meta_Title')}">
    <meta property="og:description" content="{getCopy('Meta_description')}">
    <meta property="og:type" content='website'>
    <meta property="twitter:title" content="{getCopy('Meta_Title')}">
    <meta property="twitter:description" content="{getCopy('Meta_description')}">
</svelte:head>

<Gate>
    <Main></Main>
    <div id="js-scroll-expander" class="scroll-expander"></div>
</Gate>


<style lang="scss" global>
    @import '../scss/global.scss';

    .scroll-expander {
        position: absolute;
        width: 1px;
        top: 0;
        left: 0;
    }

</style>
