
<footer>
    <div class="text-container">
        <h1 class="footer-text__one">From all of us..</h1>
        <h1 class="footer-text__two">..to all of you.</h1>
        <h1 class="footer-text__three">A very, <br> Merry Christmas</h1>
    </div>
    <div class="images-container">
        <img class="ac-wheel__one" src="/images/ac_wheel_small.svg" alt="ac-one">
        <img class="ac-wheel__two" src="/images/ac_wheel_small.svg" alt="ac-two">
        <img class="ac-wheel__three" src="/images/ac_wheel_small.svg" alt="ac-three">
        <img class="heart" src="/images/heart_big.svg" alt="heart">
    </div>
    <div class="ac-members-container">
        <img class="ac-member__1" src="/images/ac-members/ac_tommi.svg" alt="1">
        <img class="ac-member__2" src="/images/ac-members/ac_tiina.svg" alt="2">
        <img class="ac-member__3" src="/images/ac-members/ac_thuy.svg" alt="3">
        <img class="ac-member__4" src="/images/ac-members/ac_jochem.svg" alt="4">
        <img class="ac-member__5" src="/images/ac-members/ac_kaisa.svg" alt="5">
        <img class="ac-member__6" src="/images/ac-members/ac_marten.svg" alt="6">
        <img class="ac-member__7" src="/images/ac-members/ac_kev.svg" alt="7">
        <img class="ac-member__8" src="/images/ac-members/ac_mario.svg" alt="8">
        <img class="ac-member__9" src="/images/ac-members/ac_boris.svg" alt="9">
        <img class="ac-member__10" src="/images/ac-members/ac_martijn.svg" alt="10">
        <img class="ac-member__11" src="/images/ac-members/ac_martijn2.svg" alt="11">
        <img class="ac-member__12" src="/images/ac-members/ac_stephanie.svg" alt="12">
        <img class="ac-member__13" src="/images/ac-members/ac_matthias.svg" alt="13">
        <img class="ac-member__14" src="/images/ac-members/ac_andre.svg" alt="14">
        <img class="ac-member__15" src="/images/ac-members/ac_anders.svg" alt="15">
        <img class="ac-member__16" src="/images/ac-members/ac_benjamin.svg" alt="16">
    </div>
    <div class="contact-container">
        <a class="ac-logo" href="https://acdc.adventureclub.io" target="_blank">&nbsp;</a>
        <div class="social"></div>
            <a class="tw" href="https://twitter.com/advclb" target="_blank">Tw</a>
            <a class="in" href="https://www.instagram.com/adventureclub.io" target="_blank">In</a>
            <a class="fb" href="https://www.facebook.com/advclb/" target="_blank">Fb</a>
            <a class="li" href="https://www.linkedin.com/company/adventureclub/" target="_blank">Li</a>

    </div>

</footer>

