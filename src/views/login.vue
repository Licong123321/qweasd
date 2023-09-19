<template>
  <div class="login">
    <van-nav-bar title="登录" left-arrow>
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <van-icon class="ico" name="shopping-cart-o" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="data.username" name="用户名" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="data.password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="data.code" name="验证码" label="验证码" placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]" >
        <template #button>
      <van-button class="btn1" size="small" type="primary">发送验证码</van-button>
    </template>
      </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button class='btn' round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import {querylogin} from '@/utis/api';
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const data = reactive<{
  username:'', 
  password:'',
  code:''
}>({
  username:'',
  password:'',
  code:''
})
const onSubmit = (values:any) => {
  console.log('submit', values);
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  text-align: center;

  .ico {
    color: #1baeae;
    font-size: 100px;
    margin: 40px;
  }
  .btn{
    background-color: #1baeae;
  }
  .btn1{
    border-radius: 0;
    background-color: #1baeae;
  }
}
</style>