<script>
	import Mobile from "../components/Mobile.svelte";
	import Main from "../components/Main.svelte";
	// import Header from "../components/Header.svelte";

</script>
<svelte:head>
	<title>Merry Xmas Ya Filthy Animal</title>
	<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
	<link rel="icon" href="./favicon.ico" type="image/x-icon">
</svelte:head>

<div class="mobile-container">
	<Mobile />
</div>
<Main />

<style type="scss">
		@import './src/scss/global';
		    .mobile-container {
        height: 100vh;
        width: 100vw;
        @include respond-to('desktop') {
          display: none;
        }
      }
</style>
