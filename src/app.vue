<template>
    <div class="app">
        <router-view></router-view>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="shop">主页</van-tabbar-item>
          <van-tabbar-item icon="chat" dot>详情</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data () {
        return {
          active: 1
        }
    },
    watch: {
        active (select) {
            if(select === 0){
                this.$router.push('/index')
            }else if(select === 1){
                this.$router.push('/detail')
            }
        }
    }
}
</script>
