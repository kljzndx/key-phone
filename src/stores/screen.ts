import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', () => {
  const ltFnText = ref('');
  const rtFnText = ref('');
  const ltFnUrl = ref('');
  const rtFnUrl = ref('');
  const input = ref('');
  const information = ref('');

  return { ltFnText, ltFnUrl, rtFnText, rtFnUrl, input, information }
})
