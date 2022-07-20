<template>
        <Swiper class="detail-swiper">
            <Swiperitem v-for="item in detailData.image" :key="item">
                   <img :src="item" alt="">
            </Swiperitem>
        </Swiper>
        <div>
           {{detailData.name}}
        </div>
          <div class="wavy">
        <!-- --i是自定义属性，可通过var函数调用 -->
        <span style="--i:1;">l</span>
        <span style="--i:2;">o</span>
        <span style="--i:3;">a</span>
        <span style="--i:4;">d</span>
        <span style="--i:5;">i</span>
        <span style="--i:6;">n</span>
        <span style="--i:7;">g</span>
        <span style="--i:8;">.</span>
        <span style="--i:9;">.</span>
        <span style="--i:10;">.</span>
         </div>
</template>

<script>
 import {Swiper,Swiperitem} from '@/components/common/swiper/index.js'
    export default {
        components:{
            Swiper,
            Swiperitem
        },
        props:{
            detailData:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.detail-swiper{
    height:300px
}
.detail-swiper img{
    height:300px
}
.wavy{
    /* 相对定位 */
    position: relative;
    top: 100px;
    /* 倒影效果 */
    -webkit-box-reflect: below -12px linear-gradient(transparent,rgba(0,0,0,0.2));
}
.wavy span{
    position: relative;
    display: inline-block;
    color: goldenrod;
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: 8px;
    /* 执行动画：动画名 时长 加速后减速 无限次播放 */
    animation: wavyAnimate 1s ease-in-out infinite;
    /* 通过var函数调用自定义属性--i，再计算出动画延迟时间 */
    animation-delay: calc(0.1s * var(--i));
}

/* 定义动画 */
@keyframes wavyAnimate {
    0%{
        transform: translateY(0);
    }
    20%{
        transform: translateY(-20px);
    }
    40%,100%{
        transform: translateY(0);
    }
}
</style>