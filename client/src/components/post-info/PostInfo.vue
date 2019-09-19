<template>    
<div v-bind:id="'post-info-' + post.id"
    class="post-info-container
      card
      text-center">
    <h5 class="card-header">
      Details
    </h5>
    <form class="card-body">
      <div class="form-group row">
        <label class="col-2 col-form-label">
          Date
        </label>
        <div class="col-10">
          <input type="text" 
            readonly 
            class="form-control-plaintext 
              post-info-date" 
            :value="post.date">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-2 col-form-label">
          Author
        </label>
        <div class="col-10">
          <input type="text" 
            class="form-control"
            v-model="post.author">
        </div>
      </div>
      
      <div class="form-group row">
        <label class="col-2 col-form-label">
          Location
        </label>
        <div class="col-10">
          <input type="text" 
            class="form-control
              post-info-location"
            v-model="post.location">
        </div>
      </div>

      <input type="button"
        value="Update tree"
        class="btn btn-outline-primary"
        @click="onSavePost">
    </form>
  </div>
</template>

<script src="./post-info.js"></script>
<style scoped src="./post-info.css"></style>

