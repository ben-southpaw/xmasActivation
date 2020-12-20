<script>
    import StarOne from "./StarOne.svelte";
    import Tree from "./Tree.svelte";
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
    let stat1 = '';
    let stat2 = '';
    let stat3 = '';
    let stat4 = '';

    onMount(async () => {
        const urlSearch = getUrlSearch();
        name = urlSearch.get('name');
        comp = urlSearch.get('company');
        companyData = data[comp];
        stat1 = companyData.stat1;
        stat2 = companyData.stat2;
        stat3 = companyData.stat3;
        stat4 = companyData.stat4;
        members = companyData.members;
        foundName = members.find((member) => member.name.toLowerCase().includes(name));
        console.log(foundName, 'found name');
        }
    );

        //lights animating
    let x = 1;
    let isActive = false;
    setInterval(() => {
        isActive = !isActive;
    }, 500);

</script>

<section class="personal-container">
    <div class="personal-header">
        <a class="nav-ac" href="https://acdc.adventureclub.io" target="_blank">&nbsp;</a>
        <p class="nav-text">Merry Christmas</p>
    </div>

    <div class="blank-ornaments">
        <img class="blank-ornaments__1 swing" src="/images/ornaments/ornament_round.svg" alt="ornament-one">
        <img class="blank-ornaments__2" src="/images/ornaments/ornament_round.svg" alt="ornament-two">
        <img class="blank-ornaments__3 swing" src="/images/ornaments/ornament_round.svg" alt="ornament-three">
        <img class="blank-ornaments__4 swing" src="/images/ornaments/ornament_round.svg" alt="ornament-four">
        <img class="blank-ornaments__5 swing" src="/images/ornaments/ornament_round_2.svg" alt="ornament-four">

    </div>

    <div class="name-ornaments">
        <img class="name-ornaments__2-4 swing" src="/images/name-ornaments/ornament_name_2.4.svg" alt="name-2-4">
    </div>

    <div class="personal-text-blocks">
    <h1 class="text-one">Merry Christmas, <br> {name}</h1>
        <p class="text-two">Lorem ipsum not sure what this extra quote is for</p>

    </div>

    <div class="cracker-container">
        <div class="personal-note"></div>
        <p class="personal-quote">{foundName.personal_quote}</p>
        <p class="from-text">Love, Andre Taris</p>
        <img class="cracker-1" src="/images/cracker_1.svg" alt="cracker1">
        <img class="cracker-2" src="/images/cracker_2.svg" alt="cracker2">
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
        <img class="star__two" src="/images/stars/star_2.svg" alt="starTwo">
        <img class="xxx-flag" src="/images/xxx_flag.svg" alt="flag">
        <img class="hat" src="/images/hat.svg" alt="hat">
        <img class="horns" src="/images/horns.svg" alt="horns">
        <img class="arrow-one" src="/images/arrow.svg" alt="horns">
        <img class="arrow-two" src="/images/arrow.svg" alt="horns">
        <div class="star__one" >
           <StarOne />
        </div>

    </div>

    <div class="stats-text">
        <h1 class="stats-1">{stat1.number}</h1>
        <p class="stats-text-1">{stat1.text}</p>
        <h1 class="stats-2">{stat2.number}</h1>
        <p class="stats-text-2">{stat2.text}</p>
        <h1 class="stats-3">{stat3.number}</h1>
        <p class="stats-text-3">{stat3.text}</p>
        <h1 class="stats-4">{stat4.number}</h1>
        <p class="stats-text-4">{stat4.text}</p>
    </div>

    <div class="personal-lights">
        <img class="lights-4" src="/images/lights/lights_4.1.svg" alt="lights4" data-active="{isActive}">
        <img class="lights-4" src="/images/lights/lights_4.2.svg" alt="lights4" data-active="{!isActive}">
        <img class="lights-5" src="/images/lights/lights_5.1.svg" alt="lights5-1" data-active="{isActive}">
        <img class="lights-5" src="/images/lights/lights_5.2.svg" alt="lights5-1" data-active="{!isActive}">
    </div>

    <div class="personal-trees">
        <div class="trees-one" >
           <Tree />
        </div>
        <img class="trees-two" src="/images/trees/horizontal_tree_triangles_2.svg" alt="treeTwo">
        <div class="trees-three" >
            <Tree />
        </div>
        <img class="trees-four" src="/images/trees/horizontal_tree_triangles_2.svg" alt="treeFour">
    </div>
    <div class="gift-container">
        <Gift {comp} {name} {foundName}/>
    </div>
    <div class="footer-container">
        <Footer />
    </div>

</section>

