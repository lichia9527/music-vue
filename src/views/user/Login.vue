<template>
  <div class="login">
    <!-- <m-header title="手机登录"></m-header> -->
    <div class="form">
      <div class="input-group">
        <input type="text" v-model.trim="phone" placeholder="请输入手机号">
      </div>
      <div class="input-group">
        <input v-model.trim="password" type="password" placeholder="请输入密码">
      </div>
      <div class="btn" @click="login">登录</div>
    </div>
  </div>
</template>
<script>
import MHeader from '@/components/Header'
import { UserService } from '@/api/user'
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (!this.phone) {
        return
      }
      if (!this.password) {
        return
      }

      UserService.login(this.phone, this.password).then(res => {
        if (res.code === 200) {
          localStorage.setItem('user', res.profile)
          this.$router.push('/home')
        }
      })
    }
  },
  components: {
    MHeader
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/var.scss';
.login {
  position: fixed;
  top: rem(110);
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 10;
  padding: 0 rem(25);
  @include font(14);
  .form {
    margin-top: rem(40);
    .input-group {
      height: rem(90);
      input {
        width: 100%;
        height: 100%;
        outline: none;
        border-bottom: rem(1) solid #bbb;
      }
    }
    .btn {
      height: rem(80);
      background: $color-theme;
      border-radius: rem(50);
      color: #fff;
      @include font(18);
      text-align: center;
      line-height: rem(80);
      margin-top: rem(50);
    }
  }
}
</style>
