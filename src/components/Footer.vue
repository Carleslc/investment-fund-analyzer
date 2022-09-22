<template>
  <q-footer class="row justify-end fixed-bottom-right" @mousedown.prevent>
    <q-btn
      unelevated
      color="primary"
      icon="info"
      class="no-border-radius hidden"
      @click="info = true"
    >
      <q-tooltip
        transition-show="fade"
        transition-hide="fade"
        content-class="bg-primary shadow-2"
      >
      {{ t('aboutApp') }}
      </q-tooltip>
    </q-btn>
    <q-dialog v-model="info" transition-show="jump-up" transition-hide="jump-down">
      <!-- TODO: Info dialog -->
    </q-dialog>
    <q-btn
      square
      unelevated
      color="primary"
      type="a"
      icon="fab fa-github"
      href="https://github.com/Carleslc/investment-fund-analyzer"
      target="_blank"
    />
    <SupportMe class="no-border-radius q-px-sm" />
  </q-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import SupportMe from 'components/SupportMe.vue';

const { t } = useI18n();

const info = ref(false);
</script>
