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
  src="/lottie-files/snowman.json"
  autoplay="{true}"
  loop="{true}"
  controls="{true}"
  renderer="svg"
  background="transparent"
  height="{600}"
  width="{600}"
  controlsLayout="{controlsLayout}"
/>