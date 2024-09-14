<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import Container from './container.vue';
import { useRouter } from 'vue-router';
const router=useRouter();
let timer=-1;

onMounted(()=>{
    timer=setTimeout(()=>router.push('/'),10000)
})

onBeforeUnmount(()=>clearTimeout(timer))
</script>

<template>
    <Container lt-fn-text="解锁" lt-fn-url="/unlock">
        <img src="@/assets/home.png" alt="Home 背景">
    </Container>
</template>
