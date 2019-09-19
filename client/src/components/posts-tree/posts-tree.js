import PostsService from '@/services/post.service';
import ParentNode from '@/components/parent-node/ParentNode.vue';

export default {
  name: 'PostsTree',
  components: {
    ParentNode
  },
  data () {
    return {
      groupBy: 'date',
      posts: [],
      groupedPosts: []
    }
  },
  created () {
    const postsService = new PostsService();
    
    postsService.getPosts()
      .then((posts) => {
        this.posts = posts;
      });
  },
  methods: {
    getGroupedPosts() {
      this.groupedPosts = this.posts.reduce((result, post) => {

        result[post[this.groupBy]] = result[post[this.groupBy]] || [];
        result[post[this.groupBy]].push(post);
        return result;

      }, Object.create({}));
    }
  },
  watch: {
    posts() {
      this.getGroupedPosts();
    }
  }
}
