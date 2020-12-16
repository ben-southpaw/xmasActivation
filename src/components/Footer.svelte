<script></script>


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
    @include respond-to("desktop") {
    footer {
      .images-container {
        .ac-wheel__one {
            position: absolute;
            width: 2.3rem;
            height: 2.3rem;
            left: 45.5%;
            right: 52.6%;
            top: 0;
    }
        .ac-wheel__two {
            position: absolute;
            width: 2.3rem;
            height: 2.3rem;
            left: 49.3%;
            right: 49%;
            top: 0;
    }
        .ac-wheel__three {
            position: absolute;
            width: 2.3rem;
            height: 2.3rem;
            left: 52.7%;
            right: 45.4%;
            top: 0;
    }
        .heart {
            position: absolute;
            width: 35.6rem;
            height: 32.6rem;
            left: 35.82%;
            right: 35.84%;
            top: 56.36%;
            z-index: -1;
    }
  }
      .text-container {
        font-family: $main_cako;
        color: $violet;
        height: 13.6rem;
        line-height: 13.6rem;
        text-align: center;
        .footer-text__one {
          font-size: 11rem; //12 on figma
          position: absolute;
          left: 15.22%;
          right: 15.14%;
          top: calc(50% - 13.6rem/2 - 71.6rem);
        }
        .footer-text__two {
          font-size: 11rem; //12 on figma
          position: absolute;
          left: 18.52%;
          right: 18.52%;
          top: calc(50% - 13.6rem/2 + 19.2rem);
        }
        .footer-text__three {
          height: 27.2rem;
          font-size: 11rem; //12 on figma
          position: absolute;
          left: 8.43%;
          right: 8.35%;
          top: calc(50% - 27.2rem/2 + 46.3rem);
        }
      }
      .ac-members-container {
        .ac-member__1 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 0;
                top: 26.7rem;
            }
        .ac-member__2 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 16.4rem;
                top: 31.7rem;
            }
        .ac-member__3 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 32.8rem;
                top: 36.7rem;
            }
        .ac-member__4 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 49.2rem;
                top: 31.7rem;
            }
        .ac-member__5 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 65.6rem;
                top: 26.7rem;
            }
        .ac-member__6 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 82rem;
                top: 31.7rem;
            }
        .ac-member__7 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 98.4rem;
                top: 36.7rem;
            }
        .ac-member__8 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 114.8rem;
                top: 31.7rem;
            }
        .ac-member__9 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 0;
                top: 57.8rem;
            }
        .ac-member__10 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 16.4rem;
                top: 62.8rem;
            }
        .ac-member__11 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 32.8rem;
                top: 67.8rem;
            }
        .ac-member__12 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 49.2rem;
                top: 62.8rem;
            }
        .ac-member__13 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 65.6rem;
                top: 57.8rem;
            }
        .ac-member__14 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 82rem;
                top: 62.8rem;
            }
        .ac-member__15 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 98.4rem;
                top: 67.8rem;
            }
        .ac-member__16 {
                position: absolute;
                width: 11rem;
                height: 23.1rem;
                left: 114.8rem;
                top: 62.8rem;
            }
      }
      .contact-container {
        .ac-logo {
            position: absolute;
            width: 15.5rem;
            height: 2.3rem;
            left: 15.9rem;
            top: 173.1rem;
            background-image: url(/images/ac-logo.svg);
            background-repeat: no-repeat;
            background-size: 11rem;
        }
        .social {
          position: absolute;
          width: 98rem;
          height: 7.6rem;
          left: 13.9rem;
          top: 167.8rem;
          border-top: 1px solid #979797;
        }
        .tw {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.4rem;
                line-height: 2rem;
                font-weight: 600;
                text-align: right;
                text-decoration: none;
                right: 21.64%;
                top: 98.57%;
                bottom: 0.29%;
            }
        .in {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.4rem;
                line-height: 2rem;
                font-weight: 600;
                text-align: right;
                text-decoration: none;
                right: 18.64%;
                top: 98.57%;
                bottom: 0.29%;
            }
        .fb {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.4rem;
                line-height: 2rem;
                font-weight: 600;
                text-align: right;
                text-decoration: none;
                right: 15.64%;
                top: 98.57%;
                bottom: 0.29%;
            }
        .li {
                position: absolute;
                font-family: $bold_gilroy;
                color: $font-white;
                font-size: 1.4rem;
                line-height: 2rem;
                text-align: right;
                text-decoration: none;
                right: 12.64%;
                top: 98.57%;
                bottom: 0.29%;
            }
      }
}

    }


</style>