export default function DarkModeModule(moduleOptions) {
    console.log(moduleOptions)

    this.nuxt.hook('ready', async nuxt => {
      console.log('Nuxt is ready')
    })
}
