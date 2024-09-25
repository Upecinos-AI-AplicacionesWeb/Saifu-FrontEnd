<script>
import ToolbarComponent from "../../shared/components/toolbar.component.vue";
import AddTransactionComponent from "./addTransaction.component.vue";
export default {
  name: 'RegistroDatos',
  components: {
    ToolbarComponent,
    AddTransactionComponent
  },
}
</script>

<template>
  <div>
    <ToolbarComponent/>
  </div>
  <div>
    <add-transaction-component/>
  </div>
</template>

<style scoped>

</style>