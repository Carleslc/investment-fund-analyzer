<template>
  <q-input class="search-toolbar" dark dense standout v-model="search" :placeholder="t('search')">
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

<style lang="scss" scoped>
.search-toolbar {
  width: 35%;
  min-width: 300px;
}
@media screen and (max-width: $breakpoint-sm-max) {
  .search-toolbar {
    width: 50%;
  }
}
</style>
