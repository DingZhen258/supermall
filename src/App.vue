<template>
  <div id="app"></div>
  <MainTabbar/>
  <router-view v-slot="{ Component }">
  <keep-alive exclude="Detail">
    <component :is="Component" />
  </keep-alive>
</router-view>
</template>

<script>
     import MainTabbar from '@/components/content/mainTabbar/MainTabbar.vue'
    export default {
        name:'app',
        components:{
          MainTabbar
        }
    }     
</script>
<style>
@import "./assets/css/base.css"

</style>
