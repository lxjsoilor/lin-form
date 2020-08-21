### 基础
::: demo
```html
<div>
  <div>
    <v-search v-model="searchData" :options="options"></v-search>
  </div>
</div>

<script>
export default {
  data() {
    return {
      options: {
        columns: [{
          label: '地区',
          data: 'diqu',
          value: [
            {
              "id": 1,
              "code": "110000",
              "name": "北京市"
            },
            {
              "id": 2,
              "code": "120000",
              "name": "天津市"
            },
            {
              "id": 3,
              "code": "130000",
              "name": "河北省"
            },
            {
              "id": 4,
              "code": "140000",
              "name": "山西省"
            },
            {
              "id": 5,
              "code": "150000",
              "name": "内蒙古"
            },
            {
              "id": 6,
              "code": "210000",
              "name": "辽宁省"
            },
            {
              "id": 7,
              "code": "220000",
              "name": "吉林省"
            },
            {
              "id": 8,
              "code": "230000",
              "name": "黑龙江"
            },
            {
              "id": 9,
              "code": "310000",
              "name": "上海市"
            },
            {
              "id": 10,
              "code": "320000",
              "name": "江苏省"
            },
            {
              "id": 11,
              "code": "330000",
              "name": "浙江省"
            },
            {
              "id": 12,
              "code": "340000",
              "name": "安徽省"
            },
            {
              "id": 13,
              "code": "350000",
              "name": "福建省"
            },
            {
              "id": 14,
              "code": "360000",
              "name": "江西省"
            },
            {
              "id": 15,
              "code": "370000",
              "name": "山东省"
            },
            {
              "id": 16,
              "code": "410000",
              "name": "河南省"
            },
            {
              "id": 17,
              "code": "420000",
              "name": "湖北省"
            },
            {
              "id": 18,
              "code": "430000",
              "name": "湖南省"
            },
            {
              "id": 19,
              "code": "440000",
              "name": "广东省"
            },
            {
              "id": 20,
              "code": "450000",
              "name": "广  西"
            },
            {
              "id": 21,
              "code": "460000",
              "name": "海南省"
            },
            {
              "id": 22,
              "code": "500000",
              "name": "重庆市"
            },
            {
              "id": 23,
              "code": "510000",
              "name": "四川省"
            },
            {
              "id": 24,
              "code": "520000",
              "name": "贵州省"
            },
            {
              "id": 25,
              "code": "530000",
              "name": "云南省"
            },
            {
              "id": 26,
              "code": "540000",
              "name": "西  藏"
            },
            {
              "id": 27,
              "code": "610000",
              "name": "陕西省"
            },
            {
              "id": 28,
              "code": "620000",
              "name": "甘肃省"
            },
            {
              "id": 29,
              "code": "630000",
              "name": "青海省"
            },
            {
              "id": 30,
              "code": "640000",
              "name": "宁  夏"
            },
            {
              "id": 31,
              "code": "650000",
              "name": "新  疆"
            },
            {
              "id": 32,
              "code": "710000",
              "name": "台湾省"
            },
            {
              "id": 33,
              "code": "810000",
              "name": "香  港"
            },
            {
              "id": 34,
              "code": "820000",
              "name": "澳  门"
            }
          ],
          props: {
            label: 'name',
            value: 'code'
          }
        }, {
          label: '多选',
          data: 'checkbox',
          multiple: false,
          value: [{
            label: '单层',
            value: 0
          }, {
            label: '多层',
            value: 1
          }]
        }, {
          label: '交通工具',
          data: 'jtgj',
          value: [{
            label: '飞机',
            value: 0
          }, {
            label: '动车',
            value: 1
          }, {
            label: '驾车',
            value: 2
          }, {
            label: '其他',
            value: 3
          }]
        }]
      },
      searchData: {
        diqu: ['110000', '120000'],
        checkbox: [0],
        jtgj: [2]
      },
    }
  },
  methods: {
    handlerTest() {
      console.log(this.searchData)
    }
  }
}
</script>
```
:::