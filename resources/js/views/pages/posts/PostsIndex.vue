<template>
    <div>
        <WorkInProgress/>
        <h1>SONO LA PAGINA DEI POSTS</h1>
        <!-- Scrivere i dati dei posts -->
        <PostsList/>
    </div>
</template>

<script>

import PostsList from "../../../components/posts/PostsList.vue";

export default {
    name: "Posts",
    components: {
        PostsList,
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
