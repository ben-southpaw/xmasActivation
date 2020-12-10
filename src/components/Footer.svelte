<script></script>


<footer>
    <div class="text-container">
        <h1 class="footer-text__one">From all of us..</h1>
        <h1 class="footer-text__two">..to all of you</h1>
        <h1 class="footer-text__three">a very Merry Christmas</h1>
    </div>
    <div class="images-container">
        <img class="ac-wheel__one" src="/images/ac_wheel_small.svg" alt="ac-one">
        <img class="ac-wheel__two" src="/images/ac_wheel_small.svg" alt="ac-two">
        <img class="ac-wheel__three" src="/images/ac_wheel_small.svg" alt="ac-three">
        <img class="heart" src="/images/heart_big.svg" alt="heart">
    </div>
    <div class="contact-container">
        <a class="ac-logo" href="https://acdc.adventureclub.io" target="_blank">&nbsp;</a>
        <div class="social">
            <a class="tw" href="https://twitter.com/advclb" target="_blank">Tw</a>
            <a class="in" href="https://www.instagram.com/adventureclub.io" target="_blank">In</a>
            <a class="fb" href="https://www.facebook.com/advclb/" target="_blank">Fb</a>
            <a class="li" href="https://www.linkedin.com/company/adventureclub/" target="_blank">Li</a>
        </div>
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

    }


</style>