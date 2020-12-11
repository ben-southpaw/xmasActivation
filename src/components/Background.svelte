<script>
    import { onMount } from 'svelte';
    import Background from '../../static/js/background.js';
    let root;


onMount(async () => {
    // window.addEventListener('resize')
  console.log(root);

  const bg = new Background(root)
});

</script>

<div class="bg" bind:this={root}>

</div>

<style lang="scss">
     @import '../scss/global';

  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    //display: none; //undo when bg is needed
  }
     :global(.snowflake) {
       width: 3.5rem;
       height: 3.5rem;
       background-image: url("/images/ac_wheel_big_fg.svg");
       background-repeat: no-repeat;
       background-position: center;
       background-size: 3rem;
       position: absolute;
  }



</style>