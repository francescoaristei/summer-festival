<template>
    <!-- Page Content-->
  <section class="content-section">
    <div class="container px-4 px-lg-5">
        <!-- Heading Row-->
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="../../events">Events</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ data.name }}</li>
            </ol>
          </nav>
          <div class="site-heading">
              <h1 style="margin-bottom:2vw;">{{data.name}}</h1>
              <h3 style="margin-bottom: 2vw;">{{data.date}} </h3>
              <nuxt-link :to="`/details/places` + `/${place.id}`" class="btn btn-lg active" id="place" >
                {{ place.name }}
                </nuxt-link>

                <div class="tickets">
                  <a class="social-icon" :href = "data.ticket"  target="_blank">
                    <img src='../../../static/tickets.svg' alt="logo" width="50vw">
                  </a>
                </div>
            </div>
        </div>
        <div class="row gx-4 gx-lg-5 my-5 gy-5 shadow-lg">
            <div class="col-lg-7" style="margin-bottom: 10vw;" ><img class="img-fluid rounded mb-4 mb-lg-0"  :src=getImgUrl(data.img) :alt="img" /></div>
            
            <div class="col-lg-5">
                <p class="event-description" style="font-style:italic; font-size: x-large; white-space: pre-line;">{{data.description}}</p>
            </div>
        </div>
    </div>

    
    <div class="bottom-list">
      <div class="container px-4 px-lg-5">
        <div id="carouselArtists" class="carousel slide" data-bs-ride="carousel">
          <!-- Content Row-->
          <div class="carousel-inner">
            <h4 style="margin-top: 2vw; text-align: center; margin-bottom: 1vw;">ARTISTS PERFORMING HERE</h4>
              <card-el v-for="(artist, artistIndex) of artists" :class="{ active: artistIndex==0 }" :key="`card-el-index-${artistIndex}`"
              :name="artist.name" :img="artist.img"  :id="artist.id" :typeOfCard="`artists` " :typeOfEl="`carousel-item`" />
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselArtists" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselArtists" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>          
          <div class="carousel-indicators" id="artists-indicators">
            <button type="button" data-bs-target="#carouselArtists" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselArtists" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselArtists" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-list" style="margin-top: 2vw">
      <div class="container px-4 px-lg-5">
        <div id="carouselEvents" class="carousel slide" data-bs-ride="carousel">
        <!-- Content Row-->
          <div class="carousel-inner">
            <h4 style="margin-top: 2vw; margin-bottom: 1vw; text-align:center">OTHER EVENTS YOU COULD ALSO LIKE</h4>
            <!-- Content Row-->
              <card-el v-for="(event, eventIndex) of events" :class="{ active: eventIndex==0 }" :key="`card-el-index-${eventIndex}`"
              :name="event.name" :img="event.img"  :id="event.id" :typeOfCard="`events` " :typeOfEl="`carousel-item`"/>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselEvents" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselEvents" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div class="carousel-indicators" id="events-indicators">
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
    "card-el": CardEl,
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

<style scoped>

p{
  text-align: center;
}

.carousel-inner{
  width: 50%;
  margin: 0 auto;
}

#artists-indicators{
  position: relative;
  filter: invert(100%);
}

#events-indicators{
  position:relative;
  filter: invert(100%);
}


.site-heading{
  text-align: center;
}

.bottom-list{
  background: #FFAD42;
}

.event-description{
  text-align: justify;
  text-align-last: center;
}

.carousel-control-next,
.carousel-control-prev /*, .carousel-indicators */ {
    filter: invert(100%);
}

#place {
  text-align : center;
  color : black;
  background-color : #aaaaaa;
  transition : 0.3s;
  color : black;
  text-align : center;
  text-decoration : none;
  border-radius: 25px;
  margin-bottom: 2vw;
}

#place:hover {
  transition : 0.3s;
  box-shadow : 0px 0px 1px 8px #aaaaaa;
  background-color : #828282;
  cursor : pointer;
}



</style>
