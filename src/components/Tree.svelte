<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';



  let controlsLayout = [
    'previousFrame',
    'playpause',
    'stop',
    'nextFrame',
    'progress',
    'frame',
    'loop',
    'spacer',
    'background',
    'snapshot',
    'zoom',
    'info',
  ];
</script>

<LottiePlayer
  src="/lottie-files/tree.json"
  autoplay="{true}"
  loop="{true}"
  renderer="svg"
  background="transparent"
  controlsLayout="{controlsLayout}"
/>

<style></style>