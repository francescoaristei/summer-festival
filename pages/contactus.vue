<template>
  <section class="content-section">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Page Header-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 align-items-center my-5" style="margin: 0 auto;">
        <div class="site-heading">
          <h1>{{data.title}}</h1>
        </div>
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
              <p class="fest-description">{{data.description}}</p>
          <div class="row gx-4 gx-lg-5 align-items-center my-5" style="margin: 0 auto;">
              <h4 class="site-heading">PHONE</h4>
              <p class="description" style="text-align: center"> <b>Number:</b> {{data.phone}}<br>
                <b>OpeningHours:</b> {{data.whenOpen}}</p>
          </div>
          <div class="row gx-4 gx-lg-5 align-items-center my-5" style="margin: 0 auto;">
              <h4 class="site-heading">E-MAIL</h4>
              <p class="description" style="text-align:center"> <b>Email:</b> {{data.email}}</p>
          </div>
          
        </div>
        <div class="row gx-4 gx-lg-5 align-items-center my-5" style="margin: 0 auto;">
              <h4 class="description" style="text-align:center"> You can also try to reach us through this online form:</h4>
        </div>
      </div>
    </div>
      <div class="row" style="margin: 0 auto;">
          <!--Grid column-->
          <div class="col-md-9 mb-md-0 mb-5" style="margin: 0 auto;">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                  <!--Grid row-->
                  <div class="row">
                      <!--Grid column-->
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="name" name="name" class="form-control">
                              <label for="name" class="">Your name</label>
                          </div>
                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="email" name="email" class="form-control">
                              <label for="email" class="">Your email</label>
                          </div>
                      </div>
                      <!--Grid column-->

                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">
                      <div class="col-md-12">
                          <div class="md-form mb-0">
                              <input type="text" id="subject" name="subject" class="form-control">
                              <label for="subject" class="">Subject</label>
                          </div>
                      </div>
                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">

                      <!--Grid column-->
                      <div class="col-md-12">

                          <div class="md-form">
                              <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                              <label for="message">Your message</label>
                          </div>

                      </div>
                  </div>
                  <!--Grid row-->

              </form>

              <div class="text-center text-md-left">
                  <a class="btn btn-warning btn-rounded" v-on:click="validateForm();">Send</a>
              </div>
              <div class="status"></div>
          </div>
          <!--Grid column-->
      </div>
  </section>
</template>


<script>

export default {
  name: 'ContactUs',

  async asyncData({ $axios }) {
    try{
        const { data } = await $axios.get('api/page-info/contactUs')
        return {
            data: data,
        }
    } catch(error){
        console.log(error);
    }
  },

  methods: {
    validateForm: function() {
      const name =  document.getElementById('name').value;
      if (name === "") {
          document.querySelector('.status').innerHTML = "Name cannot be empty";
          return false;
      }
      const email =  document.getElementById('email').value;
      if (email === "") {
          document.querySelector('.status').innerHTML = "Email cannot be empty";
          return false;
      }
      const subject =  document.getElementById('subject').value;
      if (subject === "") {
          document.querySelector('.status').innerHTML = "Subject cannot be empty";
          return false;
      }
      const message =  document.getElementById('message').value;
      if (message === "") {
          document.querySelector('.status').innerHTML = "Message cannot be empty";
          return false;
      }
      const emptyname = document.getElementById('name');
      emptyname.value = "";

      const emptyemail = document.getElementById('email');
      emptyemail.value = "";

      const emptysubject = document.getElementById('subject');
      emptysubject.value = "";

      const emptymessage = document.getElementById('message');
      emptymessage.value = "";
      document.querySelector('.status').innerHTML = "SENT";
    }
  }
}
</script>


<style scoped>

h4{
    display: inline-block;
}
.fest-description{
  font-size: large;
  font-style: normal;
  text-align: justify;
  text-align-last: center;
  white-space: pre-line;
}
.site-heading{
  text-align: center;
  color: black;
}
iframe{
  width: 80vw;
  height: 30vw;
}
.description{
  margin-top: 1vw;
  text-align: left;
  float: left;
}
</style>
