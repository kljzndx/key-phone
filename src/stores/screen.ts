import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', () => {
  const ltFnText = ref('');
  const rtFnText = ref('');
  const ltFnUrl = ref('');
  const rtFnUrl = ref('');

  const input = ref('');
  const optionId = ref(0);
  
  const information = ref('');

  return { ltFnText, ltFnUrl, rtFnText, rtFnUrl, input, optionId, information }
})
