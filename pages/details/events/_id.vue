<template>
    <!-- Page Content-->
    <div class="container px-4 px-lg-5">
        <!-- Heading Row-->
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="../places">Events</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ data.name }}</li>
            </ol>
          </nav>
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" :src=getImgUrl(data.img) alt="..." /></div>
            <div class="col-lg-5">
                <p>{{data.description}}</p>
            </div>
        </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <!-- Content Row-->
        <div class="carousel-inner">
          <!--<div class="carousel-item active">
              <div class="row gx-4 gx-lg-5"> FINIREEEE-->

                <card-el v-for="(artist, artistIndex) of artists" class="carousel-item col-lg-6 py-5" :class="{ active: artistIndex==0 }" :key="`card-el-index-${artistIndex}`"
                :name="artist.name" :img="artist.img"  :id="artist.id" :typeOfCard="`artists` " />
              <!--</div>
          </div>-->
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>
          <!-- Content Row-->
          <div class="row gx-4 gx-lg-5">
            <card-el v-for="(event, eventIndex) of events" class="col-lg-6 py-5" :key="`card-el-index-${eventIndex}`"
            :name="event.name" :img="event.img"  :id="event.id" :typeOfCard="`events` " />
          </div>
        </div>
</template>



<script>

import CardEl from "~/components/CardEl";
export default {

  name: 'EventPage',

  components: {
    'card-el': CardEl,
  },


  async asyncData({ route, $axios }) {
    try{
      const { id } = route.params;
      const  [ data ,  place , artists, events]  = await Promise.all([
        $axios.get('/api/events/' + id, { params: { EventId: id}}),
        $axios.get('/api/place_of_event/' + id, { params: { EventId: id}}),
        $axios.get('/api/artists_of_event/' + id, {params: {EventId: id}}),
        $axios.get('/api/events_of_event/' + id, {params: {EventId: id}}),
    ])
    return {
      data: data.data,
      place: place.data,
      artists: artists.data,
      events: events.data,
      }
    } catch(error){
      console.log(error);
    }
  },
  methods: {
    getImgUrl(img) {
      return require(`../../../assets/events/` + img + `.jpg`)
    },
  },
}
</script>
