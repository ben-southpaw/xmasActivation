<script>
    import { onMount } from 'svelte';
    import Background from '../../static/js/background.js';
    let root;


onMount(async () => {
  const bg = new Background(root)
});

</script>

<div class="bg" bind:this={root}>

</div>

<style lang="scss">
     @import '../scss/global';

  .bg {
    position: fixed;
    z-index: 1;
    pointer-events: none;
  }
     :global(.snowflake) {
       //display: none;
       //@include respond-to('desktop') {
       //display: block;
       z-index: 1;
       width: 1.5rem;
       height: 1.5rem;
       background-image: url("/images/ac_wheel_big_fg.svg");
       background-repeat: no-repeat;
       background-position: center;
       background-size: contain;
       position: absolute;
       @include respond-to('desktop') {
         width: 2rem;
         height: 2rem;
       }
       //}
  }

</style>