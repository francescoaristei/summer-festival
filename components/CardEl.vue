<template>
  <div class="col-lg-6">
    <div class="caption">
        <div class="caption-content">
          <nuxt-link :to="`/details/${id}`">
            <div class="h2">{{name}}</div>
          </nuxt-link>
            <p class="mb-0">{{date}}</p>
            </div>
        </div>
    <img class="img-fluid" :src="getImgUrl(img)"  :alt="img" />
  </div>
</template>


<script>
export default {
  title: 'Card',
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
    date:{
      type: String,
      required: true,
    }
  },
  methods: {
    getImgUrl(img) {
      return require(`../assets/events/` + img + `.jpg`)
    }
  }
}
</script>
