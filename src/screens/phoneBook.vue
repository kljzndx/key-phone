<script setup lang="ts">
import { useScreenStore } from "@/stores/screen";
import Container from "./container.vue";
import { onMounted, watch } from "vue";

const store=useScreenStore();

const data=[
    {
        name:'张三',
        tel:'123456789'
    },
    {
        name:'李四',
        tel:'567891234'
    },
    {
        name:'王五',
        tel:'987654321'
    },
]

watch(()=>store.optionId, (vl, ovl)=>{
    if (vl>=data.length){
        store.optionId=data.length-1;
        return;
    }

    store.input=data[vl].tel;
})

onMounted(()=>{
    if (store.optionId>=data.length)
        store.optionId=0;

    store.input=data[store.optionId].tel;
})
</script>

<template>
    <Container lt-fn-text="菜单" lt-fn-url="/pb-menu" rt-fn-text="返回" rt-fn-url="#back" #main>
        <ul>
            <li class="py-1 px-2 my-1 flex flex-nowrap gap-x-3
                overflow-hidden text-nowrap whitespace-nowrap text-clip"
                :class="[store.optionId==id?'bg-sky-400':'bg-slate-400']"
                v-for="(item, id) of data" :key="item.tel">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-4 my-1">
                        <path fill-rule="evenodd"
                            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <p>{{ item.name }}</p>
                <p>{{ item.tel }}</p>
            </li>
        </ul>
    </Container>
</template>