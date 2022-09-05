<template>
  <section class="content-section" style="margin-top: 5vw">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 align-items-center my-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a class="b-name" href="../../artists">Artists</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ data.name }}</li>
            </ol>
        </nav>
        <div class="site-heading">
            <h1>{{data.name}}</h1>
        </div>
      </div>
        <!-- Heading Row-->
        <div class="row gx-4 gx-lg-5 my-5 gy-5 shadow-lg">
          <div class="col-lg-7" style="margin-bottom: 10vw;"><img class="img-fluid rounded mb-4 mb-lg-0" :src=getImgUrl(data.img) :alt="img" />
              <div class="artist-info">
                <p class="info"> FOLLOW ON  :
                <a class="social-icon" :href = "data.info"  target="_blank" >
                  <img src='../../../static/logo-instagram.svg' alt="logo" width="30vw">
                </a>
                <a class="social-icon" :href = "data.info"  target="_blank" >
                  <img src='../../../static/logo-facebook.svg' alt="logo" width="30vw">
                </a></p>
              </div>
          </div>
          <div class="col-lg-5">
              <p class="artist-description">{{data.description}}</p>
          </div>
        </div>

    </div>

    <div class="bottom-list">
      <div class="container px-4 px-lg-5">
          <div id="carouselEvents" class="carousel slide" data-bs-ride="carousel">

          <!-- Content Row-->
          <div class="carousel-inner">
            <!-- Content Row-->
        <!--<div class="row gx-4 gx-lg-5 align-items-center my-5">-->
          <h4 style="margin-top: 2vw">Do you like {{data.name}}? Check out these events:</h4>
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
    "card-el": CardEl,
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
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Information about the artist who will join the Milano Arts Experience'
          }
        ]
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
.carousel-inner{
  width: 50%;
  margin: 0 auto;
}

.carousel-control-next,
.carousel-control-prev {
    filter: invert(100%);
}

.carousel-indicators{
  position:relative;
  filter: invert(100%);
}

p{
  text-align: center;
}
.bottom-list{
  background: #FFAD42;
}
.artist-description{
  text-align: justify;
  text-align-last: center;
  font-style:italic;
  font-size: large;
  white-space: pre-line;
}
.artist-info{
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  margin-top: 1vw;
}
.info{
  text-align: left;
}
.social-icon{
  color: black;
  size: 100px;
  display: inline-block;
}
.social-icon:hover{
  color: #FFAD42;
}
.b-name{
  color: #FFAD42;
}
</style>
