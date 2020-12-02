<script>

</script>

<section>
    <div class="grid-item the-header"></div>
    <div class="grid-item the-header"></div>
    <div class="grid-item the-header"></div>
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "header header header"
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . .";

    @include respond-to('desktop') {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; //6 for desktop
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; //10 for now
      grid-template-areas:
    "header header header header header header"
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . ."
    ". . . . . .";
    }

    .grid-item {
      height: 10rem;
      background: cornflowerblue;
      @include respond-to('desktop') {
        background: hotpink;

      }
    }

    .the-header {
      grid-area: header;
      background: coral;
      @include respond-to('desktop') {
        background: darkcyan;
      }
    }





  }


</style>
