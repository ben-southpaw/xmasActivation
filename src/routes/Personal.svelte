<script>
    import Gift from "../components/Gift.svelte";
    import Footer from "../components/Footer.svelte";

    let groupMember = 'Nataliia';
</script>

<section class="personal-container">
    <div class="personal-header">
        <a class="nav-ac" href="https://acdc.adventureclub.io" target="_blank">&nbsp;</a>
        <p class="nav-text">Merry Christmas</p>
    </div>

    <div class="blank-ornaments">
        <img class="blank-ornaments__1" src="/images/ornaments/ornament_round.svg" alt="ornament-one">
        <img class="blank-ornaments__2" src="/images/ornaments/ornament_round.svg" alt="ornament-two">
        <img class="blank-ornaments__3" src="/images/ornaments/ornament_round.svg" alt="ornament-three">
        <img class="blank-ornaments__4" src="/images/ornaments/ornament_round.svg" alt="ornament-four">
        <img class="blank-ornaments__5" src="/images/ornaments/ornament_round_2.svg" alt="ornament-four">

    </div>

    <div class="name-ornaments">
        <img class="name-ornaments__2-4" src="/images/name-ornaments/ornament_name_2.4.svg" alt="name-2-4">
<!--        <img class="name-ornaments__1-3" src="/images/name-ornaments/ornament_name_1.3.svg" alt="name-1-3">-->
<!--        <img class="name-ornaments__1-5" src="/images/name-ornaments/ornament_name_1.5.svg" alt="name-1-5">-->
<!--        <img class="name-ornaments__2-2" src="/images/name-ornaments/ornament_name_2.2.svg" alt="name-2-2">-->
<!--        <img class="name-ornaments__2-4" src="/images/name-ornaments/ornament_name_2.4.svg" alt="name-2-4">-->
<!--        <img class="name-ornaments__2-6" src="/images/name-ornaments/ornament_name_2.6.svg" alt="name-2-6">-->
<!--        <img class="name-ornaments__3-2" src="/images/name-ornaments/ornament_name_3.2.svg" alt="name-3-2">-->
<!--        <img class="name-ornaments__3-4" src="/images/name-ornaments/ornament_name_3.4.svg" alt="name-3-4">-->
<!--        <img class="name-ornaments__4-1" src="/images/name-ornaments/ornament_name_4.1.svg" alt="name-4-1">-->
    </div>

    <div class="personal-text-blocks">
    <h1 class="text-one">Merry Christmas, <br> {groupMember}</h1>
        <p class="text-two">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor
                illo nam, nemo neque odit possimus quaerat quasi qui sit ut velit veritatis! Animi dicta
                impedit magnam nihil perspiciatis, veritatis.</p>

    </div>

    <div class="personal-bg-items">
        <img class="mistletoe" src="/images/mistletoe.svg" alt="mistletoe">
        <img class="snowglobe" src="/images/solid-shapes/solid_shape_snowglobe.svg" alt="snowglobe">
        <img class="solid-shape__four" src="/images/solid-shapes/solid_shape_4.svg" alt="solidshapeFour">
        <img class="solid-shape__five-1" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle1">
        <img class="solid-shape__five-2" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle2">
        <img class="solid-shape__five-3" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle2">
        <img class="solid-shape__five-4" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle2">
        <img class="solid-shape__six" src="/images/solid-shapes/solid_shape_6.svg" alt="solidshapeSix">
        <p class="solid-shape__six-text">Lorem ipsum dolor sit amet, consectetur</p>
        <img class="ac-snowflake__four" src="/images/snowflakes/ac_snowflake_4.svg" alt="snowflakeFour">
        <img class="ac-snowflake__five" src="/images/snowflakes/ac_snowflake_5.svg" alt="snowflakeFive">
        <img class="ac-snowflake__six" src="/images/snowflakes/ac_snowflake_6.svg" alt="snowflakeSix">
        <img class="ac-snowflake__seven" src="/images/snowflakes/ac_snowflake_7.svg" alt="snowflakeSeven">

