<template>
  <div class="container">
    <header class="header">
      <h1 class="wrap-logo">
        <nuxt-link to="/" class="logo">Projetos do Rodrigo</nuxt-link>
      </h1>

      <nav class="menu">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/sobre">Sobre</nuxt-link>
        <nuxt-link to="/projetos">Projetos</nuxt-link>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;

    .logo {
      display: inline-block;
      align-items: center;
      background: black;
      line-height: 1em;
      font-weight: 900;
      color: white;
      padding: 10px;
      margin: 10px 0;
    }

    .menu {
      display: inline-block;

      a {
        line-height: 1em;
        font-size: 16px;
        padding: 20px;
      }
    }
  }
</style>
