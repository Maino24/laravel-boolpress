<template>
    <div>
        <h1>Pagina di dettaglio del tag: {{ this.$route.params.name }} </h1>
        <!-- Comp tagCard -->
        <TagCard />
    </div>
</template>

<script>
import TagCard from '../../../components/tags/TagCard.vue'
export default {
    name: 'TagShow',
    components: {
        TagCard
    }
}
</script>
