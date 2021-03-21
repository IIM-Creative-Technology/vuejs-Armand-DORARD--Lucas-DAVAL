<template>
  <div class="blogManage">
    <h1>This is a blog manage page</h1>
    <router-link to="/new-page">Créer une page</router-link>
    <BlogListAdmin/>
  </div>
</template>

<script>
import  BlogListAdmin  from '@/components/BlogListAdmin.vue'

export default {
  name: 'Admin',
  components: {
    BlogListAdmin
  }
}
</script>
