<template>
    <div>
        
        <h2>{{ title }}</h2>
        {{getArticle}}
        <div v-for="item in articles"
                :key="item"
                :item="item">

            {{ item }}
        </div>
    </div>

</template>

<script>
import { mapGetters} from 'vuex'

export default {
    name: 'BlogList',
    computed: {
        ...mapGetters(['getArticle'])
    },
    data() {
        return {
            articles: [
                this.$store.state.titleArticle,
                this.$store.state.description,
                this.$store.state.author
                ],
            
            title: "Nos articles :",
        }
    }
}
</script>
