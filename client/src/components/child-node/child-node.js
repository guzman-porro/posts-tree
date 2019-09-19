import PostInfo from '@/components/post-info/PostInfo';

export default {
    name: 'ChildNode',
    components: {
      PostInfo
    },
    props: {
      post: Object,
      onGroupDataChanged: Function
    },
    methods: {
      togglePostInfo() {
        let infoContainer = document.getElementById('post-info-' + this.post.id);
        infoContainer.style.display = infoContainer.style.display === 'block' ? 'none' : 'block';
      }
    }
  }
