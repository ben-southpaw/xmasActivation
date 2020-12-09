<script>
    import { onMount, tick } from 'svelte';
    import {draw} from "../../static/js/vendor/twgl-full.module.js";
    import * as canvas from "../../static/js/vendor/twgl-full.module.js";

  let canvas;
  let ctx;
  let width = 1007;
  let height = 1140;

    const draw = () => {
    // ctx.clearRect(0, 0, width, height);
    // ctx.beginPath();
    // ctx.moveTo(width/2 - 50, height/2);
    // ctx.arc(width/2, height/2, 50, 0, 2 * Math.PI);
    // ctx.fill();
    };

onMount(async () => {
  ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  await tick();
  draw();
});

</script>

<div
  class="container"
  bind:clientWidth={width}
  bind:clientHeight={height}>
  <canvas bind:this={canvas} {width} {height} />
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
  }
</style>