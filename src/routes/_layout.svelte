<script>

</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root{
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
	}
</style>

<main>
	<slot></slot>
</main>