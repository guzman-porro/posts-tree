<template>    
    <div class="parent-node-container
      col-12">
        <div class="row">
          <h2 class="parent-node-title"
            @click="toggleChildren()">
            <span>{{toggleIcon}}</span>
            {{title}}
          </h2>
          <span class="badge 
            badge-primary 
            badge-pill">
              {{groupData.length}}
          </span>
        </div>
        
        <ul class="children-posts
          list-unstyled"
          v-bind:id="'group-' + groupId">
          <ChildNode 
            v-for="(post, index) in groupData"
            v-bind:key="index"
            v-bind:post="post"
            v-bind:onGroupDataChanged="onGroupDataChanged"/>
        </ul>
    </div>
</template>

<script src="./parent-node.js"></script>
<style scoped src="./parent-node.css"></style>
