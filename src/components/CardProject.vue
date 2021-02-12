<template>
  <div class="container">
    <nuxt-link :to="projectLink" class="card">
      <h2>{{ name }}</h2>
      <img :src="thumb" :alt="name">
      <span>{{ year }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    slug: {
    },
    name: {
    },
    thumb: {
    },
    year: {
    }
  },
  computed: {
    projectLink() {
      return `/projetos/${ this.slug }`
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
  }
</style>
