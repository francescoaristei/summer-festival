
<template>
    <section class="content-section">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <div class="container px-4 px-lg-5">
            <div class="row gx-5">
                <card-el
                    v-for="(event, eventIndex) of events"
                    :key="`event-index-${eventIndex}`"
                    :id="event.id"
                    :name="event.name"
                    :img="event.img"
                    :date="event.date"
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
        search:""
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
}
</script>