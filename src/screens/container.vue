<script setup lang="ts">
import { useScreenStore } from '@/stores/screen';
import { onMounted } from "vue";

const props = withDefaults(defineProps<{
    ltFnText?: string,
    ltFnUrl?: string,
    rtFnText?: string,
    rtFnUrl?: string,

    infomation?: string,
}>(), {
    ltFnText:'',
    ltFnUrl:'',
    rtFnText:'',
    rtFnUrl:'',

    infomation: '',
});

const store = useScreenStore();

onMounted(() => {
    store.$patch({
        ltFnText: props.ltFnText,
        ltFnUrl: props.ltFnUrl,
        rtFnText: props.rtFnText,
        rtFnUrl: props.rtFnUrl,

        information: props.infomation,
    })
})
</script>

<template>
    <div class="w-full h-full bg-transparent relative">
        <slot name="default"></slot>
        <div class="w-full h-full py-6 bg-transparent absolute top-0 left-0">
            <slot name="main"></slot>
        </div>
    </div>
</template>
