<template>
  <q-table
    row-key="isin"
    :title="props.title"
    :dense="$q.screen.height < 930"
    :rows="props.funds"
    :columns="columns"
    :pagination="pagination"
    :rows-per-page-options="[]"
    :hide-pagination="props.funds.length <= pagination.rowsPerPage"
    class="fund-table"
  >
    <template v-slot:body-cell-name="cell">
      <q-td key="name" :props="cell">
        <q-item class="q-px-none q-py-xs">
          <q-item-section>
            <q-item-label>{{ cell.row.name }}</q-item-label>
            <q-item-label caption>{{ cell.row.isin }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-td>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { QTableColumn } from 'quasar';
import { InvestmentFund } from 'models/investment-fund';

export interface Props {
  title?: string,
  funds: InvestmentFund[],
};

const props = defineProps<Props>();

const { t } = useI18n();

const columns: QTableColumn[] = [
  {
    name: 'name',
    required: true,
    label: t('fund.name'),
    align: 'left',
    field: 'name',
    sortable: true
  },
  {
    name: 'ter',
    label: 'TER',
    field: 'ter',
    sortable: true
  },
  {
    name: 'per',
    label: 'PER',
    field: 'per',
    sortable: true
  },
  {
    name: 'sharpe',
    label: 'Sharpe',
    field: 'sharpe',
    sortable: true
  },
];

const pagination = {
  rowsPerPage: 10
};
</script>

<style lang="scss">
.fund-table {
  max-height: 85vh;

  .q-table__top {
    padding-bottom: 4px;
  }

  /* Sticky header & first column */

  td:first-child {
    /* bg color is important for td */
    background-color: white !important;
  }

  tr th {
    position: sticky;
    /* higher than z-index for td below */
    z-index: 2;
    /* bg color is important */
    background: white;
  }

  thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px;
    /* highest z-index */
    z-index: 3;
  }

  thead tr:first-child th {
    top: 0;
    z-index: 1;
  }

  tr:first-child th:first-child {
    /* highest z-index */
    z-index: 3;
  }

  td:first-child {
    z-index: 1;
  }

  td:first-child, th:first-child {
    position: sticky;
    left: 0;
  }
}
</style>
