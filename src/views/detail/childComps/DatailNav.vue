<template>
    <div id="detail-nav">
         <Navbar>
            <template v-slot:leftIcon>
                <div class="detailImg" @click="backClick"><img src="@/assets/img/common/back.svg" alt=""></div>
            </template>
             <template v-slot:title>
               <div class="detail-item" v-for="(item,index) in title" :key="item" 
               @click="itemclick(index)"
               :class="{activecolor:currentIndex===index}">
                {{item}}
               </div>
            </template>
        </Navbar>
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue'

    export default {
        data(){
            return{
                title:['商品','参数','评论','推荐'],
                currentIndex:0,
                id:null,
            }
        },
        components:{
            Navbar,
        },
        methods:{
            itemclick(index){
                this.currentIndex=index
            },
            backClick(){
               this.$router.go(-1)
            }

           
        }
        

    }
</script>

<style scoped>
#detail-nav{
    position: fixed;
    z-index: 9;
    width:100%;
    background: white;
}
.titles{
    margin-right: 10px;
}
.detail-item {
    flex: 1;
}
.activecolor{
    color:red
}
.detailImg img{
    vertical-align: middle;
}
</style>