<script setup lang="ts">
import Button from '@/components/Button.vue';

const inputBtn = "123456789*0#";
</script>

<template>
  <div class="w-48">
    <div class="h-32 bg-sky-300">

    </div>

    <div class="flex flex-wrap">
      <Button text="LT" #content>—</Button>
      <Button text="UP" #content>▲</Button>
      <Button text="RT" #content>—</Button>

      <Button text="LB">
        <template #content>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-5 mx-auto my-1">
            <path fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
      <Button text="DN" #content>▼</Button>
      <Button text="RB">
        <template #content>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="size-5 mx-auto my-2 rotate-[135deg]">
            <path fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    </div>

    <ul class="flex flex-wrap">
      <li v-for="str of inputBtn" :key="str">
        <Button :text="str" @pointer-down="console.log(`key-down: ${str}`)"
          @pointer-up="console.log(`key-up: ${str}`)"></Button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
