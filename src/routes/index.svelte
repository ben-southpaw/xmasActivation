<script>
	import Header from "../components/Header.svelte";

	// import Snow from "../components/Snow.svelte";
	// import Grid from '../components/Grid.svelte'
</script>
<svelte:head>
	<title>Merry Xmas Ya Filthy Animal</title>
	<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
	<link rel="icon" href="./favicon.ico" type="image/x-icon">
</svelte:head>

<Header />

<style type="scss">
		//import globals to access globals, mixins etc
		@import './src/scss/global';
		* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

	}

	:root {
		background: $primary-bg;
		--base-fontsize: 10;
		--base-design-width: 740;
		@include respond-to('desktop') {
			--base-fontsize: 12;
			--base-design-width: 1920;
		}
	}

	::-webkit-scrollbar {
		display: none;
	}

	html {
		/*Base font size based of viewport width (1920px) for using rems*/
		font-size: calc(var(--base-fontsize)/var(--base-design-width) * 100vw);
		margin: 0;
	}
</style>
