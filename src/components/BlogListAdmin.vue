<template>
    <div>
        {{getArticle}}
        <div href="#" class="bloc" v-for="item in articles"
                :key="item"
                :item="item">


            <img :src=[item[5]] alt="image de l'article">
            <p>{{ item[2] }}</p>
            <a href="#">Editer</a>
            <p class="delete" @click="deletePost(item[0])">X</p>


        </div>
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
    methods: {
        deletePost(event){

            this.$store.commit('POSTS_SPLIT', event)
        }
    }
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
a{
    margin: auto 20px;
    border: solid 1px black;
    text-decoration: none;
    color: black;
    padding: 10px;
}
.delete{
    
    margin: auto 20px;
    border: solid 1px black;
    text-decoration: none;
    color: black;
    padding: 10px;
    background-color: red;
}
</style>