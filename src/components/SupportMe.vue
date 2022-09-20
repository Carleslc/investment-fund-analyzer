<template>
  <q-btn
    type="a"
    href="https://ko-fi.com/carleslc"
    target="_blank"
    color="purple"
    :label="t('support')"
    icon="img:icons/kofi.png"
    no-caps
  >
    <q-tooltip transition-show="fade" transition-hide="fade" content-class="bg-primary shadow-2" class="no-scroll">
      <div v-html="donate" />
    </q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { nl2br } from 'src/utils/strings';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const donate = computed(() => nl2br(t('donate')));
</script>

<style>
.q-icon > img {
  width: 2rem;
  height: 2rem;
}
</style>
