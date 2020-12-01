<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>

	body {
		background: rgb(95,0,249);
		background: linear-gradient(90deg, rgba(95,0,249,0.8855917366946778) 0%, rgba(214,105,191,0.4318102240896359) 9%, rgba(68,68,221,0.6699054621848739) 20%, rgba(0,212,255,0.6587009803921569) 59%)
	}

	h1, p {
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<body>
<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
</body>

