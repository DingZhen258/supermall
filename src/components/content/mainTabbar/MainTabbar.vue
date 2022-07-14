<template>
    <tabbar>
            <!-- 父子通信 将路径和样式传给子组件 -->
            <tabbarItem path="/home" activeColor='hotPink'>
                <template v-slot:item-icon1><img src="@/assets/img/tabbar/home.svg"></template>
                <template v-slot:item-icon2><img class="last" src="@/assets/img/tabbar/home_active.svg"></template>
                <template v-slot:item-text><div>首页</div></template>
            </tabbarItem>
              <tabbarItem path="/shopcart" activeColor='hotPink'>
                <template v-slot:item-icon1><img src="@/assets/img/tabbar/shopcart.svg"></template>
                 <template v-slot:item-icon2><img class="last" src="@/assets/img/tabbar/shopcart_active.svg"></template>
                <template v-slot:item-text><div>购物车</div></template>
            </tabbarItem>
              <tabbarItem path="/category" activeColor='hotPink'>
                <template v-slot:item-icon1><img src="@/assets/img/tabbar/category.svg"></template>
                 <template v-slot:item-icon2><img class="last" src="@/assets/img/tabbar/category_active.svg"></template>
                <template v-slot:item-text><div>关于</div></template>
            </tabbarItem>
              <tabbarItem path="/profile" activeColor='hotPink'>
                <template v-slot:item-icon1><img src="@/assets/img/tabbar/profile.svg"></template>
                 <template v-slot:item-icon2><img class="last" src="@/assets/img/tabbar/profile_active.svg"></template>
                <template v-slot:item-text><div>我的</div></template>
            </tabbarItem>
       </tabbar> 
</template>


<script>
    import tabbar from '@/components/common/tabbar/tabbar.vue'
    import tabbarItem from '@/components/common/tabbar/tabbarItem.vue'
    export default {
        name:'mainTabbar',
        components:{
            tabbar,
            tabbarItem
        }
    }
</script>

<style  scoped>

</style>