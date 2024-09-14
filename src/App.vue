<script setup lang="ts">
import Button from '@/components/Button.vue';
import { useScreenStore } from './stores/screen';
import { useRouter, useRoute } from 'vue-router';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const inputBtn = "123456789*0#";

const store=useScreenStore();
const route=useRoute();
const router=useRouter();

const hasFn=computed(()=>{
  return store.ltFnText+store.ltFnUrl+store.rtFnText+store.rtFnUrl != '';
})

let lockTimer=-1;
const LOCK_SEC=60;
const second=ref(LOCK_SEC);
onMounted(()=>{
  lockTimer = setInterval(() => {
    if(!hasFn.value)
      return;

    if (second.value==0)
      router.push('/');
    else
      second.value-=1;
  }, 1000);
})

onBeforeUnmount(()=>{
  clearInterval(lockTimer);
})

router.afterEach((to, from,fail)=>{
  second.value=LOCK_SEC;
})

let powerTimer=-1;
function onPointerDownRb(){
  powerTimer=setTimeout(()=>{
    if (route.path=='/powerdown')
      router.push('/powerup');
    else
      router.push('/powerdown');
  }, 5000)
}

function onPointerUpRb(){
  if (!hasFn.value)
    return;

  clearTimeout(powerTimer);

  if(['/home', '/lock', '/unlock'].includes(route.path))
    router.push('/')
  else
    router.push('/home')
}

function goLeft(){
  if (store.ltFnUrl)
    router.push(store.ltFnUrl)
}

function goRight(){
  if (store.rtFnUrl)
    router.push(store.rtFnUrl)
}

function up(){
  if (store.input.length==1&&Number.isSafeInteger(store.input)){
    const vl=Number(store.input)
    const nl=(vl+1).toString()

    store.$patch({
      input: nl,
    })
  }
}

function down(){
  if (Number.isSafeInteger(store.input)){
    const vl=Number(store.input)
    if (vl==0)
      return;

    const nl=(vl-1).toString()
    
    store.$patch({
      input: nl,
    })
  }
}

</script>

<template>
  <div class="w-48">
    <div class="h-40 relative bg-sky-800">
      <RouterView></RouterView>
      
      <div v-if="hasFn" class="flex flex-col justify-between absolute top-0 left-0 w-full h-full">
        <div class="scr-info">
          <span>15:30</span>
          <span>4G 70% 电</span>
        </div>
        <div class="scr-info">
          <span>{{ store.ltFnText }}</span>
          <span>{{ store.rtFnText }}</span>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="flex flex-wrap">
        <Button text="LT" @pointer-up="goLeft" #content>—</Button>
        <Button text="UP" @pointer-up="down" #content>▲</Button>
        <Button text="RT" @pointer-up="goRight" #content>—</Button>

        <Button text="LB">
          <template #content>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-5 mx-auto my-1">
              <path fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd" />
            </svg>
          </template>
        </Button>
        <Button text="DN" @pointer-up="up" #content>▼</Button>
        <Button text="RB" @pointer-down="onPointerDownRb" @pointer-up="onPointerUpRb">
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
          <Button :text="str"
            @pointer-up="store.$patch({input: store.input+str})"></Button>
        </li>
      </ul>

      <div v-if="$route.path=='/'" class="absolute left-0 top-0 w-full h-full bg-transparent"
           @pointerup="$router.push('/lock')"></div>
    </div>
  </div>
</template>

<style scoped>
.scr-info{
  @apply h-6 flex justify-between text-white text-sm p-1;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
