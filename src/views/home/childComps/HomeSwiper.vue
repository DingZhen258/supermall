<template>
    <Swiper>
           <Swiperitem v-for="(item,index) in banners" :key="index">
              <a :href="item.link">
                 <img :src="item.image" alt="" @load="SwiperLoad">
              </a>
            </Swiperitem>
        </Swiper>
</template>

<script>
  import {Swiper,Swiperitem} from '@/components/common/swiper/index.js'
    export default {
        data(){
            return{
                loadflag:true
            }
        },
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
        },
        methods:{
            SwiperLoad(){
                if(this.loadflag){
                     this.$emit('SwiperLoad')
                     this.loadflag=false
                }
               
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>