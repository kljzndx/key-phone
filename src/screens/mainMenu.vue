<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import Container from './container.vue';
import { useScreenStore } from '@/stores/screen';

import png_pBook from '@/assets/phone-book.png';
import png_message from '@/assets/message.png';
import png_tools from '@/assets/tools.png';

const data=ref([
    {
        text:'电话簿',
        img: png_pBook,
        link:'/p-book',
    },
    {
        text:'信息',
        img:png_message,
        link:'/message',
    },
    {
        text:'工具箱',
        img:png_tools,
        link:'/tools',
    },
])

const store=useScreenStore();

const cItem=computed(()=>{
    return data.value[Math.min(store.optionId, data.value.length-1)]
})

watch(()=>store.optionId, (vl)=>{
    if (vl>=data.value.length){
        store.optionId=data.value.length-1;
        return;
    }

    store.ltFnUrl=data.value[vl].link;
})

onMounted(()=>{
    if (store.optionId>=data.value.length)
        store.optionId=0;
})

</script>
<template>
    <Container lt-fn-text="确定" rt-fn-text="返回" rt-fn-url="#back">
        <div class=" h-full bg-sky-400 text-center flex flex-col justify-center items-center ">
            <img :src="cItem.img" alt="logo" class="h-16">
            <p>{{ cItem.text }}</p>
        </div>
    </Container>
</template>