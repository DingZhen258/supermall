<template>
    <div id="app">
         <Navbar class="shop-nav">
        <template v-slot:title>购物车({{$store.state.shopCarData.length}})</template>
        </Navbar>
        <ShopItem></ShopItem>
       
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue'
import ShopItem from './childComps/ShopItem.vue'
    export default {
        name:'shopcart',
        data(){
            return{

            }
        },
        components:{
            Navbar,
            ShopItem
        }        
    }
</script>

<style scoped>
.shop-nav {
    background: pink;
    color:white;
    font-size: 20px;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
}
</style>