<script>
    import StarTwo from "./StarTwo.svelte";
    import Chandelier from "./Chandelier.svelte";
    import Snowman from "./Snowman.svelte";
    import Personal from "./Personal.svelte";
    import Background from "./Background.svelte";
    import Footer from "./Footer.svelte";
    import {data} from "../../static/copy/copy.js";
    import {getUrlSearch} from "../../static/js/path.js";
    import {onMount} from 'svelte';
    // import scroll from '/js/scroll.js';

    let companyData = {name: ''};
    let visible = false;
    let introAnimation = false;
    let names = [];
    let members = [];
    let currentUser = {};
    let nameOrnaments = [
        {name:"name-ornaments__1-1", src:"/images/name-ornaments/ornament_name_1.1.svg"},
            {name:"name-ornaments__1-3", src:"/images/name-ornaments/ornament_name_1.3.svg"},
                {name:"name-ornaments__1-5", src:"/images/name-ornaments/ornament_name_1.5.svg"},
                    {name:"name-ornaments__2-2", src:"/images/name-ornaments/ornament_name_2.2.svg"},
                        {name:"name-ornaments__2-4", src:"/images/name-ornaments/ornament_name_2.4.svg"},
                            {name:"name-ornaments__2-6", src:"/images/name-ornaments/ornament_name_2.6.svg"},
                                {name:"name-ornaments__3-2", src:"/images/name-ornaments/ornament_name_3.2.svg"},
                                    {name:"name-ornaments__3-4", src:"/images/name-ornaments/ornament_name_3.4.svg"},
                                        {name:"name-ornaments__4-1", src:"/images/name-ornaments/ornament_name_4.1.svg"}
    ];
    let y = '';
    let name;
    let comp;
    let nameSlots = new Array(9).fill();


    console.log(y, 'scroll here');

    onMount(async () => {
        const urlSearch = getUrlSearch();
        name = urlSearch.get('name');
        comp = urlSearch.get('company');
        companyData = data[comp];
        names = companyData.members;
        currentUser = names.find((user) => user.id === name);
        console.log(currentUser, name, 'names');
        }
    );

    //lights animating
    let x = 1;
    let lightActive = false;
    let transitionActive = false;

    var lights = setInterval(() => {
        lightActive = !lightActive;
    }, 500);
    var lightsContainer = setTimeout(()=> {
        introAnimation = true;
;    },1000);

    //if member === name then enable clickable
    let onNameClick = () => {
        transitionActive = true;
        setTimeout(()=> {
           visible = !visible;
           y = 0;
        }, 2500)
    };

