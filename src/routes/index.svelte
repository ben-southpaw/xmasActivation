
<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<figcaption>Happy Boi Fun Times</figcaption>
</figure>

<p><strong>New AC Project Template</strong></p>

<style type="scss">
		//import globals to access globals, mixins etc
		@import './src/scss/global';

	h1, figure, p {
		text-align: center;
		margin: 0 auto;
		font-family: 'Gilroy Regular', Arial, SansSerif;
		@include respond-to('desktop') {
			font-family: 'Gilroy Semibold', Arial, SansSerif;
		}
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 200px;
		margin: 0 0 1em 0;
	}

</style>
