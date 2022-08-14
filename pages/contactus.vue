<template>
    <section class="content-section">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
         <!-- Page Header-->
        <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
          <div class="site-heading">
            <h1>{{data.title}}</h1>
          </div>
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <p class="fest-description">{{data.description}}</p>
         <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <h4 class="site-heading">PHONE</h4>
            <p class="description"> <b>Number:</b> {{data.phone}}<br>
              <b>OpeningHours:</b> {{data.whenOpen}}</p>
         </div>
          <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <h4 class="site-heading">E-MAIL</h4>
            <p class="description"> <b>Email:</b> {{data.email}}</p>
        </div>
        </div>
        </div>
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
}
</script>


<style scoped>

h4{
    display: inline-block;
}
.fest-description{
  text-align: justify;
  text-align-last: center;
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
