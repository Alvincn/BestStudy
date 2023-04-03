<script src="../../mock/index.js"></script>
<template>
  <div id="login">
    <div id="title">
      <transition name="el-fade-in-linear">
        <h2>BestStudy <span v-show="!isLogin" style="font-size: 2rem">优学习</span></h2></transition
      >
      <h2 style="font-size: 2rem" v-show="isLogin">优学习</h2>
    </div>
    <!-- 判断是否是登录状态 -->
    <transition name="el-fade-in-linear">
      <div id="form" v-show="isLogin">
        <div class="wave-group" style="">
          <input required="" type="text" class="input" v-model="loginUsername"/>
          <span class="bar"></span>
          <label class="label">
            <span class="label-char" style="--index: 0">用</span>
            <span class="label-char" style="--index: 1">户</span>
            <span class="label-char" style="--index: 2">名</span>
            <span class="label-char" style="--index: 3">/</span>
            <span class="label-char" style="--index: 7">电</span>
            <span class="label-char" style="--index: 8">话</span>
            <span class="label-char" style="--index: 9">号</span>
          </label>
        </div>
        <div class="wave-group">
          <div id="wave">
            <input required="" type="password" class="input" v-model="loginPassword"/>
            <span class="bar"></span>
            <label class="label">
              <span class="label-char" style="--index: 0">密</span>
              <span class="label-char" style="--index: 1">码</span>
            </label>
          </div>
        </div>
        <button class="cssbuttons-io-button" @click="login">
          登 录
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
        <span class="toRegister" style="" @click="changeRegister()">还没账号嘛?立即注册></span>
      </div>
    </transition>
    <!-- 这是注册状态 -->
    <transition name="el-fade-in-linear">
      <div id="form1" v-show="isRegister">
        <div class="wave-group" style="">
          <input required="" type="text" class="input" v-model="registerUsername"/>
          <span class="bar"></span>
          <label class="label">
            <span class="label-char" style="--index: 0">用</span>
            <span class="label-char" style="--index: 1">户</span>
            <span class="label-char" style="--index: 2">名</span>
          </label>
        </div>
        <div class="wave-group" style="">
          <input required="" type="text" class="input" v-model="registerPasswrod"/>
          <span class="bar"></span>
          <label class="label">
            <span class="label-char" style="--index: 0">密</span>
            <span class="label-char" style="--index: 1">码</span>
          </label>
        </div>
        <div class="wave-group">
          <div id="wave">
            <input required="" type="text" class="input" v-model="confimPasswrod"/>
            <span class="bar"></span>
            <label class="label">
              <span class="label-char" style="--index: 0">确</span>
              <span class="label-char" style="--index: 1">认</span>
              <span class="label-char" style="--index: 2">密</span>
              <span class="label-char" style="--index: 3">码</span>
            </label>
          </div>
        </div>
        <div class="wave-group">
          <div id="wave">
            <input required="" type="text" class="input" v-model="phoneCode"/>
            <span class="bar"></span>
            <label class="label">
              <span class="label-char" style="--index: 0">电</span>
              <span class="label-char" style="--index: 1">话</span>
              <span class="label-char" style="--index: 1">号</span>
            </label>
          </div>
        </div>
        <div class="wave-group">
          <div id="wave">
            <input required="" type="text" class="input" v-model="phoneCode"/>
            <button class="getCode" @click="getCode()">获取验证码</button>
            <span class="bar"></span>
            <label class="label">
              <span class="label-char" style="--index: 0">手</span>
              <span class="label-char" style="--index: 1">机</span>
              <span class="label-char" style="--index: 2">验</span>
              <span class="label-char" style="--index: 3">证</span>
              <span class="label-char" style="--index: 4">码</span>
            </label>
          </div>
        </div>
        <button class="cssbuttons-io-button" @click="register()">
          注 册
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
        <span class="toRegister" style="" @click="changeRegister()">已经有账号啦?去登录></span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isLogin: true,
      isRegister: false,
      // 登录时用户名
      loginUsername: '',
      // 登录密码
      loginPassword: '',
      // 注册用户名
      registerUsername: '',
      // 注册密码
      registerPasswrod: '',
      // 确认密码
      confimPasswrod: '',
      // 手机号
      phone: '',
      // 手机号
      phoneCode: '',
      // 正确的手机号验证码
      trueCode: '',
      // 提取
    };
  },
  mounted() {
  },
  methods: {
    // 登录注册切换
    changeRegister() {
      if (this.isLogin == true) {
        this.isLogin = false;
        this.isRegister = true;
      } else {
        this.isRegister = false;
        this.isLogin = true;
      }
    },
    // 获取手机验证码
    getCode() {
      if (!this.registerUsername && !this.registerPasswrod) {
        return this.$message({
          message: "用户名或密码不要为空哦~",
          type: 'warning'
        })
      }
      if (this.registerPasswrod !== this.confimPasswrod) {
        return this.$message({
          message: "确认密码与密码不一致哦，好好检查一下~",
          type: 'warning'
        })
      }
    },
    // 注册
    register() {
      if (!this.registerUsername && !this.registerPasswrod && !this.phone && !this.phoneCode) {
        return this.$message({
          message: "用户名密码不要为空哦"
        })
      }

    },
    // 登录
    login() {
      if (!this.loginUsername.trim() || !this.loginPassword.trim()) {
        return this.$message({
          message: "账号密码不能为空",
          type: 'error'
        })
      }
      let user = {
        username: this.loginUsername,
        password: this.loginPassword
      }
      this.$api.post('/login', user).then(res => {
        if (res.code === 200) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        } else if (res.code === 201) {
          this.$message({
            message: "账号名密码错误",
            type: 'error'
          })
        } else {
          this.$message({
            message: '未知错误',
            type: 'error'

          })
        }
      })

    }
  },
};
</script>

