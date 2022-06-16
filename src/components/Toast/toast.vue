<template>
  <div class="toast">{{message}}</div>
</template>
<script>
import {reactive} from 'vue'
export default {
  props: ['message'],
  setup() {

  },
}

export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: ''
  })
  const showClickToast = (message) => {
    toastData.showToast = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.showToast = false
      toastData.toastMessage = message
    }, 3000);
  }
  return { toastData, showClickToast }
}
</script>
<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.32);
  padding: 16px;
  border-radius: 8px;
}
</style>