<!--        <img class="ac-snowflake__small" src="/images/snowflakes/ac_snowflake_small.svg" alt="snowflakeSmall">-->
        <img class="star__one" src="/images/stars/star_1.svg" alt="starOne">
        <img class="star__two" src="/images//stars/star_2.svg" alt="starTwo">
        <img class="xxx-flag" src="/images/xxx_flag.svg" alt="flag">
        <img class="hat" src="/images/hat.svg" alt="hat">
        <img class="horns" src="/images/horns.svg" alt="horns">


    </div>

    <div class="personal-lights">
        <img class="lights-4" src="/images/lights/lights_4.1.svg" alt="lights4">
        <img class="lights-5" src="/images/lights/lights_5.1.svg" alt="lights5-1">
    </div>

    <div class="personal-trees">
        <img class="trees-one" src="/images/trees/horizontal_tree_triangles_1.svg" alt="treesOne">
        <img class="trees-two" src="/images/trees/horizontal_tree_triangles_2.svg" alt="treeTwo">
        <img class="trees-three" src="/images/trees/horizontal_tree_triangles_1.svg" alt="treeThree">
        <img class="trees-four" src="/images/trees/horizontal_tree_triangles_2.svg" alt="treeFour">
    </div>
    <div class="gift-container">
        <Gift />
    </div>
    <div class="footer-container">
        <Footer />
    </div>

</section>

