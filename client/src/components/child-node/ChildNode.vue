<template>    
    <li class="post-container offset-1">
      <span>|</span>
      <p @click="togglePostInfo()">
        –>  {{post.text}}
      </p>
      <PostInfo v-bind:post="post"
        v-bind:onSavePost="onGroupDataChanged" />
    </li>
</template>

<script src="./child-node.js"></script>
<style scoped src="./child-node.css"></style>

