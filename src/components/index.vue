<template>
    <div>main
        <el-button type="success" @click="logout">退出</el-button>
    </div>
</template>
<script>
export default {
    beforeCreate() {
        let token = window.sessionStorage.getItem('token');
        if(!token){
            //未登录
            this.$message.error('请先登录');
            this.$router.push('/login');
            return false;
        }   
    },
    methods: {
        logout(){
            window.sessionStorage.removeItem('token');
            this.$router.push('/login');
        }
    },
}
</script>
<style>

</style>

