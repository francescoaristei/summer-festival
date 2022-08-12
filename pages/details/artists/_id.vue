<template>
  <section class="content-section">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 align-items-center my-5">
      <div class="site-heading">
          <h1>{{data.name}}</h1>
        </div>
      </div>
        <!-- Heading Row-->
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" :src=getImgUrl(data.img) alt="..." /></div>
            <div class="col-lg-5">
                <p class="artist-description">{{data.description}}</p>
            </div>
        </div>
  <!--
      <a class="social-icon" href = "data:info"  target="_blank">
      <img src="static/logo-instagram.svg" alt="aaa">
      </a>
-->
    </div>
    <div class="bottom-list">
      <div class="container px-4 px-lg-5">
       <div class="row gx-4 gx-lg-5 align-items-center my-5">
         <h4 style="margin-top: 4vw">Do you like {{data.name}}? Check this events:</h4>
          <div class="row gx-4 gx-lg-5">
            <card-el v-for="(event, eventIndex) of events" class="col-lg-6 py-5" :key="`card-el-index-${eventIndex}`"
            :name="event.name" :img="event.img"  :id="event.id" :typeOfCard="`events` " />
          </div>
         </div></div>
    </div>
    </section>
</template>



<script>

import CardEl from "~/components/CardEl";
export default {
  name: 'EventPage',

  components: {
    CardEl,
    'card-el': CardEl
  },
  async asyncData({ route, $axios }) {
    try{
      const { id } = route.params;
      const  [ data , events]  = await Promise.all([
        $axios.get('/api/artists/' + id, { params: { ArtistId: id}}),
        $axios.get('/api/events_of_artist/' + id, {params: {ArtistId: id}}),
    ])
    return {
      data: data.data,
      events: events.data,
      }
    } catch(error){
      console.log(error);
    }
  },
  methods: {
    getImgUrl(img) {
      return require(`../../../assets/artists/` + img + `.jpg`)
    },
  },
}

</script>

<style scoped>
p{
  text-align: center;
}
iframe{
  width: 100vw;
  height: 30vw;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  text-align: left;
  margin-bottom: 4vw;
}
.site-heading{
  text-align: center;
}
.bottom-list{
  background: #FFAD42;
}
.artist-description{
  text-align: justify;
  text-align-last: center;
}
.social-icon{
  color: #aaaaaa;
  size: 100px;
}
.social-icon:hover{
  color: #333333;
}
</style>
