<template>
  <div class="blog">
    <h1>Nos articles :</h1>
    <BlogList/>
  </div>
</template>

<script>
import  BlogList  from '@/components/BlogList.vue'

export default {
  name: 'Blog',
  components: {
    BlogList
  }
}
</script>
