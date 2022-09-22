<template>
  <p v-if="!myFunds.length" v-html="nl2br(t('noFunds'))" class="text-center text-bold text-dark" />
  <FundTable v-else
    :title="tableTitle"
    :funds="myFunds"
    @row-click="onFundClick"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { nl2br } from 'utils/strings';
import { InvestmentFund } from 'models/investment-fund';
import FundTable from 'components/FundTable.vue';

const { t } = useI18n();

const tableTitle = computed(() => t('myFunds'));

const myFunds = ref<InvestmentFund[]>([]);

// TODO: List of my funds from Bookmarks

for (let i = 0; i < 10; i++) {
  myFunds.value.push(...([
    {
      name: 'Test Fund',
      isin: 'IE00B03HD19' + i,
      ter: 0.75,
      sharpe: 1,
    },
    {
      name: 'Another Fund',
      isin: 'IE00B03HD18' + i,
      ter: 0.42,
      sharpe: 1.21,
    },
  ]));
}

function onFundClick(_e: Event, fund: InvestmentFund) {
  console.log(fund);
}
</script>
