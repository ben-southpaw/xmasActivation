<section>
    <h1>View me on desktop</h1>
    <img src="/images/horns.svg" alt="mobilehorns">
</section>

<style lang="scss">
   @import '../scss/global';
    section {
      height: 100vh;
      width: 100vw;
      h1{
        font-family: $main_cako;
        font-size: 4rem;
        position: absolute;
        color: $mid-blue;
        width: 90vw;
        text-transform: uppercase;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
      }
      img {
        transform: translate(35%, 25%);
      }
    }
</style>