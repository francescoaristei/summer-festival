<template>
  <section class="content-section">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <header class="masthead">
          <span role="img" aria-label="artists"> </span>
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
                    v-for="(artist, artistIndex) of artists"
                    :key="`artist-index-${artistIndex}`"
                    :id="artist.id"
                    :name="artist.name"
                    :img="artist.img"
                    :typeOfCard="`artists`"
                    :typeOfEl="`col-lg-6 py-5`"
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
  async asyncData({ $axios }) {
    try{
        const [ data, info] = await Promise.all([$axios.get('/api/artists'),
                                        $axios.get('api/page-info/allArtists')])
        return {
            artists: data.data,
            info: info.data,
        }
    } catch(error){
        console.log(error);
    }
  },
  data() {
    return {
      filter: ""
    }
  },
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Artists from different countries and genres who will join the Milano Arts Experience festival.'
          }
        ]
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
  font-size: x-large;
  text-align: justify;
  text-align-last: center;
  white-space: pre-line;
}
.masthead{
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  background-image: url(../assets/all/allArtists.jpg);
  background-size: cover;
  background-position: center center;
}
</style>
