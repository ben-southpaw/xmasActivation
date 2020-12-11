<script></script>


<section>
    <div class="text-container">
        <h1 class="text-gift">Lorem ipsum <br> gift for you</h1>
<!--        <h1 class="footer-text__two">..to all of you</h1>-->
<!--        <h1 class="footer-text__three">a very Merry Christmas</h1>-->
    </div>
    <div class="images-container">
        <img class="candy-cane" src="/images/gift-section/candy_cane.svg" alt="candy">
        <img class="gift-1" src="/images/gift-section/gift_1.svg" alt="gift1">
        <img class="gift-2" src="/images/gift-section/gift_2.svg" alt="gift2">
        <img class="gift-3" src="/images/gift-section/gift_3.svg" alt="gift3">
<!--        <img class="gift-line-one" src="/images/gift-section/gift_line_1.svg" alt="line1">-->
<!--        <img class="gift-line-two" src="/images/gift-section/gift_line_2.svg" alt="line2">-->
        <img class="gift-stamp" src="/images/gift-section/gift_stamp.svg" alt="stamp">
        <img class="gift-tag-one" src="/images/gift-section/gift_tag.svg" alt="tag1">
        <img class="gift-tag-two" src="/images/gift-section/gift_tag.svg" alt="tag2">

        <img class="star-b" src="/images/stars/star_3.svg" alt="star3">
        <img class="star-a" src="/images/stars/star_4.svg" alt="star4">
        <img class="star-c" src="/images/stars/star_5.svg" alt="star5">
    </div>

</section>

<style lang="scss">
    @import '../scss/global';
    section {
      .images-container {
        .candy-cane {
          position: absolute;
          width: 14.4rem;
          height: 6.6rem;
          left: 18.6rem;
          top: 0;
        }
        .gift-1 {
          position: absolute;
          width: 29.4rem;;
          height: 15.4rem;
          left: 1rem;
          top: 6.6rem;
        }
        .gift-2 {
          position: absolute;
          width: 8rem;
          height: 14.9rem;
          left: 31.9rem;
          top: 6rem;
          transform: rotate(-25deg);
        }
        .gift-3 {
          position: absolute;
          width: 9.9rem;
          height: 9.9rem;
          left: 42.6rem;
          top: 12.5rem;
          transform: rotate(15deg);
        }
        .gift-line-one {
            position: absolute;
            left: -2%;
            right: 30%;
            top: 14%;
            bottom: 51%;
        }
        .gift-line-two {
            position: absolute;
            left: 60.77%;
            right: 8.39%;
            top: 48.59%;
            bottom: 39.55%;
        }
        .gift-stamp {
          position: absolute;
          width: 46rem;
          height: 46rem;
          left: 1rem;
          top: 80.3rem;
        }
        .gift-tag-one {
          position: absolute;
          width: 48rem;
          height: 24rem;
          left: 95rem;
          top: 58.4rem;
        }
        .gift-tag-two {
          position: absolute;
          width: 40.4rem;
          height: 23.2rem;
          right: -9.7rem;
          top: 96.7rem;
          transform: rotate(90deg);
        }

        .star-a {
          position: absolute;
          width: 11rem;
          height: 11rem;
          left: 12rem;
          top: 68.5rem;
        }
        .star-b{
          position: absolute;
          width: 11rem;
          height: 11rem;
          left: 1rem;
          top: 69.6rem;
        }
        .star-c {
          position: absolute;
          width: 11rem;
          height: 11rem;
          left: 125.2rem;
          top: 78rem;
        }
      }

      .text-container {
        font-family: $main_cako;
        color: $violet;
        height: 13.6rem;
        line-height: 13.6rem;
        text-align: center;

        .text-gift {
          position: absolute;
          width: 76.5rem;
          height: 27rem;
          left: 23.67%;
          right: 22.83%;
          top: calc(50% - 27rem/2 - 28.6rem);
          font-size: 11rem;
          line-height: 13.5rem;
        }

        //.footer-text__two {
        //  font-size: 11rem; //12 on figma
        //  position: absolute;
        //  left: 18.52%;
        //  right: 18.52%;
        //  top: calc(50% - 13.6rem / 2 + 19.2rem);
        //}
        //
        //.footer-text__three {
        //  height: 27.2rem;
        //  font-size: 11rem; //12 on figma
        //  position: absolute;
        //  left: 8.43%;
        //  right: 8.35%;
        //  top: calc(50% - 27.2rem / 2 + 46.3rem);
        //}
      }

    }




</style>