<script>
    import Header from "./Header.svelte";

</script>


<main>
<!--    <Header />-->

    <div class="blank-ornaments">
        <img class="blank-ornaments__1" src="/images/ornaments/ornament_round.svg" alt="ornament-one">
        <img class="blank-ornaments__2" src="/images/ornaments/ornament_round_2.svg" alt="ornament-two">
        <img class="blank-ornaments__xxx" src="/images/ornaments/ornament_xxx.svg" alt="ornament-xxx">
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
        <h1 class="text-five">buon</h1>
        <h1 class="text-six">natale</h1>
        <h1 class="text-seven">joyeux noël</h1>
        <h1 class="text-eight">hyvää</h1>
        <h1 class="text-nine">joulua</h1>
        <h1 class="text-ten">god</h1>
        <h1 class="text-eleven">jul</h1>
        <h1 class="text-twelve">vasela</h1>
        <h1 class="text-thirteen">koleda</h1>


    </div>

    <div class="bg-items">
        <img class="solid-shape__one" src="/images/solid-shapes/solid_shape_1.svg" alt="solidshapeOne">
        <img class="solid-shape__two" src="/images/solid-shapes/solid_shape_2.svg" alt="solidshapeTwo">
        <img class="solid-shape__three" src="/images/solid-shapes/solid_shape_3.svg" alt="solidshapeThree">
        <img class="solid-shape__six" src="/images/solid-shapes/solid_shape_6.svg" alt="solidshapeSix">
        <img class="ac-snowflake__one" src="/images/snowflakes/ac_snowflake_1.svg" alt="snowflakeOne">
        <img class="ac-snowflake__two" src="/images/snowflakes/ac_snowflake_2.svg" alt="snowflakeTwo">
        <img class="star__one" src="/images/star_1.svg" alt="starOne">
        <img class="star__two" src="/images/star_1.svg" alt="starTwo">
        <img class="chandelier" src="/images/chandelier.svg" alt="chandelier">


    </div>

    <div class="lights">
        <img class="lights-2" src="/images/lights/lights_2.1.svg" alt="lights2-1">
        <img class="lights-3" src="/images/lights/lights_3.1.svg" alt="lights3-1">
    </div>

    <div class="trees">
        <img class="trees-one" src="/images/trees/trees.svg" alt="treesOne">
        <img class="tree-top" src="/images/trees/tree_top.svg" alt="treeTop">
        <img class="tree-mid" src="/images/trees/tree_mid.svg" alt="treeTop">
        <img class="tree-bott" src="/images/trees/tree_bott.svg" alt="treeBot">
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
        .blank-ornaments__xxx {
            position: absolute;
            width: 22rem;
            height: 48rem;
            left: 49rem;
            top: 283.3rem;
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
          width: 32rem; //these values don't match figma
          height: 32rem;
          left: 44rem;
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
          top: 588.9rem//635.9rem;
          //transform: rotate(-180deg);
        }
        .ac-snowflake__one {
          position: absolute;
          width: 46.1rem;
          height: 46.1rem;
          left: 97rem;
          top: 112.8rem;
        }
        .ac-snowflake__two {
          position: absolute;
          width: 65rem;
          height: 65rem;
          right: -7rem; //non figma values
          top: 435rem; //463.1rem;
          z-index: -1;
        }
        .star__one {
          position: absolute;
          width: 11rem;
          height: 11rem;
          left: 1rem;
          top: 380.7rem;
        }
        .star__two {
          position: absolute;
          width: 11rem;
          height: 11rem;
          left: 12rem;
          top: 386.2rem;
        }
        .chandelier {
          position: absolute;
          width: 22rem;
          height: 22.9rem;
          left: 121rem;
          top: 566.1rem;
        }

      }

      //Text Blocks/Elements
      .text-blocks {
            font-family: $main_cako;
            color: $purple;
            font-weight: 900;
            line-height: 10.6rem;
            height: 10.6rem;
            text-transform: capitalize;

        .text-three {
            position: absolute;
            width: 30.2rem;
            left: -0.6rem;
            top: 147.4rem;
            font-size: 9rem;
        }
        .text-four {
            position: absolute;
            width: 45.5rem;
            height: 10.6rem;
            left: 72rem;
            top: 207rem;
            font-size: 9rem;
            letter-spacing: -0.6px;
        }
        .text-five {
            position: absolute;
            width: 17.9rem;
            left: 22.5rem;
            top: 300rem;
            font-size: 7.2rem;
            letter-spacing: -0.48px;
        }
        .text-six {
            position: absolute;
            width: 22rem;
            left: 2.4rem;
            top: 318.8rem;
            font-size: 7.2rem;
            letter-spacing: -0.48px;
        }
        .text-seven {
          position: absolute;
            width: 29.1rem;
            left: 113.1rem;
            top: 343rem; //Editted
            font-size: 5.2rem;
            letter-spacing: -0.34px;
        }
        .text-eight {
          position: absolute;
            width: 26.6rem;
            left: 73rem;
            top: 396.8rem;
            font-size: 9rem;
            letter-spacing: -0.6px;
        }
        .text-nine {
          position: absolute;
            width: 27.2rem;
            left: 48.3rem;
            top: 430.6rem;
            font-size: 9rem;
            letter-spacing: -0.6px;
        }
        .text-ten {
          position: absolute;
            width: 31rem;
            left: 96.6rem;
            top: 471.1rem;
            font-size: 16rem;
            letter-spacing: -1.06px;
        }
        .text-eleven {
          position: absolute;
            width: 20.6rem;
            left: 122.1rem;
            top: 487.7rem;
            font-size: 16rem;
            letter-spacing: -1.06px;
        }
        .text-twelve {
          position: absolute;
            width: 34.2rem;
            left: 2.2rem;
            top: 541rem;
            font-size: 11rem;
            letter-spacing: -0.73px;
        }
        .text-thirteen {
          position: absolute;
            width: 36.3rem;
            left: 97rem;
            top: 547.1rem;
            font-size: 11rem;
            letter-spacing: -0.73px;
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

        .tree-top {
            position: absolute;
            width: 21.7rem;
            height: 15rem;
            left: 49.4rem;      //70.9rem; <- figma values
            top: 414rem;        //429.0rem;

        }
        .tree-mid {
            position: absolute;
            width: 21.7rem;
            height: 17.7rem;
            left: 49.2rem;      //70.6rem;
            top: 450.5rem;      //468.2rem;
        }
        .tree-bott {
            position: absolute;
            width: 21.8rem;
            height: 20.6rem;
            left: 49.1rem;      //70.9rem; <- figma values
            top: 475.2rem;      //495.8rem;
        }
      }

    }
    }



</style>
