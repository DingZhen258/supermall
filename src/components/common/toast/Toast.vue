<template>
    <div class="toast">
111111111111
    </div>
</template>

<script>
    export default {
        name:'toast',
        props:{
            msg:{
                type:String,
                default(){
                    return ''
                }
            }
        }
    }   
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgb(red, green, blue);
}
</style>