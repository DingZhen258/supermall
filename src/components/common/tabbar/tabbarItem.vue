<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!IsAcitve"><slot name="item-icon1"></slot></div>
        <div v-else><slot name="item-icon2"></slot></div>
        <!-- 动态绑定样式原 :style="{color:'red',fontsize:10 'px'}"  -->
        <!-- 如果复杂可以通过计算属性或者methods抽取 -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>

    </div>
</template>

<script>
    export default {
        name:'tabbarItem',
        // props接受父组件传入的数据
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
           
            }
        },
        computed:{
            IsAcitve(){
                // 当前传入的路径this.$route.path 如果等于当前path 则返回true
                return this.$route.path==this.path
            },
            activeStyle()
            {
                return this.IsAcitve ? {color:this.activeColor} : {}
            }

        },
        methods:{
            itemClick(){
                 if(!this.$route.path.includes(this.path)){
                 this.$router.replace(this.path);
                 }
            }
        }
    }
</script>

<style>

.tab-bar-item {
    flex:1;
    height:49px;
    text-align: center;
    font-size:14px;
}
.tab-bar-item img{
    margin-top:3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
}

</style>