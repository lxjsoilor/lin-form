### 级联选择
::: demo
```html
<div>
  <div>
    <v-form :options="options" v-model="model"></v-form>
  </div>
</div>

<script>
const axios = require('axios')
let tree = [{
  value: 'beijing',
  label: '北京',
  disabled: true,
  children: [
      {
          value: 'gugong',
          label: '故宫'
      },
      {
          value: 'tiantan',
          label: '天坛'
      },
      {
          value: 'wangfujing',
          label: '王府井'
      }
  ]
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [
      {
          value: 'nanjing',
          label: '南京',
          children: [
              {
                  value: 'fuzimiao',
                  label: '夫子庙',
              }
          ]
      },
      {
          value: 'suzhou',
          label: '苏州',
          children: [
              {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
              },
              {
                  value: 'shizilin',
                  label: '狮子林',
              }
          ]
      }
  ],
}]
export default {
  data() {
    return {
      model: { },
      options: {
        submit: (mode, done) => {
          alert(JSON.stringify(mode))
          setTimeout(() => {
            done();
          }, 2000)
        },
        columns: [{
            title: '级联选择',
            type: 'cascaders',
            data: 'cascader',
            props: {
              clearable: true,
              props: { expandTrigger: 'hover'},
              options: () => {
                  return new Promise((res,rej) => {
                    setTimeout(() => {
                        res(tree)
                    }, 1000)
                  })
              },
            }
        }]
      }
    }
  },
  mounted() {
      setTimeout(() => {
        this.model.cascader = ['jiangsu', 'suzhou', 'shizilin']
      }, 2000)
  }
}
</script>
```
:::


### 获取泰啤地区树
::: demo
```html
<div>
  <div>
    <v-form :options="options" v-model="model"></v-form>
  </div>
</div>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      model: { },
      options: {
        submit: (mode, done) => {
          alert(JSON.stringify(mode))
          setTimeout(() => {
            done();
          }, 2000)
        },
        columns: [{
            title: '级联选择',
            type: 'cascaders',
            data: 'cascader',
            props: {
              clearable: true,
              props: { label: 'nodeName', value: 'id'},
              options: () => {
                  return new Promise((res,rej) => {
                    axios.get('http://api.tsbeer.com/uac/auth/address/queryAll').then(result => {
                        res(result.data.result)
                    })
                  })
              },
            }
        }]
      }
    }
  },
  mounted() {
      setTimeout(() => {
        this.model.cascader = ['jiangsu', 'suzhou', 'shizilin']
      }, 2000)
  }
}
</script>
```
:::