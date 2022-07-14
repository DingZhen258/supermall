<template>
    <div class="goods-list-item">
      <a href="https://uland.taobao.com/sem/tbsearch?refpid=mm_26632360_8858797_29866178&keyword=%E5%A5%B3%E8%A3%85&clk1=c496a42a77bb1d93e16463d4abf662df&upsId=c496a42a77bb1d93e16463d4abf662df">
         <img :src="goodsitem.img" alt="">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">998￥</span>
        </div>
      </a>
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
        }
    }
</script>

<style scoped>
.goods-list-item{
    padding-bottom: 10px;
    width: 48%;
}
.goods-list-item img{
    height: 200px;
    width: 175px;
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