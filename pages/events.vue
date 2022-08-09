
<template>
    <section class="content-section">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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

h4{
    display: inline-block;
}
</style>