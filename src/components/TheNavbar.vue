<script setup lang="ts"></script>
<template>
  <div
    class="w-full shadow-md flex justify-center items-center py-6 bg-slate-200 gap-12"
  >
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
    <router-link to="/register" class="nav-link">Register</router-link>
  </div>
</template>

<style lang="scss" scoped>
.nav-link {
  @apply hover:font-bold transition-all px-4;
}
</style>