<style scoped lang="less">
/* 背景颜色 */
#login {
  width: 100%;
  height: 100%;
  background-color: #e493d0;
  background-image: radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
  radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
  radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
  radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
  radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax,
  50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 7s movement linear infinite;
}

@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax,
    50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 60vmax 60vmax;
    background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax -20vmax, -40vmax -20vmax,
    40vmax 60vmax;
  }
  50% {
    background-size: 80vmax 80vmax, 110vmax 110vmax, 80vmax 80vmax, 60vmax 60vmax, 80vmax 80vmax;
    background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax, 20vmax 10vmax, 30vmax 70vmax;
  }
  75% {
    background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 70vmax 70vmax;
    background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax, -10vmax 10vmax,
    40vmax 60vmax;
  }
}

/* 背景颜色Over */
/* 输入框Start */
#login {
  width: 100%;
  height: 100%;
  z-index: 100;
  position: relative;
}

/* 输入框文字 */
#title h2 {
  color: white;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 70px;
  margin: 0;
}

#title {
  padding-top: 40px;
}

.toRegister {
  color: #a370f0;
  text-align: end;
  width: 100%;
  transform: translateY(20px);
  font-size: 0.9rem;
  cursor: pointer;
  padding-right: 20px;
}

.toRegister:hover {
  text-decoration: underline;
}

#form {
  width: 30%;
  height: 35%;
  text-align: center;
  /* 实现毛玻璃效果 */
  background: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 25px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.4);
  /* 毛玻璃完成 */
  /* 设置层级 */
  z-index: 101;
  /* 进行居中 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 设置文本框居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 设置内边距 */
  padding: 20px 10px;
}

#form1 {
  width: 27%;
  // height: 35%;
  text-align: center;
  /* 实现毛玻璃效果 */
  background: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 25px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.4);
  /* 毛玻璃完成 */
  /* 设置层级 */
  z-index: 101;
  /* 进行居中 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 设置文本框居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 设置内边距 */
  padding-top: 30px;
  padding-bottom: 30px;
}

.wave-group {
  text-align: center;
  position: relative;
  margin-bottom: 30px;
}

.wave-group .input {
  font-size: 1rem;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-bottom: 1px solid rgb(0, 0, 0);
  background: transparent;
}

.wave-group .input:focus {
  outline: none;
}

.wave-group .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * 0.05s);
}

.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
  color: #5264ae;
}

.wave-group .bar {
  position: relative;
  display: block;
}

.wave-group .bar:before,
.wave-group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
  left: 50%;
}

.wave-group .bar:after {
  right: 50%;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}

/* 设置按钮 */
.cssbuttons-io-button {
  cursor: pointer;
  background: #a370f0;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #7b52b9;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}

@media screen and (max-width: 650px) {
  #form {
    width: 75%;
  }

  .wave-group {
    margin-bottom: 40px;
  }
}

// 手机验证码样式
.getCode {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  border: none;
  border-radius: 0 6px 0 0;
  background-color: #a370f0;
  color: white;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.getCode:hover {
  background-color: #5e5dcd;
}
</style>
