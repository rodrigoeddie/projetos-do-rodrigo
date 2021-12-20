<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    const $body    = window.document.querySelector('body');
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(darkMode) {
      $body.classList.add('dark-mode');
    }
  }
}
</script>

<style lang="scss">
  body {
    font-family: $font;
  }

  .dark-mode {
    background: #101920;
    color: $yellow;
  }
</style>