<style lang="scss">
     @import '../scss/global';
     @import '../scss/personal-bg-items';
     @import '../scss/personal-text';
     @import '../scss/personal-ornaments.scss';

  section {
    //width: 144rem;

    .footer-container {
      position: absolute;
      z-index: 2;
      width: 37.5rem;
      height: 201.7rem;
      left: 0;
      top: 442rem; //874.6rem;
      @include respond-to("desktop") {
        width: 125.8rem;
        height: 175.4rem;
        left: 9.1rem;
        top: 807.9rem;
      }
    }
    .gift-container {
        position: absolute;
        z-index: 2;
        width: 143rem;
        height: 144.9rem;
        left: 0;
        top: 652rem;
    }

    .cracker-container {
        .cracker-1 {
          position: absolute;
          width: 51.6rem;
          height: 33.4rem;
          left: -7rem;
          top: 520.2rem;
          transform: rotate(90deg);
          @include respond-to("desktop") {
          transform: rotate(0);
          transition: transform 0.5s;
          width: 40.8rem;
          height: 26.3rem;
          left: 33.3rem;
          top: 546.7rem;
          }
        }
       .cracker-2 {
          position: absolute;
          width: 51.6rem;
          height: 33.4rem;
          left: -7rem;
          top: 612.2rem;
          transform: rotate(90deg);
         @include respond-to("desktop") {
          transform: rotate(0);
          transition: transform 0.5s;
           width: 40.8rem;
          height: 26.3rem;
          right: 33.3rem;
          top: 546.7rem;
           left: unset;
         }
        }

        .personal-note {
          position: absolute;
          width: 60.8rem;
          height: 27rem;
          left: -11.5rem;
          top: 567rem;
          background: $violet;
          transform: rotate(90deg);
          @include respond-to("desktop") {
          transform: rotate(0);
          width: 76.2rem;
          height: 23.2rem;
          left: 33.3rem;
          top: 548.1rem;
          border-radius: 5rem;
          box-shadow:
             15vw 0 0 $primary-bg inset,
             -15vw 0 0 $primary-bg inset;
          -webkit-transition: all .2s ease-out;
          transition: all .2s ease-out;
          }
        }
        .personal-quote {
            font-family: $main_gilroy;
            font-size: 2rem;
            line-height: 3rem;
            text-align: center;
            z-index: 1;
            color: $font-white;
            position: absolute;
            width: 26.5rem;
            height: 25.6rem;
            left: 5.5rem;
            top: 567rem;
          @include respond-to("desktop") {
            font-size: 2rem;
            line-height: 3rem;
            width: 50.4rem;
            height: 12rem;
            left: 46.8rem;
            right: 46.8rem;
            top: 552.3rem;
            opacity: 0;
            -webkit-transition: opacity .5s ease-out;
            transition: opacity .5s ease-out;
          }
          }
        .from-text {
            font-family: $main_cako;
            font-size: 2rem;
            line-height: 2.4rem;
            text-align: center;
            z-index: 1;
            color: $mid-blue;
            position: absolute;
            width: 15rem;
            height: 4.8rem;
            left: 11.5rem;
            top: 596rem;
          @include respond-to("desktop") {
          width: 20rem;
            height: 1.9rem;
            left: 62rem;
            top: 566rem;
            opacity: 0;
            -webkit-transition: opacity .5s ease-out;
            transition: opacity .5s ease-out;
          }
        }
    }
    .cracker-container:hover .cracker-1 {
          transform: translateX(-33rem);
        }
    .cracker-container:hover .cracker-2 {
          transform: translateX(33rem);
        }
    .cracker-container:hover .from-text {
          opacity: 1;
    }
    .cracker-container:hover .personal-quote {
          opacity: 1;
    }
    .cracker-container:hover .personal-note {
          box-shadow:
    0 0 0 $primary-bg inset,
    0 0 0 $primary-bg inset;
    }
    .personal-lights {
      .lights-4 {
        position: absolute;
        width: 52.6rem;
        height: 13rem;
        left: -9rem;
        top: 278.4rem;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        opacity: 0;
        @include respond-to("desktop") {
        transform: none;
        width: 96.6rem;
        height: 29.9rem;
        left: -0.6rem;
        top: 238.1rem;
        }
        &[data-active="true"] {
        opacity: 1;
    }
      }
      .lights-5 {
        display: none;
        @include respond-to("desktop") {
          display: block;
          position: absolute;
          width: 96.8rem;
          height: 83rem;
          left: 61rem;
          top: 610.5rem;
          opacity: 0;
        }
        &[data-active="true"] {
        opacity: 1;
    }
      }
    }
     .personal-trees {
       display: none;
        @include respond-to("desktop") {
          display: block;
          .trees-one {
            position: absolute;
            width: 22rem;
            height: 31.2rem;
            left: 47rem;
            top: 365.8rem;
          }
          .trees-two {
            position: absolute;
            width: 22rem;
            height: 31.2rem;
            left: 72rem;
            top: 370.8rem;
          }
          .trees-three {
            position: absolute;
            width: 22rem;
            height: 31.2rem;
            left: 96rem;
            top: 365.8rem;
          }
          .trees-four {
            position: absolute;
            width: 22rem;
            height: 31.2rem;
            left: 120rem;
            top: 370.8rem;
          }
        }
      }
  }
     
</style>