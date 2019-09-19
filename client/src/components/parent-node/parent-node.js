import ChildNode from '@/components/child-node/ChildNode';

export default {
  name: 'ParentNode',
  props: {
    groupData: Array,
    groupId: Number,
    filterKey: String,
    onGroupDataChanged: Function
  },
  data() {
    return {
        title: this.getTitle(),
        toggleIcon: '+'
    }
  },
  components: {
    ChildNode
  },
  methods: {
    getTitle() {
        return this.groupData[0][this.filterKey];
    },
    toggleChildren() {
      this.toggleIcon = this.toggleIcon === '+' ? '-' : '+';
      let infoContainer = document.getElementById('group-' + this.groupId);
      infoContainer.style.display = infoContainer.style.display === 'block' ? 'none' : 'block';
    }
  },
  watch: {
    groupData() {
        this.title = this.getTitle();
    }
  }
}
