<template>
  <section class="content-section">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <div class="container px-4 px-lg-5">
            <div class="row gx-5">
                <card-el
                    v-for="(place, placeIndex) of places"
                    :key="`event-index-${placeIndex}`"
                    :id="place.id"
                    :name="place.name"
                    :img="place.img"
                />
                <div class="col mb-5">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import placeEl from "~/components/placeEl";

export default {
  name: "PlacesList",
  components: {
    'card-el' : placeEl
  },
  data() {
    return {
      filter: ""
    }
  },
  async asyncData({ $axios }) {
    try{
        const [ data, info] = await Promise.all([$axios.get('/api/places'),
                                        $axios.get('api/page-info/allPlaces')])
        return {
            places: data.data,
            info: info.data,
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
</style>
