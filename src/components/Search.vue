<template>
  <q-input class="toolbar-input" dark dense standout v-model="search" :placeholder="t('search')">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const search = ref('');
</script>

<style scoped>
.toolbar-input {
  width: 35%;
}
</style>
