<script>
    import Header from "./Header.svelte";

</script>


<main>
<!--    <Header />-->

    <div class="name-ornaments">
        <img class="name-ornaments__1-1" src="/images/name-ornaments/ornament_name_1.1.svg" alt="name-1-1">
        <img class="name-ornaments__2-2" src="/images/name-ornaments/ornament_name_2.2.svg" alt="name-2-2">

    </div>

    <div class="text-blocks">
        <h1 class="text-three">vrolik</h1>

    </div>

    <div class="bg-items">
        <img class="solid-shape__one" src="/images/solid-shapes/solid_shape_1.svg" alt="solidshapeOne">
        <img class="ac-snowflake__one" src="/images/snowflakes/ac_snowflake_1.svg" alt="snowflakeOne">

    </div>


</main>


<style lang="scss">
    @import '../scss/global';

    main {
    @include respond-to('desktop') {
    position: relative;
    width: 144rem;
    height: 828.1rem;

      //Name Ornament Class
      .name-ornaments {
        .name-ornaments__1-1 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 1rem;
            top: 435.9rem;

        }

        .name-ornaments__2-2 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 24.9rem;
            top: 93.6rem;

        }
      }

      //Background Items (non-interactive)
      .bg-items {
        .solid-shape__one {
        position: absolute;
        width: 47rem;
        height: 47rem;
        left: 0;
        top: 159rem;
        }
        .ac-snowflake__one {
          position: absolute;
          width: 46.1rem;
          height: 46.1rem;
          left: 97rem;
          top: 112.8rem;
        }

      }

      //Text Blocks/Elements
      .text-blocks {
        .text-three {
          position: absolute;
            width: 30.2rem;
            height: 10.6rem;
            left: -0.6rem;
            top: 147.4rem;
            font-family: $main_cako;
            color: $violet;
            font-weight: 900;
            font-size: 9rem;
            line-height: 10.6rem;

        }
      }
    }
    }



</style>
