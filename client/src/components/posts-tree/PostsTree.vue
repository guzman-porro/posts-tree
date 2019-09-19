<template>
  <section class="container">
    <div class="row">
      <div class="alert 
        alert-info 
        col-12" 
        role="alert">
        This is the posts tree, check it out! Use the dropdown below to change the grouping :)
      </div>
    </div>
    
    <div class="row">
      <div class="form-group
        col-3
        offset-9">
        <small id="filterHelpBlock" 
          class="form-text 
            text-muted">
          Grouped by
        </small>
        <select 
          id="groupedBy"
          class="form-control"
          v-model="groupBy"
          @change="getGroupedPosts()"
          aria-describedby="filterHelpBlock">
          <option value="date">Date</option>
          <option value="author">Author</option>
          <option value="location">Location</option>
        </select>
      </div>

    </div>

    <div class="tree-container
      row">
      <ParentNode
        v-for="(group, index) in Object.keys(groupedPosts)"
        v-bind:key="index"
        v-bind:groupId="index + 1"
        v-bind:groupData="groupedPosts[group]"
        v-bind:filterKey="groupBy"
        v-bind:onGroupDataChanged="getGroupedPosts" />
    </div>

  </section>
</template>

<script src="./posts-tree.js"></script>
<style scope src="./posts-tree.css"></style>
