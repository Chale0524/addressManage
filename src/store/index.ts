import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'address',
  state: () => ({
    AddressConfig: '',
  }),
})