<style lang="scss">
     @import '../scss/global';
  section {
    height: 989.1rem;
    width: 144rem;

    .footer-container {
        position: absolute;
        z-index: 2;
        width: 125.8rem;
        height: 175.4rem;
        left: 9.1rem;
        top: 807.9rem;
      }
    .gift-container {
        position: absolute;
        z-index: 2;
        width: 143rem;
        height: 144.9rem;
        left: 0;
        top: 652rem;
    }
    .personal-text-blocks {
        line-height: 10.6rem;
        font-family: $main_cako;
        color: $purple;
        font-weight: 900;
        height: 10.6rem;
        .text-one {
            position: absolute;
            width: 90.5rem;
            height: 22.8rem;
            left: 23rem;
            top: 31.2rem;
            font-size: 9rem;
            text-transform: capitalize;
        }
        .text-two {
            position: absolute;
            width: 60rem;
            height: 10.4rem;
            left: 25rem;
            top: 56.2rem;
            font-family: $main_gilroy;
            color: $font-white;
            line-height: 3.6rem;
            font-size: 2.2rem;
        }
    }

    .personal-bg-items {
      .mistletoe {
        position: absolute;
        width: 22rem;
        height: 13.4rem;
        left: 25rem;
        top: 15.5rem;
      }
      .ac-snowflake__four {
        position: absolute;
        width: 22rem;
        height: 22.1rem;
        left: 121rem;
        top: 264.2rem;
      }
      .ac-snowflake__five {
        position: absolute;
        width: 22rem;
        height: 22.1rem;
        left: 1rem;
        top: 402rem;
      }

      .ac-snowflake__seven {
        position: absolute;
        width: 22rem;
        height: 22.1rem;
        left: 49rem;
        top: 102.4rem
      }
      .ac-snowflake__six {
        position: absolute;
        width: 22rem;
        height: 22rem;
        left: 97rem;
        top: 599.3rem;
      }
      .solid-shape__four {
        position: absolute;
        width: 94rem;
        height: 36.7rem;
        left: 28.4rem;
        top: 295.6rem;
        transform: rotate(9deg);
      }
      .solid-shape__five-1 {
        position: absolute;
        width: 46rem;
        height: 25.8rem;
        left: 25rem;
        top: 413.1rem;
      }
      .solid-shape__five-2 {
        position: absolute;
        width: 46rem;
        height: 25.8rem;
        left: 73rem;
        top: 413.1rem;

      }
      .solid-shape__five-3 {
        position: absolute;
        width: 46rem;
        height: 25.8rem;
        left: 25rem;
        top: 438.8rem;

      }
      .solid-shape__five-4 {
        position: absolute;
        width: 46rem;
        height: 25.8rem;
        left: 73rem;
        top: 438.8rem;

      }
      .solid-shape__six {
        position: absolute;
        width: 48rem;
        height: 48rem;
        left: 1rem;
        top: 112.9rem;
        transform: rotate(90deg);
      }
      .solid-shape__six-text {
        position: absolute;
        width: 27.2rem;
        height: 63.4rem;
        left: 80.3rem;
        top: 310.4rem;
        z-index: 1;
        font-family: $main_gilroy;
        font-size: 4rem;
        line-height: 4.7rem;
        color: $font-white;
        transform: rotate(9deg); //TBC
      }
      .xxx-flag {
        position: absolute;
        width: 22rem;
        height: 30.4rem;
        left: 97rem;
        top: 143.9rem;
      }
      .snowglobe {
        position: absolute;
        width: 46rem;
        height: 51rem;
        left: 73rem;
        top: 187.9rem;
      }
      .hat {
        position: absolute;
        width: 21.9rem;
        height: 24.6rem;
        left: 49.3rem;
        top: 586.2rem;
      }
      .horns {
        position: absolute;
        width: 22rem;
        height: 20.9rem;
        left: 0;
        top: 621rem;
      }
      .star__one {
        position: absolute;
        width: 22rem;
        height: 22rem;
        left: 77rem;
        top: 285.8rem;
      }
      .star__two {
        position: absolute;
        width: 22rem;
        height: 22rem;
        left: 13rem;
        top: 520.2rem;
      }

    }

    .name-ornaments {
      .name-ornaments__2-4 {
        position: absolute;
        width: 22rem;
        height: 75.5rem;
        left: 109rem;
        top: -5rem;
      }
    }
    .blank-ornaments {
      .blank-ornaments__1 {
        position: absolute;
        width: 22rem;
        height: 63.4rem;
        left: 37rem;
        top: 134.6rem;
      }
      .blank-ornaments__2 {
        position: absolute;
        width: 22rem;
        height: 63.4rem;
        left: 85rem;
        top: 211.9rem;
      }
      .blank-ornaments__3 {
        position: absolute;
        width: 22rem;
        height: 63.4rem;
        left: 25rem;
        top: 312.6rem;
      }
      .blank-ornaments__4 {
        position: absolute;
        width: 22rem;
        height: 63.4rem;
        left: 37rem;
        top: 440.5rem;
      }
      .blank-ornaments__5 {
        position: absolute;
        width: 22rem;
        height: 65.5rem;
        left: 85rem;
        top: 462.5rem;
      }
    }

    .personal-lights {
      .lights-4 {
        position: absolute;
        width: 96.6rem;
        height: 29.9rem;
        left: -0.6rem;
        top: 238.1rem;
      }
      .lights-5 {
        position: absolute;
        width: 96.8rem;
        height: 83rem;
        left: 61rem;
        top: 610.5rem;
      }
    }
     .personal-trees {
        .trees-one {
          position: absolute;
          width: 22rem;
          height: 370.8rem;
          left: 47rem;
          top: 365.8rem;
        }
        .trees-two{
          position: absolute;
          width: 22rem;
          height: 370.8rem;
          left: 72rem;
          top: 370.8rem;
        }
        .trees-three{
          position: absolute;
          width: 22rem;
          height: 370.8rem;
          left: 96rem;
          top: 365.8rem;
        }
        .trees-four{
          position: absolute;
          width: 22rem;
          height: 370.8rem;
          left: 120rem;
          top: 370.8rem;
        }
      }


  }
     
</style>