</script>
<svelte:window bind:scrollY={y}/>
{#if !visible}
<main data-introAnimation="{introAnimation}">
    <Background />
    <div class="header">
        <div class="lights">
             <img class="nav-lights" src="/images/lights/lights_1.1.svg" data-active="{lightActive}" alt="lights" >
        <img class="nav-lights" src="/images/lights/lights_1.2.svg" data-active="{!lightActive}" alt="lights" >
        </div>

        <a class="nav-ac" href="https://acdc.adventureclub.io" target="_blank">&nbsp;</a>
        <p class="nav-text">Merry Christmas</p>
        <h1 class="text-one">
            <span class="text-one-inner">Hey, you beautiful<br> people at {companyData.name}, <br>Merry Christmas!</span>
        </h1>

        <p class="text-two">{companyData.lead_quote}</p>
    </div>

    <div class="blank-ornaments">
        <img class="blank-ornaments__1" src="/images/ornaments/ornament_round.svg" alt="ornament-one">
        <img class="blank-ornaments__2" src="/images/ornaments/ornament_round_2.svg" alt="ornament-two">
        <img class="blank-ornaments__xxx" src="/images/ornaments/ornament_xxx.svg" alt="ornament-xxx">
    </div>

    <div class="name-ornaments" >
         {#each nameOrnaments as ornament, i}
             <div class="{ornament.name} swing" style="background-image: url({ornament.src})">
                 {#if names.length}
                <h1 class="client client-{i + 1} {currentUser.id === names[i % names.length].id ? 'isActive' : ''}"
                    on:click={onNameClick}
                    >
                    {names[i % names.length].name}
                </h1>
             {/if}
             </div>
         {/each}
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
        <div class="star__one">
            <StarTwo />
        </div>
        <div class="star__two">
            <StarTwo />
        </div>
        <div class="chandelier">
            <Chandelier />
        </div>
        <div class="snowman">
            <Snowman />
        </div>
    </div>

    <div class="lights">
        <img class="lights-2" src="/images/lights/lights_2.1.svg" data-active="{lightActive}" alt="lights2-1">
         <img class="lights-2" src="/images/lights/lights_2.2.svg" data-active="{!lightActive}" alt="lights2-1">
        <img class="lights-3" src="/images/lights/lights_3.1.svg" data-active="{lightActive}" alt="lights3-1">
         <img class="lights-3" src="/images/lights/lights_3.2.svg" data-active="{!lightActive}" alt="lights3-1">
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
{/if}
{#if visible}
<div class="personal-page__container" bind:this={visible}>
    <Personal {data} />
</div>
{/if}

 <div class="transition-container" data-transitionactive="{transitionActive}">
        <div class="transition-one"></div>
        <div class="transition-two"></div>
        <h1 class="transition-text"><span>ho</span> <span>ho</span> <span>ho</span></h1>
 </div>

<style lang="scss">
    @import '../scss/global';
    @import '../scss/header';
    @import '../scss/ornaments';
    @import '../scss/bg-items';
    @import '../scss/text-blocks';
    @import '../scss/trees'; //height: 989.1rem;

    .transition-container {
      display: flex;
      pointer-events: none;
      opacity: 1;
      transition: opacity 1s 3s $ease-out-sine;
      &[data-transitionactive="true"] {
          opacity: 0;
        }
    }
      .transition-one, .transition-two {
        position: fixed;
        z-index: 3;
        height: 200vh;
        width: 200vh;
        border-radius: 50%;
        right: -100vh;
        bottom: -100vh;
        transform: scale(0);
        transition: transform 1s ease-in-out;
        @include respond-to('desktop') {
        height: 200vw;
        width: 200vw;
        right: -100vw;
        bottom: -100vw;
        }

        [data-transitionactive="true"] & {
          transform: scale(1.3);
        }
      }


      .transition-one {
        background: $violet;

      }
      .transition-two {
        background: $gold;
        transition-delay: 0.1s;
      }
      .transition-text {
        color: $font-white;
        font-size: 20rem;
        transition-delay: 0.5s;
        z-index: 4;
        position: fixed;
        font-family: $main_cako;
        white-space: nowrap;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .transition-text span {
        display: inline-block;
        transition: transform 2s $ease-out-quart, opacity 0s;
        transform: scale(1.3);
        opacity: 0;

        @for $i from 1 through 3 {
            &:nth-child(#{$i}) {
                transition-delay: #{$i * 0.2 + 1}s;
            }
        }

        [data-transitionactive="true"] & {
          opacity: 1;
          transform: scale(1);
        }
      }




    .personal-page__container {
        height: 1033rem;
        width: 37.5rem;
        @include respond-to('desktop') {
            height: 989.1rem;
            width: 144rem;
        }
    }

    main {
    //display: none; //undo when needed
    position: relative;
    width: 37.5rem;
    height: 598rem;
    @include respond-to('desktop') {
      width: 144rem;
      height: 828.1rem;
    }

      .footer-container {
        position: absolute;
        z-index: 2;
        //width: 37.5rem;
        //height: 201.7rem;
        //left: 0;
        //top: 391.3rem;
        @include respond-to('desktop') {
        width: 125.8rem;
        height: 175.4rem;
        left: 9.1rem;
        top: 646.9rem;
        }
      }



      //Lights
      .lights {
        .lights-2 {
          position: absolute;
          width: 22.3rem;
          height: 10.9rem;
          left: 13.1rem;
          top: 132.9rem;
          opacity: 0;
          @include respond-to('desktop') {
          width: 44.5rem;
          height: 21.7rem;
          left: 21.5rem;
          top: 219.3rem;
          }
          &[data-active="true"] {
            opacity: 1;
          }
        }

        .lights-3 {
          position: absolute;
          width: 13rem;
          height: 3rem;
          left: 2rem;
          top: 152rem;
          opacity: 0;
          @include respond-to('desktop') {
          width: 26rem;
          height: 6rem;
          left: 71rem;
          top: 246.2rem;
          }
          &[data-active="true"] {
            opacity: 1;
          }
        }
      }
      }




</style>
