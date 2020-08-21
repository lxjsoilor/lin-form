<template>
  <component :is="C('cascader')" v-model="cascadersValue" v-bind="{ ...$attrs }" :options="currentOptions"></component>
</template>

<script>
import { C, libName } from '../../utils.js'
export default {
  props: {
    value: {},
    options: {
      type: [Array, Function],
      default() {
        return []
      }
    }
  },
  data() {
    return {
      cascadersValue: this.value || [],
      currentOptions: []
    }
  },
  watch: {
    cascadersValue: {
      handler(value) {
        if (value) {
          this.$emit('input', value || []);
        }
      },
      immediate: true
    },
    value(val) {
      this.cascadersValue = val || [];
    },
    options: {
      handler(options) {
        if (typeof options === 'function') {
          let result = options()
          if (result instanceof Array) {
            this.currentOptions = result
          } else {
            result.then(res => {
              this.currentOptions = res
            })
          }
        } else {
          this.currentOptions = options || []
        }
      },
      immediate: true
    }
  },
  methods: {
    C, libName
  }
}
</script>

<style>
.hc-form-checkbox .is-bordered.el-checkbox ,.el-radio {
  margin-right: 0px;
}
</style>
