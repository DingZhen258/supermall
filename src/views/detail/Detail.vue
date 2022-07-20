<template>
    <div id="detail">
       <DatailNav class="detail-nav"></DatailNav>
       <DetailSwiper :detailData="detailData"></DetailSwiper>
       <DetailbottonBar @addCart="addToCart"></DetailbottonBar>
      
    </div>
</template>

<script>
import DatailNav from '@/views/detail/childComps/DatailNav.vue'
import DetailSwiper from '@/views/detail/childComps/DetailSwiper.vue'
import DetailbottonBar from '@/views/detail/childComps/DetailbottonBar.vue'


import {getDetail} from '@/network/detail.js'

    export default {
        name:'Detail',
        data(){
            return  {
                detailData:[]
            }
        },
        components:{
          DatailNav,
          DetailSwiper,
          DetailbottonBar,
        },
        created(){
            this.id=this.$route.params.id
            console.log(this.id);
             // 网络请求
            getDetail(this.id).then(res=>{
                this.detailData=res.data.data.list[(this.id-1)]
                   console.log(this.detailData);
            })
        },
        methods:{
            addToCart(){
                this.$store.commit('CarData',this.detailData)
                this.$toast('加入购物车成功');
            }
        }
    
    }
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background: white;
}

</style>