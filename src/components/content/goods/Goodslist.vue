<template>
    <div class="goods">
       <Goodslistitem v-for="item in goods" :key="item" 
       :goodsitem="item"/>
    </div>
</template>

<script>
    import Goodslistitem from '@/components/content/goods/Goodslistitem'
    export default {
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            Goodslistitem
        }
    }
</script>

<style  scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 4px;
    margin-bottom: 44px;
}
</style>