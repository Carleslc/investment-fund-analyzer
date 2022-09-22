<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title v-t="'title'" class="title gt-sm" />
        <Search class="absolute-center" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding class="bg-gradient">
        <router-view />
      </q-page>
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import Search from 'components/Search.vue';
import Footer from 'components/Footer.vue';
</script>

<style lang="scss" scoped>
@media screen and (max-width: $breakpoint-md-max) {
  .title {
    font-size: 1.3em;
  }
}
</style>
