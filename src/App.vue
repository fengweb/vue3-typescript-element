<template>
  <div>
    <svg-icon name="photo" width="50" height="50"></svg-icon>
    <h2 class="base-font-color">字体颜色</h2>
    <el-button type="primary">123</el-button>
    <Edit />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqUserInfo } from '@/api/user'
let list = ref([])
onMounted(() => {
  getList()
})
const getList = async () => {
  const params = {
    page: 1,
    limit: 10,
  }
  let result = await reqUserInfo(params)
  console.log(result)
  list.value = result.data
}
</script>
<style scoped></style>
