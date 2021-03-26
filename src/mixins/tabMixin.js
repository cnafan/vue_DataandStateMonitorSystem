import storageUtils from '../utils/storageUtils'
export default {
  data () {
    return {
      activeName: storageUtils.getTabActive(this.$options.name)
    }
  },
  methods: {
    handleClick (tab) {
      storageUtils.saveTabActive(this.$options.name, tab.name)
    }
  }
}
