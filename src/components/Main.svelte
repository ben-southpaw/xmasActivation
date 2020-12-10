<script>
    import Header from "./Header.svelte";

</script>


<main>
<!--    <Header />-->

    <div class="blank-ornaments">
        <img class="blank-ornaments__1" src="/images/ornaments/ornament_round.svg" alt="ornament-one">
        <img class="blank-ornaments__2" src="/images/ornaments/ornament_round_2.svg" alt="ornament-two">
    </div>

    <div class="name-ornaments">
        <img class="name-ornaments__1-1" src="/images/name-ornaments/ornament_name_1.1.svg" alt="name-1-1">
        <img class="name-ornaments__1-3" src="/images/name-ornaments/ornament_name_1.3.svg" alt="name-1-3">
        <img class="name-ornaments__1-5" src="/images/name-ornaments/ornament_name_1.5.svg" alt="name-1-5">
        <img class="name-ornaments__2-2" src="/images/name-ornaments/ornament_name_2.2.svg" alt="name-2-2">
        <img class="name-ornaments__2-4" src="/images/name-ornaments/ornament_name_2.4.svg" alt="name-2-4">
        <img class="name-ornaments__2-6" src="/images/name-ornaments/ornament_name_2.6.svg" alt="name-2-6">
        <img class="name-ornaments__3-2" src="/images/name-ornaments/ornament_name_3.2.svg" alt="name-3-2">
        <img class="name-ornaments__3-4" src="/images/name-ornaments/ornament_name_3.4.svg" alt="name-3-4">
        <img class="name-ornaments__4-1" src="/images/name-ornaments/ornament_name_4.1.svg" alt="name-4-1">
    </div>

    <div class="text-blocks">
        <h1 class="text-three">vrolik</h1>
        <h1 class="text-four">kerstfeest</h1>

    </div>

    <div class="bg-items">
        <img class="solid-shape__one" src="/images/solid-shapes/solid_shape_1.svg" alt="solidshapeOne">
        <img class="solid-shape__two" src="/images/solid-shapes/solid_shape_2.svg" alt="solidshapeTwo">
        <img class="solid-shape__three" src="/images/solid-shapes/solid_shape_3.svg" alt="solidshapeThree">
        <img class="solid-shape__six" src="/images/solid-shapes/solid_shape_6.svg" alt="solidshapeSix">
        <img class="ac-snowflake__one" src="/images/snowflakes/ac_snowflake_1.svg" alt="snowflakeOne">

    </div>

    <div class="lights">
        <img class="lights-2" src="/images/lights/lights_2.1.svg" alt="lights2-1">
        <img class="lights-3" src="/images/lights/lights_3.1.svg" alt="lights3-1">
    </div>

    <div class="trees">
        <img class="trees-one" src="/images/trees/trees.svg" alt="treesOne">
    </div>


</main>


<style lang="scss">
    @import '../scss/global';

    main {
    @include respond-to('desktop') {
    position: relative;
    width: 144rem;
    height: 828.1rem;

      //Blank Ornament
      .blank-ornaments {
        .blank-ornaments__1 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 25.3rem;
            top: 459.1rem;
        }
        .blank-ornaments__2 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 73rem;
            top: 494.8rem;
        }
      }

      //Name Ornament Class
      .name-ornaments {
        .name-ornaments__1-1 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 1rem;
            top: 435.9rem;

        }
        .name-ornaments__1-3 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 97rem;
            top: 215.5rem;
        }

        .name-ornaments__1-5 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 25rem;
            top: 308rem;
        }

        .name-ornaments__2-2 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 24.9rem;
            top: 93.6rem;

        }
        .name-ornaments__2-4 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 73rem;
            top: 325rem;

        }
        .name-ornaments__2-6 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 1rem;
            top: 243.9rem;
        }
        .name-ornaments__3-2 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 97rem;
            top: 378.4rem;
        }

        .name-ornaments__3-4 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 48.9rem;
            top: 125.3rem;
        }

        .name-ornaments__4-1 {
            position: absolute;
            width: 22rem;
            height: 63.4rem;
            left: 120.9rem;
            top: 188.8rem;
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
        .solid-shape__two {
          position: absolute;
          width: 22rem;
          height: 22rem;
          left: 60rem;
          top: 259.2rem;
        }
        .solid-shape__three {
          position: absolute;
          width: 47rem;
          height: 28.6rem;
          left: 94.7rem;
          top: 315.1rem;
          transform: rotate(-11deg);
        }
        .solid-shape__six {
          position: absolute;
          width: 47rem;
          height: 47rem;
          right: 0;
          top: 635.9rem;
          //transform: rotate(-180deg);
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
            color: $purple;
            font-weight: 900;
            font-size: 9rem;
            line-height: 10.6rem;

        }
        .text-four {
          position: absolute;
            width: 45.5rem;
            height: 10.6rem;
            left: 72rem;
            top: 207rem;
            font-family: $main_cako;
            color: $purple;
            font-weight: 900;
            font-size: 9rem;
            line-height: 10.6rem;
            letter-spacing: -0.6px;
        }
      }

      //Lights
      .lights {
        .lights-2 {
            position: absolute;
            width: 44.5rem;
            height: 21.7rem;
            left: 21.5rem;
            top: 219.3rem;
        }

        .lights-3 {
            position: absolute;
            width: 26rem;
            height: 6rem;
            left: 71rem;
            top: 246.2rem;
        }
      }

      .trees {
        .trees-one {
            position: absolute;
            width: 22rem;
            height: 52.7rem;
            left: 73rem;
            top: 266.6rem;
        }
      }

    }
    }



</style>
