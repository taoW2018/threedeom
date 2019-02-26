<template>
  <div>
    <h2 class="red">
      home page
      <button @click="sayHello()">按钮检测测试注入</button>
    </h2>
  </div>
</template>
<script>
import Logo from '~/components/logo.vue'
export default {
  data() {
    return {}
  },
  methods: {
    sayHello() {
      console.log('tag', '1111111111')
      this.$debug('say hello')
    }
  }
}
</script>