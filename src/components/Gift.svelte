<script>
    import StarThree from "./StarThree.svelte";
    import Candycane from "./Candycane.svelte";
    import {writable} from 'svelte/store';
    // import dotenv from 'dotenv';
    // dotenv.config();
    // var formspree = process.env.FORMSPREE;

    export let name;
    export let foundName;
    export let comp;

    let user = writable({
        address_1: '',
        address_2: ''
    })

</script>

<section>
    <div class="text-container">
        <h1 class="text-gift">Lorem ipsum <br> gift for you</h1>
        <h1 class="gift-name">{name}</h1>
        <h1 class="gift-company">{comp}</h1>
        <p class="stamp-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="images-container">
        <div class="candy-cane">
            <Candycane />
        </div>
        <img class="gift-1" src="/images/gift-section/gift_1.svg" alt="gift1">
        <img class="gift-2" src="/images/gift-section/gift_2.svg" alt="gift2">
        <img class="gift-3" src="/images/gift-section/gift_3.svg" alt="gift3">
        <img class="gift-stamp" src="/images/gift-section/stamp.svg" alt="stamp">
        <img class="labels" src="/images/gift-section/labels_full_lines.svg" alt="labels">
        <div class="star-a">
            <StarThree />
        </div>
        <img class="star-b" src="/images/stars/star_3.svg" alt="star3">
        <img class="star-c" src="/images/stars/star_5.svg" alt="star5">

        <img class="gift-box" src="/images/gift-section/gift_big.svg" alt="star5">
        <div class="input-box">
        </div>
        <p class="input-box_name">{foundName.name}</p>
<!--        //{process.env.FORMSPREE}-->
        <form action="" method="POST">
                    <input class="input-box_address_1" type="text" placeholder="address" bind:value={$user.address_1} name="address_1"/>
                    <input class="input-box_address_2" type="text" placeholder="postcode" bind:value={$user.address_2} name="address_1" />
                    <button class="input-box_address_submit" type="submit">Submit address</button>
        </form>

    </div>

</section>

<style lang="scss">
    @import '../scss/global';
    @import '../scss/gift-extras.scss';

    section {
      .input-box {
          position: absolute;
          width: 33rem;
          height: 32rem;
          left: 2.25rem;
          top: 111.4rem;
          background: $mid-blue;
        @include respond-to("desktop") {
          left: unset;
          right: 44.6rem;
          top: 111.4rem;
        }
        }
        .input-box_name {
          position: absolute;
          width: 27.5rem;
          height: 3rem;
          left: 5rem;
          top: 114rem;
          text-align: center;
          color:$font-white;
          font-family: $main_gilroy;
          font-size: 2.4rem;
          line-height: 3.6rem;
          @include respond-to("desktop") {
          width: 22rem;
          height: 3rem;
          left: 71rem;
          top: 114rem;
          font-size: 2.4rem;
          line-height: 3.6rem;
          }
        }
        .input-box_address_1 {
          position: absolute;
          color:$font-white;
          font-family: $main_gilroy;
          font-size: 2rem;
          line-height: 3.6rem;
          border: 0;
          outline: 0;
          border-bottom: 1px $font-white solid;
          background: $mid-blue;
          width: 27.5rem;
          height: 4rem;
          left: 5rem;
          top: 122rem;
          @include respond-to("desktop") {
          width: 22rem;
          height: 5rem;
          left: 71rem;
          top: 122rem;
          }
        }
        .input-box_address_2 {
          position: absolute;
          color:$font-white;
          font-family: $main_gilroy;
          font-size: 2rem;
          line-height: 3.6rem;
          border: 0;
          outline: 0;
          border-bottom: 1px $font-white solid;
          background: $mid-blue;
          width: 27.5rem;
          height: 4rem;
          left: 5rem;
          top: 128rem;
          @include respond-to("desktop") {
          width: 22rem;
          height: 5rem;
          left: 71rem;
          top: 128rem;
          }
        }
        .input-box_address_submit {
          position: absolute;
          background: $purple;
          cursor: pointer;
          border: none;
          text-decoration: none;
          font-family: $main_gilroy;
          color: $font-white;
          background: $mid-blue;
          width: 27rem;
          height: 5rem;
          left: 5rem;
          top: 136rem;
          @include respond-to("desktop") {
          width: 22rem;
          height: 5rem;
          left: 71rem;
          top: 136rem;
          }
        }
        ::placeholder {
          color: $font-grey;
          opacity: 0.5;
        }
      }

       input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px $mid-blue inset !important;
            }

</style>