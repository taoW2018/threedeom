<template>
  <div>用户(嵌套路由)
    <h2>
      <nuxt-link to="/user/">嵌套首页</nuxt-link>
      <nuxt-link to="/user/profile">嵌套首页</nuxt-link>
      <!-- nuxt 动态嵌套路由的位置 -->
      <nuxt/>
    </h2>
  </div>
</template>
<script>
export default {
  data: () => {
    return {}
  }
}
</script>