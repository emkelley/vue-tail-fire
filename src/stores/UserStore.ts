import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: () => ({
    uid: undefined,
  }),
  actions: {},
  persist: true,
});
