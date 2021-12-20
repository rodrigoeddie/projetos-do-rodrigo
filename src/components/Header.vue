<template>
  <div class="container">
    <header class="header">
      <h1 class="wrap-logo">
        <nuxt-link to="/" class="logo">Projetos do Rodrigo</nuxt-link>
      </h1>

      <nav class="menu">
        <nuxt-link to="/">
            <span>Home</span>
						<svg class="link__graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
							<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
						</svg>
        </nuxt-link>

        <nuxt-link to="/sobre">
            <span>Sobre</span>
						<svg class="link__graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
							<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
						</svg>
        </nuxt-link>

        <nuxt-link to="/projetos">
            <span>Projetos</span>
						<svg class="link__graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
							<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
						</svg>
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>

<style lang="scss">
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
      margin: 20px 0;
      padding: 10px;
    }

    .menu {
      display: inline-block;

      a {
        display: inline-block;
        white-space: nowrap;
        letter-spacing: 1px;
        position: relative;
        margin-right: 20px;
        margin-left: 20px;
        font-weight: bold;
        overflow: hidden;
        line-height: 1em;
        font-size: 17px;
        padding: 7px;

        .link__graphic {
            transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
            transition: transform 0.7s, opacity 0.3s;
            pointer-events: none;
            position: absolute;
            stroke-width: 3px;
            stroke: black;
            opacity: 0;
            fill: none;
            top: -3px;
            left: 0;
            top: 0;
        }

        &:hover .link__graphic {
            transform: translate3d(-66.6%, 0, 0);
            opacity: 1;
        }
      }
    }
  }

  .dark-mode .header {
    .menu {
      a {
        color: yellow;
      }

      .link__graphic {
        stroke: yellow;
      }
    }

    .logo {
      background: yellow;
      color: black;
    }
  }
</style>
