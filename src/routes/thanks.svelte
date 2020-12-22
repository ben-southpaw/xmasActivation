<script>


</script>

<section>
    <div class="thanks-container">
        <h1>Thanks for submitting and merry xmas!</h1>
        <p>We hope to deliver your gift to you asap!<br>
        Be sure to keep an eye on your mailbox first week of january</p>
    </div>
</section>

<style type="scss">
		@import './src/scss/global';
        section {
          overflow: hidden;
           div {
           height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          z-index: 100;
               width: 30rem;
          margin: 0 3.5rem;
             @include respond-to("desktop") {
               width: 100rem;
          margin: 0 22rem;
             }
          h1{
          font-family: $main_cako;
          font-size: 5rem;
            color: darkgoldenrod;
            @include respond-to("desktop") {
              font-size: 8rem;
            }
        }
        p {
          font-family: $bold_gilroy;
          font-size: 2rem;
          color: $font-white;
              margin-top: 4rem;
          @include respond-to("desktop") {
            margin-top: 5rem;
            font-size: 4rem;
          }
                }
            }
        }



</style>
