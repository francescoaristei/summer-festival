
<template>
  <section class="content-section">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 align-items-center my-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../../places">Places</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ data.name }}</li>
          </ol>
        </nav>
        <div class="site-heading">
            <h1>{{data.name}}</h1>
        </div>
      </div>
      <!-- Heading Row-->
      <div class="row gx-4 gx-lg-5 my-5 gy-5 shadow-lg">
          <div class="col-lg-7" style="margin-bottom: 10vw;"><img class="img-fluid rounded mb-4 mb-lg-0" :src=getImgUrl(data.img) :alt="img" /></div>
          <div class="col-lg-5">
              <p class="place-description" style="font-style:italic; font-size: x-large; white-space: pre-line;">{{data.description}}</p>
          </div>
      </div>
      <div class="gmap_canvas" align="center">
        <h4 style="margin-bottom: 1vw;" >WHERE YOU CAN FIND IT</h4>
        <iframe :src=data.map frameBorder="0" style="border:0">
        </iframe>
      </div>
    </div>
    <div class="bottom-list">
      <div class="container px-4 px-lg-5">
        <div id="carouselEvents" class="carousel slide" data-bs-ride="carousel">
          
          <!-- Content Row-->
          <div class="carousel-inner">
            <h4 style="margin-top: 2vw; margin-bottom: 1vw; text-align:center">EVENTS TAKING PLACE HERE</h4>
              <card-el v-for="(event, eventIndex) of events" :class="{ active: eventIndex==0 }" :key="`card-el-index-${eventIndex}`"
              :name="event.name" :img="event.img"  :id="event.id" :typeOfCard="`events` " :typeOfEl="`carousel-item`" />
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselEvents" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselEvents" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselEvents" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselEvents" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselEvents" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>
      </div>
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
        $axios.get('/api/places/' + id, { params: { PlaceId: id}}),
        $axios.get('/api/events_of_place/' + id, {params: {PlaceId: id}}),
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
      return require(`../../../assets/places/` + img + `.jpg`)
    },
  },
}

</script>

<style scoped>

.carousel-inner{
  width: 50%;
  margin: 0 auto;
}

.carousel-control-next,
.carousel-control-prev /*, .carousel-indicators */ {
    filter: invert(100%);
}

.carousel-indicators{
  position: relative;
  filter: invert(100%);
}

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
.place-description{
  text-align: justify;
  text-align-last: center;
  
}
</style>
