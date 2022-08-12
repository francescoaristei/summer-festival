
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

