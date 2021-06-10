<template>
  <div>
    首页
    <button @click="toPage">去测试页</button>
  </div>
</template>
<script>
  export default {
    methods: {
      toPage() {
        uni.navigateTo({
          url: '/pages/test/index'
        })
      }
    },
  }
</script>