<script>
    import Nav from "./Nav.svelte";
    let groupName = 'adidas';

</script>

<header id="js-header">
    <Nav />
    <div class="header-container">
        <h1>Hey, you beautiful <br> people at {groupName} <br>Merry Christmas</h1>
        <div class="text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor illo nam, nemo neque odit possimus quaerat quasi qui sit ut velit veritatis! Animi dicta impedit magnam nihil perspiciatis, veritatis.</p>
        </div>
    </div>
</header>



<style lang="scss">
    @import '../scss/global';

    header {
        position: relative;
        @include respond-to('desktop') {}
      .header-container {
        margin: 0 16vw 20vh 16vw;
      }
      h1 {
      font-family: $main_cako;
      color: $violet;
      margin: 1rem 0 2rem 0;
      font-size: 5rem;
      overflow: visible;
    }

      .text-container {
        display: flex;

        p {
          font-family: $main_gilroy;
          font-size: 1.2rem;
          color: $font-white;
          @include respond-to('desktop') {
             margin-left: 50%;
          }
        }
      }
    }

</style>