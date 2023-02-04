<template>
    <div>
        <!-- Stampare la lista dei posts di questo preciso tag -->
        <ul>
            <li :v-for="elem in tag">
                <ul>
                    <li :v-for="post in elem.posts">
                        {{ post.title }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TagCard',
    components: {
    },
    data() {
        return {
            tag: [],
        }
    },
    mounted() {
        this.getTag();
    },
    methods: {
        getTag() {
            axios.get('http://localhost:8000/api/tags/' + this.$route.params.name)
                .then((res) => {
                    console.log(res.data);
                    this.tag = res.data;
                }).catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style scoped lang="scss">
</style>
