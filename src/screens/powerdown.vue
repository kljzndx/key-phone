<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Container from './container.vue';

const isShow=ref(true)

onMounted(()=>{
    setTimeout(()=>isShow.value=false, 3000);
})
</script>
<template>
    <Container>
        <div class="w-full h-full bg-black flex justify-center items-center">
            <p v-if="isShow" class="text-gray-300 text-2xl">已关机</p>
        </div>
    </Container>
</template>