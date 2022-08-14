<template>
    <section class="content-section">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
         <!-- Page Header-->
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
            <h4>Categories: </h4>  
            <button class="btn btn-warning btn-rounded" type="button" v-on:click="filterEvents('All')">All</button>
            <button class="btn btn-warning btn-rounded" type="button" v-on:click="filterEvents('Music')">Music</button>
            <button class="btn btn-warning btn-rounded" type="button" v-on:click="filterEvents('Dance')">Dance</button>
            <button class="btn btn-warning btn-rounded" type="button" v-on:click="filterEvents('Opera')">Opera</button>
            <div class="row gx-5">
                <card-el
                    v-for="(event, eventIndex) of filteredEvents"
                    :key="`event-index-${eventIndex}`"
                    :id="event.id"
                    :date="event.date"
                    :name="event.name"
                    :img="event.img"
                    :typeOfCard="`events`"
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
  name: 'EventsList',
  components: {
    'card-el': CardEl,
  },

  data(){
    return{
        filter:""
    }

  },
  async asyncData({ $axios }) {
    try{
        const [ data, info] = await Promise.all([$axios.get('/api/events'),
                                        $axios.get('api/page-info/allEvents')])
        return {
            events: data.data,
            info: info.data,
        }
    } catch(error){
        console.log(error);
    }
  },
  methods: {
    filterEvents: function(filter) {
      this.filter = filter
    }
  },
  
  computed:{
    filteredEvents: function(){
      return this.events.filter((event) =>{
        if (this.filter !== "All"){
        return event.type.match(this.filter)
        }
        else{
            return event
        }
    });
    }
  },
}
</script>


<style scoped>

.masthead{
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  background-image: url(../assets/all/allEvents.jpg);
  background-size: cover;
  background-position: center center;
}

.site-description{
  font-style: normal;
  font-size:xx-large;
  /*to have it inline just comment out the next two line */
  text-align: justify;
  text-align-last: center;
  white-space: pre-line;
}


h4{
    display: inline-block;
}
</style>