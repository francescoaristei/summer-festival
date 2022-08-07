
<template>
    <section class="py-5">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <card
                    v-for="(event, eventIndex) of events"
                    class="col-sm-2 m-4"
                    :key="`event-index-${eventIndex}`"
                    :id="event.id"
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
import Card from "~/components/Card";


export default {
  name: 'Events',
  components: {
    'card': Card,
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