<style lang="scss">
    @import '../scss/global';
    @import '../scss/ac-members.scss';
    footer {
      .images-container {
        .ac-wheel__one {
            position: absolute;
            width: 2.3rem;
            height: 2.3rem;
            left: 13.3rem;
            top: 391.3rem;
          @include respond-to("desktop") {
            left: 45.5%;
            right: 52.6%;
            top: 0;
          }
    }
        .ac-wheel__two {
            position: absolute;
            width: 2.3rem;
            height: 2.3rem;
            left: 17.6rem;
            top: 391.3rem;
          @include respond-to("desktop") {
            left: 49.3%;
            right: 49%;
            top: 0;
          }
    }
        .ac-wheel__three {
            position: absolute;
            width: 2.3rem;
            height: 2.3rem;
            left: 21.8rem;
            top: 391.3rem;
          @include respond-to("desktop") {
            left: 52.7%;
            right: 45.4%;
            top: 0;
          }
    }
        .heart {
            position: absolute;
            width: 16.6rem;
            height: 15.1rem;
            left: 10.4rem;
            top: 561.6rem;
            z-index: -1;
          @include respond-to("desktop") {
            width: 35.6rem;
            height: 32.6rem;
            left: 35.82%;
            right: 35.84%;
            top: 56.36%;
            bottom: unset;
          }
    }
  }
      .text-container {
        font-family: $main_cako;
        color: $violet;
        text-align: center;
        @include respond-to("desktop") {
        height: 13.6rem;
        line-height: 13.6rem;
        }

        .footer-text__one {
          font-size: 4.4rem;
          position: absolute;
          width: 33.4rem;
          height: 6.8rem;
          left: 2rem;
          top: 395.3rem;
          @include respond-to("desktop") {
            width: unset;
          font-size: 11rem; //12 on figma
          left: 15.22%;
          right: 15.14%;
          top: calc(50% - 13.6rem/2 - 71.6rem);
          }
        }
        .footer-text__two {
          width: 33.4rem;
          font-size: 3.9rem;
          position: absolute;
          left: 2rem;
          top: 561.6rem;
          @include respond-to("desktop") {
            width: unset;
             font-size: 11rem; //12 on figma
             left: 18.52%;
          right: 18.52%;
          top: calc(50% - 13.6rem/2 + 19.2rem);
          }
        }
        .footer-text__three {
          height: 19.1rem;
          width: 33.5rem;
          font-size: 3.9rem;
          position: absolute;
          left: 2rem;
          top: 569.6rem;
          @include respond-to("desktop") {
            width: unset;
           height: 27.2rem;
          font-size: 11rem; //12 on figma
          left: 8.43%;
          right: 8.35%;
          top: calc(50% - 27.2rem/2 + 46.3rem);
          }
        }
      }

      .contact-container {
        .ac-logo {
            position: absolute;
            width: 11rem;
            line-height: 1.1rem;
            height: 2rem;
            left: 2rem;
            top: 590.6rem;
            background-image: url(/images/ac-logo.svg);
            background-repeat: no-repeat;
            background-size: 11rem;
          @include respond-to("desktop") {
            width: 15.5rem;
            height: 2.3rem;
            left: 15.9rem;
            top: 173.1rem;
            background-size: 11rem;
          }
        }
        .social {
          position: absolute;
          width: 33.4rem;
          height: 10.8rem;
          left: 2rem;
          top: 587.3rem;
          border-top: 1px solid #979797;
          @include respond-to("desktop") {
          width: 98rem;
          height: 7.6rem;
          left: 13.9rem;
          top: 167.8rem;
          }
        }
        .tw {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.1rem;
                line-height: 1.1rem;
                height: 1.1rem;
                font-weight: 600;
                text-align: right;
                text-decoration: none;
                left: 25.4rem;
                top: 591rem;
          @include respond-to("desktop") {
                right: 21.64%;
                top: 98.57%;
                bottom: 0.29%;
          }
            }
        .in {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.1rem;
                line-height: 1.1rem;
                height: 1.1rem;
                font-weight: 600;
                text-align: right;
                text-decoration: none;
                left: 28.4rem;
                top: 591rem;
          @include respond-to("desktop") {
                right: 18.64%;
                top: 98.57%;
                bottom: 0.29%;
          }
            }
        .fb {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.1rem;
                line-height: 1.1rem;
                height: 1.1rem;
                font-weight: 600;
                text-align: right;
                text-decoration: none;
                left: 31.4rem;
                top: 591rem;
          @include respond-to("desktop") {
                right: 15.64%;
                top: 98.57%;
                bottom: 0.29%;
          }
            }
        .li {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.1rem;
                line-height: 1.1rem;
                height: 1.1rem;
                text-align: right;
                text-decoration: none;
                left: 34.4rem;
                top: 591rem;
          @include respond-to("desktop") {
                right: 12.64%;
                top: 98.57%;
                bottom: 0.29%;
          }
            }
      }
}
</style>