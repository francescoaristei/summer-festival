<template>
  <div class="col-lg-6 py-5">
    <nuxt-link :to="`/details/${id}`">
    <img class="img-fluid" :src="getImgUrl(img)"  :alt="img" />
    </nuxt-link>
    <div class="caption-content">
        <h2>{{name}}</h2>
    </div>
  </div>
</template>




<script>
export default {
  title: 'PlaceCard',
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
      return require(`../assets/places/` + img + `.jpg`)
    }
  }
}
</script>

<style scoped>

.img-fluid{
  border-radius: 10px;
}

.caption-content{
  text-align: center;
}


</style>
