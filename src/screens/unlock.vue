<script setup lang="ts">
import { useScreenStore } from '@/stores/screen';
import Container from './container.vue';
import { onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';

const store = useScreenStore();
const router=useRouter()
let timer=-1

onMounted(() => {
    store.$patch({
        input: '',
    })

    timer=setTimeout(()=>{
        router.push('/lock');
    }, 5000);
})

onBeforeUnmount(()=>clearTimeout(timer))

watch(()=>store.input,(vl)=>{
    if (vl == '*')
        router.push('/home')
    else if (vl!=='')
        store.$patch({
            input: ''
        })
})

</script>

<template>
    <Container lt-fn-text="解锁">
        <div class="bg-layer">
            <p class=" w-32 h-16 bg-white flex justify-center items-center">
                请按下 * 键
            </p>
        </div>
    </Container>
</template>

<style>
.bg-layer{
    width: 100%;
    height: 100%;
    background-image: url("@/assets/home.png");
    background-size: contain;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>