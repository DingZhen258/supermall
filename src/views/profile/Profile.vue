<template>
    <div id="app">
          <Navbar class="profile-nav">
            <template v-slot:title>我的</template>
        </Navbar>
    </div>
</template>

<script>
    import Navbar from '@/components/common/navbar/Navbar.vue'
    export default {
        name:'profile',
        components:{
            Navbar
        }
    }
</script>

<style lang="scss" scoped>

</style>