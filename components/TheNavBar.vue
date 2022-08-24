<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 py-1 header fixed-top">
    <a class="navbar-brand" href="/">Milan Arts Experience</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarToggler" class="collapse navbar-collapse"  >
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0" >
        <li 
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
          
        >
        <nuxt-link :to="navItem.path" class="nav-link" >
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'HOME',
          path: '/',
        },
        {
          name: 'EVENTS',
          path: '/events',
        },
        {
          name: 'ARTISTS',
          path: '/artists',
        },
        {
          name: 'PLACES',
          path: '/places',
        },
        {
          name: 'CONTACT US',
          path: '/contactus',
        },
        {
          name: 'ABOUT US',
          path: '/aboutus',
        },
      ],
    }
  },

  mounted: function(){
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarToggler')
    const bsCollapse = new window.bootstrap.Collapse(menuToggle)
    navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
  }
}
</script>

<style scoped>
.header {
  background: orange;
}
.logo {
  color: white;
  font-size: 32px;
}

.nav-item{
  float: right;
}

</style>

