<template>
    <div>
        <!-- Scrivere i dati dei posts -->
        <h1>Pagina singolo post: </h1>
        <!-- Post card -->
        <PostCard/>
    </div>
</template>

<script>

import PostCard from '../../../components/posts/PostCard.vue'

export default {
    name: "PostShow",
    components: {
        PostCard
    },

    data(){
        return {
        }
    },

    mounted(){
    },

    methods: {
    }
}
</script>
