<template>
  <el-container>
    <el-main>
      <router-view v-slot="{ Component, route }">
        <transition appear name="fade-transform" mode="out-in">
          <keep-alive :include="cacheRouter">
            <component :is="Component" :key="route.path"></component>
          </keep-alive>
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, computed, watch, provide } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import PageLayout from './page-layout.vue'
</script>

<style scoped lang="scss">
</style>