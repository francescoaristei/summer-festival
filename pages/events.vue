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
                            <h1>EVENTS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container px-4 px-lg-5">     
            <h4>Categories: </h4>  
            <button type="button" v-on:click="filterEvents('All')">All</button>
            <button type="button" v-on:click="filterEvents('Music')">Music</button>
            <button type="button" v-on:click="filterEvents('Dance')">Dance</button>
            <button type="button" v-on:click="filterEvents('Opera')">Opera</button>
            <div class="row gx-5">
                <card-el
                    v-for="(event, eventIndex) of filteredEvents"
                    :key="`event-index-${eventIndex}`"
                    :id="event.id"
                    :date="event.date"
                    :name="event.name"
                    :img="event.img"
                    :typeOfCard="`events`"
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
        const { data } = await $axios.get('/api/events')
        return {
            events: data,
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
  width: 100%;
  height: 100%;
  background-image: url(../assets/all/allEvents.jpg);
  background-size: cover;
}

h4{
    display: inline-block;
}
</style>