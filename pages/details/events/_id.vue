<template>
    <!-- Page Content-->
    <div class="container px-4 px-lg-5">
        <!-- Heading Row-->
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" :src=getImgUrl(data.img) alt="..." /></div>
            <div class="col-lg-5">
                <p>{{data.description}}</p>
            </div>
        </div>
        <!-- Content Row-->
          <div class="row gx-4 gx-lg-5">
            <card-el v-for="(artist, artistIndex) of artists" class="col-lg-6 py-5" :key="`card-el-index-${artistIndex}`"
            :name="artist.name" :img="artist.img"  :id="artist.id" :typeOfCard="`artists` " />
          </div>        
          <!-- Content Row-->
          <div class="row gx-4 gx-lg-5">
            <card-el v-for="(event, eventIndex) of events" class="col-lg-6 py-5" :key="`card-el-index-${eventIndex}`"
            :name="event.name" :img="event.img"  :id="event.id" :typeOfCard="`events` " />
          </div>
        </div>
</template>



<script>
import CardEl from '~/components/CardEl.vue'
export default {
  name: 'EventPage',

  components: {
    'card-el': CardEl
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
