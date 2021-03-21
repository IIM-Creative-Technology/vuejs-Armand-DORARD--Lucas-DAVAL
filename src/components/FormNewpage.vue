<template>
    <form action="/#">
        <div id="formFirstPart">
            <ul>
                <li>
                    <label for="title">Titre de la page</label>
                    <input name="title" id="title" type="text" required>
                </li>

                <li>
                    <label for="metaDesc">Meta Description</label>
                    <input name="metaDesc" id="metaDesc" type="text" required>
                </li>

                <li>
                    <label for="metaTitle">Meta Title</label>
                    <input name="metaTitle" id="metaTitle" type="text" required>
                </li>
            </ul>

            <div id="img">
                <input type="" name="image" id="image">
                <br>
                <label for="image">Ajouter une image</label>
            </div>            
        </div>
        <div id="bodyPost">
            <label for="postBody">Corps du post</label>
            <textarea name="postBody" id="postBody" cols="94" rows="15"></textarea>
        </div>
        
        <p class="button" @click="sendPost">Créer la page</p>
    </form>
</template>

<script>
// import FormNewpageStore from './FormNewpageStore'
import Store from '../store/index'
export default {
    name: "form",
    store: Store,
    data() {
        return {
            post: []
        }
    },
    methods: {
        sendPost(){
            this.$store.commit('POSTS_PUSH',
            ['Article5','MetaTitleArticle5','MetadescritpionArticle5', 'Description lorem ipsum de l\'artcle 5', 'Pierre', 'https://images.gameinfo.io/pokemon/256/143-00.png']
            )
        }
    }
}
</script>

<style scoped>
    *{
        list-style: none;
    }
    .button{
        border: solid 1px black;
    }
    form{
        margin: 8% 12%;
        text-align: left;
    }

    ul{
        width: 50%;
        padding-right: 12%;
    }

    label{
        align-items: center;
    }

    li{
        display: flex;
        justify-content: space-between;
        margin: 3% 0;
    }

    #formFirstPart{
        display: flex;
    }

    #img{
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    #img input{
        width: 35%;
        margin: 0 auto;
    }

    #bodyPost{
        display: flex;
        align-items: center;
    }

    #bodyPost textarea{
        margin: 30px 0  0 183px;
    }

    button{
        float: right;
        margin: 4% 16% 0 0;
        padding: 6px;
    }
</style>