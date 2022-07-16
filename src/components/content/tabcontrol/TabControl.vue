<template>
    <div id="tab-control"> 
        <div v-for="(item,index) in titles" :key="item"
         class="tab-control-item"
        :class="{active:index===currentIndex}"
         @click="clickitem(index)">
             <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            clickitem(index){
                this.currentIndex =index;
                this.$emit('tabclick',index)
            }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
#tab-control{
    display:flex;
    background: white;
    padding-bottom: 5px;
   
}
.tab-control-item{
    flex:1;
    line-height: 30px;
    text-align: center;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color:palevioletred
}
.active span{
    border-bottom: 3px solid palevioletred;
}
</style>