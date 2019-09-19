<template>
  <div id="app">
    <PostsTree />
  </div>
</template>

<script>
import PostsTree from './components/posts-tree/PostsTree.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'app',
  components: {
    PostsTree
  }
}
</script>
