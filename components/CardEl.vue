<template>
  <!--<div class="col-lg-6 py-5">-->
    <div :class="typeOfEl">
    <nuxt-link :to="`/details/` + typeOfCard + `/${id}`">
    <img class="img-fluid" :src="getImgUrl(img, typeOfCard)"  :alt="img" />
    </nuxt-link>
    <div class="caption-content">
        <h2>{{name}}</h2>
        <!--<p class="lead mb-0">{{name}}</p>-->
    </div>
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
    typeOfCard:{
      type: String,
      required: true
    },
    typeOfEl:{
      type: String,
      required: true
    }
  },
  methods: {
    getImgUrl(img, typeOfCard) {
      return require(`../assets/` + typeOfCard + `/` + img + `.jpg`)
    }
  }
}
</script>

<style scoped>


.img-fluid{
  border-radius: 10px;

}

.img-fluid:hover {
opacity: 0.5;
}

.caption-content{
  text-align: center;
}


</style>
