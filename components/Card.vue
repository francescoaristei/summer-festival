<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- event image-->
      <img class="card-img-top" :src="getImgUrl(img)" :alt="img" />
      <div class="card-body p-4">
            <div class="text-center">
                <!-- Event name-->
                <h5 class="fw-bolder">{{name}}</h5>
            </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <nuxt-link :to="`/details/${id}`">
              <div class="btn btn-outline-dark mt-auto">Details</div>

          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  title: 'Event',
  props: {
    id:{
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImgUrl(img) {
      return require(`../assets/events/` + img + `.jpg`)
    }
  }
}
</script>
