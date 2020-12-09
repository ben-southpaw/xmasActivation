<script>

</script>

<nav>
	<div class="text-container">
		<div class="flex-col">
			<img src="/images/ac-logo.svg" alt="ac-homepage">
		</div>
		<div class="flex-col">
			<p class="xmas-text">Merry Christmas</p>
		</div>
	</div>
	<div class="lights-container">
		<img src="" alt="lights" class="top-lights">
	</div>
</nav>

<style lang="scss">
    @import '../scss/global';

	nav{
		height: 25vh;
		.text-container {
			display: flex;
			font-family: $bold_gilroy; //Not working?
			font-size: 1rem;
			text-transform: uppercase;
			color: $font-white;
			margin: 0 1rem;
			z-index: $nav-index;

			.flex-col {
				width: 50%;
				img {
					width: 10rem;
					margin: 2rem 0;
				}
			}
			.flex-col:last-of-type {
				text-align: right;
				.xmas-text {
					margin: 2rem 0;
					justify-content: end;
				}
			}
		}

		.lights-container {

			.top-lights {

			}
		}


	}
</style>
