<script>
    import Gift from "./Gift.svelte";
    import Footer from "./Footer.svelte";
    import {getUrlSearch} from "../../static/js/path.js";
    import {onMount} from 'svelte';

    export let data;
    let name = '';
    let comp = '';
    var companyData = {};
    var members = [];
    let foundName = {};

    onMount(async () => {
        const urlSearch = getUrlSearch();
        name = urlSearch.get('name');
        comp = urlSearch.get('company');
        companyData = data[comp];
        members = companyData.members;
         console.log(members[3].name.split(" "), 'here');
        foundName = members.find((member) => member.name.toLowerCase().includes(name));
        }
    );
    





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
    </div>

    <div class="personal-text-blocks">
    <h1 class="text-one">Merry Christmas, <br> {name}</h1>
        <p class="text-two">{foundName.personal_quote}</p>

    </div>

    <div class="personal-bg-items">
        <img class="mistletoe" src="/images/mistletoe.svg" alt="mistletoe">
        <img class="snowglobe" src="/images/solid-shapes/solid_shape_snowglobe.svg" alt="snowglobe">
         <img class="solid-shape__one" src="/images/solid-shapes/solid_shape_1.svg" alt="solidshapeOne">
        <img class="solid-shape__four" src="/images/solid-shapes/solid_shape_4.svg" alt="solidshapeFour">
        <img class="solid-shape__five-1" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle1">
        <img class="solid-shape__five-2" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle2">
        <img class="solid-shape__five-3" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle2">
        <img class="solid-shape__five-4" src="/images/solid-shapes/solid_shape_5.svg" alt="triangle2">
        <img class="ac-snowflake__four" src="/images/snowflakes/ac_snowflake_4.svg" alt="snowflakeFour">
        <img class="ac-snowflake__five" src="/images/snowflakes/ac_snowflake_5.svg" alt="snowflakeFive">
        <img class="ac-snowflake__six" src="/images/snowflakes/ac_snowflake_6.svg" alt="snowflakeSix">
        <img class="ac-snowflake__seven" src="/images/snowflakes/ac_snowflake_7.svg" alt="snowflakeSeven">
        <img class="star__one" src="/images/stars/star_1.svg" alt="starOne">
        <img class="star__two" src="/images//stars/star_2.svg" alt="starTwo">
        <img class="xxx-flag" src="/images/xxx_flag.svg" alt="flag">
        <img class="hat" src="/images/hat.svg" alt="hat">
        <img class="horns" src="/images/horns.svg" alt="horns">
        <img class="arrow-one" src="/images/arrow.svg" alt="horns">
        <img class="arrow-two" src="/images/arrow.svg" alt="horns">

    </div>

    <div class="stats-text">
        <h1 class="stats-1">12</h1>
        <p class="stats-text-1">Lorem ipsum dolor sit amet, consectetur</p>
        <h1 class="stats-2">6</h1>
        <p class="stats-text-2">Lorem ipsum</p>
        <h1 class="stats-3">666%</h1>
        <p class="stats-text-3">Lorem ipsum dolor sit amet, consectetur</p>
        <h1 class="stats-4">48k</h1>
        <p class="stats-text-4">Lorem ipsum <br> dolor sit amet,<br> consectetur</p>
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
     @import '../scss/personal-bg-items';
     @import '../scss/personal-text';

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
        top: 300rem;
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
          height: 31.2rem;
          left: 47rem;
          top: 365.8rem;
        }
        .trees-two{
          position: absolute;
          width: 22rem;
          height: 31.2rem;
          left: 72rem;
          top: 370.8rem;
        }
        .trees-three{
          position: absolute;
          width: 22rem;
          height: 31.2rem;
          left: 96rem;
          top: 365.8rem;
        }
        .trees-four{
          position: absolute;
          width: 22rem;
          height: 31.2rem;
          left: 120rem;
          top: 370.8rem;
        }
      }


  }
     
</style>