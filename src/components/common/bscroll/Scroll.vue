<template>
    
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    //导入BScroll插件 
    import BScroll from 'better-scroll'
    export default {
      name: "Scroll",
      data() {
      return {
        scroll: null,
      }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad: {
            type:Boolean,
            default:false
        }

    },
    mounted() {
         // 1.创建BScroll对象 并存储到data里
        //  vue不建议用queryselect拿div 而是通过ref拿到
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',postion=>{
        this.$emit('scroll',postion)
      })
        this.scroll.on('pullingUp',()=>{
          console.log('加载更多');
        //   告知scroll完成滚动
          this.scroll.finishPullUp()
        })
    }
}
</script>

<style  scoped>
</style>