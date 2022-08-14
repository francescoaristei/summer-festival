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
        </div>
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <h4 class="site-heading">FESTIVAL DESCRIPTION:</h4>
            <p class="fest-description">{{data.festival_description}}</p>
         <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <h4 class="site-heading">WHEN:</h4>
            <p class="fest-description">{{data.when}}</p>
        </div>
        <!-- Heading Row-->
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
          <h4 class="site-heading"> WHERE</h4>
            <div class="where" style="align: center">
            <p class="description">{{data.where}}</p>
                <iframe :src=data.map frameborder="0" style="border:0"></iframe>
            </div>
          </div>

        </div>
        </div>
    </section>
</template>


<script>

export default {
  name: 'AboutUs',

  async asyncData({ $axios }) {
    try{
        const { data } = await $axios.get('api/page-info/aboutUs')
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
  font-style:normal;
  font-size: large;
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

.where{
  overflow:hidden;
  background:none!important;
  text-align: left;
  margin-bottom: 4vw;
}
.description{
  text-align: center;
}
</style>
