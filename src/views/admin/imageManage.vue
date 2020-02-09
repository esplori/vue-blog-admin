<template>
  <div class="imageManage">
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {delCateApi, getImageListApi} from '@/views/API/admin.js'

export default {
  data () {
    return {
      list: []
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
        this.list = res.result
        this.total = res.total
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
  }
</style>
