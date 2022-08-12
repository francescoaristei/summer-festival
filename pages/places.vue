<template>
  <section class="content-section">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <header class="masthead">
            <div class="container position-center px-4 px-lg-5 py-5">
                <div class="row gx-2 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-2 py-5">
                        <div class="site-heading">
                            <h1>{{info.title}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      <div class="container position-center px-4 px-lg-5 py-5">
        <div class="site-description">
          <div>{{info.introduction}}</div>
        </div>
      </div>
      <div class="container px-4 px-lg-5">
            <div class="row gx-5">
                <card-el
                    v-for="(place, placeIndex) of places"
                    :key="`place-index-${placeIndex}`"
                    :id="place.id"
                    :name="place.name"
                    :img="place.img"
                    :typeOfCard="`places`"
                />
                <div class="col mb-5">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import CardEl from "~/components/CardEl";

export default {
  name: "PlacesList",
  components: {
    'card-el' : CardEl
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
.site-description{
  font-style: normal;
  font-size: 1.7vw;
  text-align: justify;
  text-align-last: center;
}
.masthead{
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  background-image: url(../assets/all/allPlaces.jpg);
  background-size: cover;
  background-position: center center;
}
</style>
