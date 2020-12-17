<script>

    export let name;
    export let comp;
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
        <img class="candy-cane" src="/images/gift-section/candy_cane.svg" alt="candy">
        <img class="gift-1" src="/images/gift-section/gift_1.svg" alt="gift1">
        <img class="gift-2" src="/images/gift-section/gift_2.svg" alt="gift2">
        <img class="gift-3" src="/images/gift-section/gift_3.svg" alt="gift3">
        <img class="gift-stamp" src="/images/gift-section/stamp.svg" alt="stamp">
        <img class="labels" src="/images/gift-section/labels_full_lines.svg" alt="labels">
        <img class="star-b" src="/images/stars/star_3.svg" alt="star3">
        <img class="star-a" src="/images/stars/star_4.svg" alt="star4">
        <img class="star-c" src="/images/stars/star_5.svg" alt="star5">

        <img class="gift-box" src="/images/gift-section/gift_big.svg" alt="star5">
        <div class="input-box">

        </div>
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
          top: 12rem;
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
        .labels {
          position: absolute;
          height: 85%;
          width: 100%;
          z-index: -1;
        }

        .star-a {
          position: absolute;
          width: 11rem;
          height: 11rem;
          left: 12rem;
          top: 33rem;
        }
        .star-b{
          position: absolute;
          width: 11rem;
          height: 11rem;
          left: 1rem;
          top: 44rem;
        }
        .star-c {
          position: absolute;
          width: 15rem;
          height: 15rem;
          left: 121.2rem;
          top: 128rem;
        }
        .gift-box {
          position: absolute;
          width: 97.9rem;
          height: 49rem;
          right: 22rem;
          top: 95.9rem;
          z-index: -1;
        }
        .input-box {
          position: absolute;
          width: 32.4rem;
          height: 31.8rem;
          right: 44.6rem;
          top: 111.4rem;
          background: $mid-blue;
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
        .gift-name {
          position: absolute;
          height: 4rem;
          width: 23rem;
          top: 68rem;
          right: 15rem;
          font-family: $main_cako;
          font-size: 6.2rem;
          line-height: 4rem;
        }

        .gift-company {
          position: absolute;
          height: 8rem;
          width: 33rem;
          top: 106rem;
          right: -8rem;
          font-family: $main_cako;
          font-size: 4rem;
          line-height: 4rem;
          transform: rotate(-90deg);
        }
        .stamp-text {
          position: absolute;
          height: 14.4rem;
          width: 32.9rem;
          top: 94rem;
          left: 7.6rem;
          color: $font-white;
          font-family: $main_gilroy;
          font-size: 2.2rem;
          line-height: 3.6rem;
          z-index: 1;
        }
      }
    }
</style>