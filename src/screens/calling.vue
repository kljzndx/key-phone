<script setup lang="ts">
import { useScreenStore } from '@/stores/screen';
import Container from './container.vue';

const state = useScreenStore();

</script>
<template>
    <Container rt-fn-text="返回" rt-fn-url="#back" #main>
        <div class="relative w-full h-full text-center text-white">
            <p>{{ state.input }}</p>

            <p class="absolute top-0 left-0 w-full h-full text-2xl flex justify-center items-center">通话中</p>
        </div>
    </Container>
</template>
