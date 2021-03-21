<template>
    <div>
        {{getArticle}}
        <a v-for="item in articles"        
                :key="item"
                :item="item">
            <router-link class="bloc" :to="'/blog/' + item[0]">
                <img :src=[item[5]] alt="image de l'article">
                <p>{{ item[2] }}</p>
            </router-link>
            


        </a>
    </div>

</template>

<script>

export default {
    name: 'BlogList',
    data() {
        return {
            articles: this.$store.state.nbarticle,
        }
    },
}
</script>

<style scoped>
.bloc{
    display: flex;
    margin: 50px 200px 50px 200px;
    border: solid 1px black;
    text-decoration: none;
    color: black;
}
p{
    margin: auto;
}
img{
    margin-left: 50px;
}
</style>