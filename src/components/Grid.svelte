<script>
    // import Header from "./Header.svelte";


</script>

<section>
<!--    <Header />-->
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
</section>

<style lang="scss">
  @import './src/scss/global';

  section {
    width: 100%;
    display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    //grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    //grid-template-areas:
    //". . ."
    //". . ."
    //". . ."
    //". . ."
    //". . ."
    //". . ."
    //". . ."
    //". . ."
    //". . ."
    //". . .";

    //@include respond-to('desktop') {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; //6 for desktop
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; //10 for now
      grid-template-areas:
    "x . . . . ."
    ". x . . . ."
    ". . x . . ."
    ". . . x . ."
    ". . . . x ."
    ". . . . . x"
    "x . . . . ."
    ". x . . . ."
    ". . x . . ."
    ". . . x . .";
    //}

    .grid-item {
      grid-area:'x';
      height: 10rem;
      color: $violet;
      font-family: $main_cako;
      background-image: url(/images/ac_wheel_big_fg.svg);
      background-repeat: no-repeat;

      @include respond-to('desktop') {
      }
    }




  }

</style>
