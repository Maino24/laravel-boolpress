<template>
    <div>
        <h1>Pagina dei Tags</h1>

        <!-- Comp lista tags -->
        <TagsList />
    </div>
</template>

<script>
import TagsList from '../../../components/tags/TagsList.vue'
export default {
    name: 'TagsIndex',
    components: {
        TagsList
    }
}
</script>
