<template>
  <div>
    传参
    详情页面
    {{$route.params.id}}
    <div>{{datall.dest}}和 {{datall.price}}</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    const resdata = await axios.get('/data/test.json')
    console.log(resdata, '')
    return {
      datall: resdata.data
    }
    // return axios.get('/data/test.json').then(res => {
    //   console.log(res, '')
    //   return {
    //     datall: res.data
    //   }
    // })
  }
}
</script>   