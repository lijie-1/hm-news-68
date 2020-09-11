<template>
  <div class="mystar">
    <hm-header>我的收藏</hm-header>
    <hm-post v-for="item in list" :key='item.id' :post='item'></hm-post>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getStarList() {
      const res = await this.$axios.get('/user_star')
      // console.log(res)
      const { statusCode, data } = res.data
      if (statusCode === 200) {
        this.list = data
        this.list.forEach(item=>{
          item.comment_length=item.comments.length
        })
        console.log(this.list)
      }
    }
  },
  created() {
    this.getStarList()
  }
}
</script>

<style lang="less" scoped>
.item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  .info {
    flex: 1;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .user {
      color: #666;
      font-size: 14px;
      span:first-child {
        margin-right: 10px;
      }
    }
  }
  .img {
    img {
      width: 120px;
      height: 74px;
      // 作用和background-size类似，，设置图片的大小
      // cover的缺点：保证图片覆盖完整的大小， 缺点：会有一部分被截取掉
      // contain: 保证图片被完整的显示，会有留白
      object-fit: cover;
    }
  }
}
</style>
