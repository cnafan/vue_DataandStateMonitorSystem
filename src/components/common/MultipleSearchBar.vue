<template>
  <el-form :inline="true" :model="formInline" status-icon :rules="rules" ref="ruleForm" class="demo-form-inline">
    <el-form-item prop="selectValue" label="查询：">
      <el-select :multiple-limit="limit" multiple @change="saveInput" v-model="formInline.selectValue"
                 placeholder="请选择">
        <el-option
          v-for="item in this.option"
          :key="item.item"
          :label="item.label"
          :value="item.item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="inputValue" label="">
      <el-input v-model="formInline.inputValue" @input="saveInput()" placeholder="查询多项时以空格间隔"></el-input>
    </el-form-item>
    <el-form-item>
      <el-popover
        placement="bottom"
        title="查询规则"
        width="200"
        :content="searchRules"
        trigger="hover">
<!--        <div slot="title">123</div>-->
        <el-button circle slot="reference" icon="el-icon-key"></el-button>
      </el-popover>
      <el-button @click="search" circle icon="el-icon-search"></el-button>
      <!--      查询-->
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'MultipleSearchBar',
  data () {
    var validateLengthEqual = (rule, value, callback) => {
      let inputSplit = value.split(' ')
      if (inputSplit.length !== this.formInline.selectValue.length) {
        callback(new Error('查询项和值个数不匹配!'))
      } else {
        callback()
      }
    }
    return {
      formInline: {
        selectValue: '',
        inputValue: ''
      },
      rules: {
        selectValue: [
          {required: true, message: '请选择查询项', trigger: 'blur'}
        ],
        inputValue: [
          {required: true, message: '请输入查询值', trigger: 'blur'},
          {validator: validateLengthEqual}
        ]
      }
    }
  },
  props: {
    'option': {
      type: Array
    },
    'target': {
      type: String
    },
    'limit': {
      type: Number
    },
    'searchRules': {
      type: String
    }
  },
  methods: {
    saveInput () {
      this.$store.commit('change', {'data': this.formInline.selectValue, 'software': 'SearchItem'})
      this.$store.commit('change', {'data': this.formInline.inputValue, 'software': 'SearchInput'})
    },
    // 确定点击位置为图标还是button
    search (evt) {
      this.saveInput()
      let target = evt.target
      if (target.nodeName === 'I') {
        target = evt.target.parentNode
      }
      target.blur()
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$emit('callSearch', this.target)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
