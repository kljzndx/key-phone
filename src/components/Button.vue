<script setup lang="ts">
const props = withDefaults(defineProps<{
    text?: string
}>(), {
    text: ''
});

const em = defineEmits<{
    pointerDown: [text: string]
    pointerUp: [text: string]
}>();
</script>

<template>
    <a class="w-16 h-8 block text-xl text-center bg-orange-300 border-2 border-orange-900" @click.prevent
        @pointerdown.stop.prevent="em('pointerDown', props.text)" @pointerup.stop.prevent="em('pointerUp', props.text)">
        <slot name="content">{{ props.text }}</slot>
    </a>
</template>

<style>

</style>