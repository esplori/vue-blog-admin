<template>
  <div class="imageManage">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="item">
          <img :src="item" alt="" width="200px">
        </div>
        <div class="item-name">
          {{item}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {delCateApi, getImageListApi} from '@/views/API/admin.js'

export default {
  data () {
    return {
      list: [],
      total: 0
    }
  },
  created () {
    this.getList()
  },
  methods: {
    insertCate () {
      this.list.push({
        name: '',
        disabled: true
      })
    },
    async getList () {
      let res = await getImageListApi({})
      if (res) {
        this.list = res.map(item => {
          let lastIndex = item.lastIndexOf('/')
          let newItem = item.slice(lastIndex)
          return 'uploadFile/' + newItem
        })
      }
    },
    async del (id) {
      let res = await delCateApi({id: id})
      if (res) {
        this.$message.success('删除成功')
        this.getList()
      }
    },
    /**
     * 编辑
     */
    edit (row) {
      this.$set(row, 'disabled', !row.disabled)
    },
    handleSizeChange (val) {
      this.params.pageSize = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.params.page = val
      this.getList()
    }
  }
}
</script>

<style scoped lang="less">
  .imageManage {
    width: 100%;
    ul {
      li {
        width: 200px;
        height: 120px;
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        border: 1px solid #ddd;
        .item-name{
          display: inline-block;
        }
      }
    }
  }
</style>
