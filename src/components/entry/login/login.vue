<template>
    <div>
        <!--账号填写-->
        <div>
            <label for="account"></label>
            <input id="account" type="text" v-model="account" placeholder="请输入账号"/>
        </div>

        <!--密码填写-->
        <div>
            <label for="password"></label>
            <input id="password" type="text" v-model="password" placeholder="请输入密码"/>
        </div>

        <!--提交操作-->
        <div>
            <button v-on:click="loginOpt()">提交</button>
        </div>

    </div>
</template>

<script>
    import loginMixins from './loginMixins.js';
    export default {
        mixins: [loginMixins],
    }
</script>
