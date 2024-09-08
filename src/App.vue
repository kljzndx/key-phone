<script setup lang="ts">
import Button from '@/components/Button.vue';

const inputBtn = "123456789*0#";
</script>

<template>
  <div>
    <ul class="w-48 flex flex-wrap">
        <li v-for="str of inputBtn" :key="str">
            <Button :text="str" @pointer-down="console.log(`key-down: ${str}`)" @pointer-up="console.log(`key-up: ${str}`)"></Button>
        </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
