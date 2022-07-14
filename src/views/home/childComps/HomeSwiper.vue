<template>
    <Swiper>
           <Swiperitem v-for="(item,index) in banners" :key="index">
              <a :href="item.link">
                 <img :src="item.image" alt="">
              </a>
            </Swiperitem>
        </Swiper>
</template>

<script>
  import {Swiper,Swiperitem} from '@/components/common/swiper/index.js'
    export default {
        props:{
             banners: {
             type: Array,
                 default() {
                  return []
            }
         }
        },
        components:{
            Swiperitem,
            Swiper   
        }
    }
</script>

<style lang="scss" scoped>

</style>