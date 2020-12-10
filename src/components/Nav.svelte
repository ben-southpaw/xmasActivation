<script>

</script>

<nav>
	<div class="lights-container">
		<img class="top-lights" src="/images/lights/lights_1.1.svg" alt="lights" >
	</div>
	<div class="text-container">

			<a href="https://acdc.adventureclub.io" target="_blank"></a>
			<p class="xmas-text">Merry Christmas</p>

	</div>
</nav>

<style lang="scss">
    @import '../scss/global';

	nav{
		height: 25vh;
		.lights-container {
			img {
				z-index: -1;
				width: 100vw;
    			margin-top: -5rem;
			}
		}
		.text-container {
			z-index: $nav-index;

			position: absolute;
   			top: 0;
    		left: 0;
			height: 10vh;
			width: 100%;

			display: inline-flex;

				a {
					background-image: url(/images/ac-logo.svg);
					background-repeat: no-repeat;
					background-size: 11rem;
					width: 50%;
					height: 2rem;
					margin: 2rem 1rem;
				}

				.xmas-text {
					font-family: $bold_gilroy;
					font-size: 1.1rem;
					text-transform: uppercase;
					color: $font-white;
					width: 50%;
					height: 4vh;
					text-align: right;
					margin: 2rem 1rem;
				}
			}
		}
</style>
