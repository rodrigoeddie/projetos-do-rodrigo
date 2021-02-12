<template>
    <div class="container">
        <h1>PROJETOS</h1>

        <CardProject
            v-for="project in projects"
            :key="project.slug"
            :slug="project.slug"
            :name="project.name"
            :thumb="project.thumb"
            :year="project.year"
        />
    </div>
</template>

<script>
export default {
    head: {
        title: 'Projetos'
    },
    computed: {
        projects () {
            return this.$store.state.project.list
        }
    },
}
</script>