<template>
    <div>
       {{username}}
       <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    </div>
</template>
<script>
export default{
    data () {
        return {
            username:''
        }
    }
}
</script>

