<script setup lang="ts">
import { useScreenStore } from '@/stores/screen';
import { onMounted } from "vue";

const props = withDefaults(defineProps<{
    ltFnText: string,
    ltFnUrl: string,
    rtFnText: string,
    rtFnUrl: string,

    infomation?: string,
}>(), {
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
    <div class="w-48 h-32 bg-transparent">
        <slot name="default" :input="store.input"></slot>
    </div>
</template>
