
<template>
    <div class="container">
        <span>{{ project.name }}</span>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Projeto - ' + this.project.name
    },
    data () {
        return {
            project: {}
        }
    },
    computed: {
        project () {
            return this.$store.getters['project/getProject'](this.$route.params.slug)
        }
    },
    // validate (data) {
    //     return typeof data.params.slug == 'string'
    // }
}
</script>
