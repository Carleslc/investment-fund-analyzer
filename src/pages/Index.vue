<template>
  <q-page>
    <p v-if="!myFunds.length" v-html="nl2br(t('noFounds'))" class="text-center text-bold text-dark" />
    <!-- TODO: List of my funds (Bookmarks) -->
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { InvestmentFund } from 'components/models';
import { nl2br } from 'src/utils/strings';

const { t } = useI18n();

const myFunds = ref<InvestmentFund[]>([]);
</script>
