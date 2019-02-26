<template>
  <div>商品列表
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <nuxt-link :to="'/detall/'+index">{{item.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      list: [
        { name: 'iii', price: 2000 },
        { name: 'iii', price: 3000 },
        { name: 'iii', price: 4000 }
      ]
    }
  }
}
</script>   