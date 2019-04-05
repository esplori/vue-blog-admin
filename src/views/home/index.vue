<template>
  <div class="list">
    <commenHeader></commenHeader>
    <div class="index-content">
      <div v-for="(item,index) in list" :key="index" class="list-item">
        <div class="title" @click="getDetail(item.id)">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
        <div class="create-date">{{item.createDate}}</div>
        <div class="handler"><span @click="edit(item.id)">编辑</span><span @click="del(item.id)">删除</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      list: [],
      menuList: [
        {label: '首页', url: 'index'},
        {label: '列表', url: 'index'},
        {label: '后台管理', url: 'admin'}
      ]
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue')
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      axios.get('/pages/list').then(res => {
        console.log('res', res)
        if (res.data.length) {
          this.list = res.data
        }
      })
    },
    getDetail (id) {
      this.$router.push({path: 'detail', query: {id: id}})
    },
    toPost (url) {
      this.$router.push({path: url})
    },
    del (id) {
      axios.delete('/pages/list/' + id).then(res => {
        if (res) {
          this.$message.success('删除成功')
          this.getList()
        }
      })
    },
    edit (id) {
      this.$router.push({path: 'post', query: {id: id}})
    }
  }
}
</script>

<style scoped lang="postcss">
  .list {
    width: 100%;
    margin: 0 auto;
    text-align: left;

    &
    .menu {
      max-width: 1150px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-content: center;
      background: #000;
      color: #fff;

      &
      .menu-item {
        display: inline-block;
        padding: 20px;
      }

    }
    &
    .index-content {
      padding-top: 20px;
      width: 1150px;
      margin: 0 auto;

      &
      .list-item {
        margin-bottom: 20px;

        &
        .title {
          font-size: 18px;
          cursor: pointer;

          &
          :hover {
            text-decoration: underline;
          }

        }

        &
        .content {
          argin: 0 0 8px;
          font-size: 13px;
          line-height: 24px;
          color: #999;
        }

        &
        .create-date {
          font-size: 13px;
          color: #999;
        }

        &
        .handler {
          font-size: 12px;
          padding: 10px 0;

          &
          span {
            cursor: pointer;
            margin-right: 10px;
          }

        }

      }
    }

  }

</style>
