<template>
  dddddddddddddddddddddddddddddd
  <button @click="handleLogin">点击登录</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter()

    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({ name: "Home" })
    }
    return {
      handleLogin
    }
  }
}
</script>

<style>
</style>
