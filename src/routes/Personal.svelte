<script>
    import Footer from "../components/Footer.svelte";
        let groupMember = 'Nataliia';
</script>

<section class="personal-container">
    <div class="personal-header">
        <a class="nav-ac" href="https://acdc.adventureclub.io" target="_blank">&nbsp;</a>
        <p class="nav-text">Merry Christmas</p>
    </div>

<!--    <div class="blank-ornaments">-->
<!--        <img class="blank-ornaments__1" src="/images/ornaments/ornament_round.svg" alt="ornament-one">-->
<!--        <img class="blank-ornaments__2" src="/images/ornaments/ornament_round_2.svg" alt="ornament-two">-->
<!--        <img class="blank-ornaments__xxx" src="/images/ornaments/ornament_xxx.svg" alt="ornament-xxx">-->
<!--    </div>-->

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
        <h1 class="text-three">Lorem ipsum <br> gift for you</h1>
<!--        <h1 class="text-four">kerstfeest</h1>-->

    </div>

    <div class="personal-bg-items">
        <img class="mistletoe" src="/images/mistletoe.svg" alt="mistletoe">
<!--        <img class="solid-shape__two" src="/images/solid-shapes/solid_shape_2.svg" alt="solidshapeTwo">-->
<!--        <img class="solid-shape__three" src="/images/solid-shapes/solid_shape_3.svg" alt="solidshapeThree">-->
        <img class="solid-shape__six" src="/images/solid-shapes/solid_shape_6.svg" alt="solidshapeSix">
<!--        <img class="ac-snowflake__one" src="/images/snowflakes/ac_snowflake_1.svg" alt="snowflakeOne">-->
        <img class="snowflake__two" src="/images/snowflakes/snowflake_2.svg" alt="snowflakeTwo">
<!--        <img class="ac-snowflake__three" src="/images/snowflakes/ac_snowflake_3.svg" alt="snowflakeThree">-->
<!--        <img class="ac-snowflake__small" src="/images/snowflakes/ac_snowflake_small.svg" alt="snowflakeSmall">-->
<!--        <img class="star__one" src="/images/star_1.svg" alt="starOne">-->
<!--        <img class="star__two" src="/images/star_1.svg" alt="starTwo">-->
<!--        <img class="chandelier" src="/images/chandelier.svg" alt="chandelier">-->
<!--        <img class="snowman" src="/images/snowman.svg" alt="snowman">-->


    </div>

<!--    <div class="lights">-->
<!--        <img class="lights-2" src="/images/lights/lights_2.1.svg" alt="lights2-1">-->
<!--        <img class="lights-3" src="/images/lights/lights_3.1.svg" alt="lights3-1">-->
<!--    </div>-->

<!--    <div class="trees">-->
<!--        <img class="trees-one" src="/images/trees/trees.svg" alt="treesOne">-->
<!--        <img class="tree-top" src="/images/trees/tree_top.svg" alt="treeTop">-->
<!--        <img class="tree-mid" src="/images/trees/tree_mid.svg" alt="treeTop">-->
<!--        <img class="tree-bott" src="/images/trees/tree_bott.svg" alt="treeBot">-->
<!--    </div>-->
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
        .text-three {
            position: absolute;
            width: 76.5rem;
            height: 27rem;
            left: 33.8rem;
            top: 682rem;
            font-size: 11rem;
            line-height: 13.5rem;
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
      .snowflake__two {
        position: absolute;
        width: 22rem;
        height: 22.1rem;
        left: 49rem;
        top: 102.4rem
      }
      .solid-shape__six {
        position: absolute;
        width: 48rem;
        height: 48rem;
        left: 1rem;
        top: 112.9rem;
        transform: rotate(90deg);
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


  }
     
</style>