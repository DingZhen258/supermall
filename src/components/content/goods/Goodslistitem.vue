<template>
    <div class="goods-list-item" @click="itemclick">
         <img :src="goodsitem.img" alt="">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">998￥</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            goodsitem:{
                default(){
                    return {}
                }
            }
        },
        methods:{
            itemclick(){
                this.$router.push('/detail/'+ this.goodsitem.id)
                console.log(this.goodsitem);
            }
        }

    }
</script>

<style scoped>
.goods-list-item{
    padding-bottom: 45px;
    width: 48%;
}
.goods-list-item img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
.price{
    color: palevioletred;
    font-weight: 700;
}
</style>