<script setup lang="ts">
import { useScreenStore } from '@/stores/screen';
import Container from './container.vue';

const store=useScreenStore();
</script>

<template>
    <Container lt-fn-text="菜单" lt-fn-url="/pb-menu" rt-fn-text="删除" rt-fn-url="#del" #main>
        <p class=" w-full h-full flex justify-center items-center text-white text-xl">{{ store.input==''?'请输入号码':store.input }}</p>
    </Container>
</template>