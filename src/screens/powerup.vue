<script setup lang="ts">
import { onMounted } from 'vue';
import Container from './container.vue';
import { useRouter } from 'vue-router';

const router=useRouter();

onMounted(()=>{
    setTimeout(()=>router.push('/lock'), 3000);
})
</script>
<template>
    <Container>
        <div class="w-full h-full flex justify-center items-center">
            <p class="w-32 h-16 text-2xl bg-white flex justify-center items-center">开机中</p>
        </div>
    </Container>
</template>