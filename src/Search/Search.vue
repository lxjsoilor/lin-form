<template>
  <el-row class="v-search">
    <el-col :span="24" class="v-item" v-for="(column, index) in columns" :key="index">
      <div class="v-search-title">
        {{column['label']}}
      </div>
      <div class="v-search-content">
        <span class="v-search-item" @click="handlerItemClick(column, item)" :class="isActiveItem(column, item, index) ? 'active' : ''" v-for="(item, index) in column['value']" :key="index">
          {{item[(column.props || {}).label || 'label'] || item}}
        </span>
      </div>
    </el-col>
  </el-row> 
</template>

<script>
export default {
  name: "v-search",
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      modelValue: this.value
    }
  },
  watch: {
    modelValue: {
      deep: true,
      handler: function (val) {
        this.$emit('input', val)
      }
    },
    value: {
      deep: true,
      handler: function (val) {
        this.modelValue = val
      }
    }
  },
  computed: {
    columns() {
      return (this.options || {}).columns || []
    }
  },
  methods: {
    handlerItemClick(column, item) {
      let value = item[(column.props || {})['value'] || 'value']
      if(this.isActiveItem(column, item)) {
        this.modelValue[column['data']] = this.modelValue[column['data']].filter(element => {
          if(element !== value) {
            return element
          }
        })
      } else {
        this.modelValue[column['data']].push(value)
      }
    },
    isActiveItem(column, item) {
      let itemValues = this.modelValue[column['data']] || []
      let isActive = false;
      itemValues.forEach(element => {
        if(element === item[(column.props || {}).value || 'value']) {
          isActive = true
        }
      });
      return isActive;
    }
  }
}
</script>

<style scoped lang="less">
.v-search {
  .v-item {
    padding: 20px 0 10px;
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    border-bottom: 1px dashed #e8e8e8;
    line-height: 28px;
  }
  .v-search-title {
    margin: 0;
    padding: 0 20px;
    width: 120px;
    font-size: 14px;
    text-align: right;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .v-search-content {
    width: calc(100% - 190px);
    display: inline-block;
    .v-search-item {
      padding: 0 12px;
      margin-right: 20px;
      margin-bottom: 12px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      cursor: pointer;
      white-space: nowrap;
      display: inline-block;
      &.active {
        color: #fff;
        background-color: #1890ff;
        border-radius: 5px;
      }
    }
  }
}
</style>
