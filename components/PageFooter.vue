<template>
  <!-- Footer -->
  <footer class="text-center text-white" style="background-color: whitesmoke">
    <!-- Grid container -->
    <div class="container">

      <hr class="my-5" />

      <!-- Section: Text -->
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p style="color:black">
                Lets keep in contact!
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <section class="text-center mb-5">
        <a href="" class="text-black me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-github"></i>
        </a>
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
        <nuxt-link :to="'/'" id="nuxt-link">
            AIA Music Festival
        </nuxt-link>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
<!-- End of .container -->
</template>



<style scoped>
.text-center text-white{
    margin: auto;
}
</style>