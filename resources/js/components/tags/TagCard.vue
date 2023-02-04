<template>
    <div class="container">

    </div>
</template>

<script>
export default {
    name: 'TagCard',
    components: {
    },
    data() {
        return {
            post: null,
        }
    },
    mounted() {
        this.getPost();
    },
    methods: {
        getPost() {
            axios.get('http://localhost:8000/api/tags/' + this.$route.params.name)
                .then((res) => {
                    console.log(res.data);
                    this.post = res.data;
                }).catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style scoped lang="scss">
</style>
