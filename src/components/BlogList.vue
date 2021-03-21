<template>
    <div>
        {{getArticle}}
        <a href="#" class="bloc" v-for="item in articles"        
                :key="item"
                :item="item">

            <img src="../assets/logo.png" alt="image de l'article">
            <p>{{ item[2] }}</p>


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