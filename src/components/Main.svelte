<script>
    import Background from "./Background.svelte";
    import Footer from "./Footer.svelte";

    let groupName = 'adidas';

</script>


<main>
    <Background />
    <div class="header">
        <img class="nav-lights" src="/images/lights/lights_1.1.svg" alt="lights" >
        <a class="nav-ac" href="https://acdc.adventureclub.io" target="_blank">&nbsp;</a>
        <p class="nav-text">Merry Christmas</p>
        <h1 class="text-one">Hey, you beautiful <br> people at {groupName} <br>Merry Christmas</h1>
        <p class="text-two">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor
                illo nam, nemo neque odit possimus quaerat quasi qui sit ut velit veritatis! Animi dicta
                impedit magnam nihil perspiciatis, veritatis.</p>
    </div>

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
        <h1 class="text-twelve">vesala</h1>
        <h1 class="text-thirteen">koleda</h1>


    </div>

    <div class="bg-items">
        <img class="solid-shape__one" src="/images/solid-shapes/solid_shape_1.svg" alt="solidshapeOne">
        <img class="solid-shape__two" src="/images/solid-shapes/solid_shape_2.svg" alt="solidshapeTwo">
        <img class="solid-shape__three" src="/images/solid-shapes/solid_shape_3.svg" alt="solidshapeThree">
        <img class="solid-shape__six" src="/images/solid-shapes/solid_shape_6.svg" alt="solidshapeSix">
        <img class="ac-snowflake__one" src="/images/snowflakes/ac_snowflake_1.svg" alt="snowflakeOne">
        <img class="ac-snowflake__two" src="/images/snowflakes/ac_snowflake_2.svg" alt="snowflakeTwo">
        <img class="ac-snowflake__three" src="/images/snowflakes/ac_snowflake_3.svg" alt="snowflakeThree">
        <img class="ac-snowflake__small" src="/images/snowflakes/ac_snowflake_small.svg" alt="snowflakeSmall">
        <img class="star__one" src="/images/stars/star_1.svg" alt="starOne">
        <img class="star__two" src="/images//stars/star_1.svg" alt="starTwo">
        <img class="chandelier" src="/images/chandelier.svg" alt="chandelier">
        <img class="snowman" src="/images/snowman.svg" alt="snowman">



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
    <div class="footer-container">
        <Footer />
    </div>
</main>


<style lang="scss">
    @import '../scss/global';
    @import '../scss/header';
    @import '../scss/ornaments';
    @import '../scss/bg-items';
    @import '../scss/text-blocks';
    @import '../scss/trees';


    main {
    width: 37.5rem;
    height: 598rem;
    @include respond-to('desktop') {
      position: relative;
      width: 144rem;
      height: 828.1rem;
    }

      .footer-container {
        position: absolute;
        z-index: 2;
        width: 125.8rem;
        height: 175.4rem;
        left: 9.1rem;
        top: 646.9rem;
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
    }




</style>
