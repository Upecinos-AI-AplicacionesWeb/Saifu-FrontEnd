<template>
  <div class="app-container">
    <ToolbarComponent/>
    <div>
      <RegisterTransactionComponent/>
    </div>
  </div>
</template>

<script>
import ToolbarComponent from "../../shared/components/toolbar.component.vue";
import RegisterTransactionComponent from "./registerTransaction.component.vue";
export default {
  name: 'RegistroTransaccion',
  components: {

    RegisterTransactionComponent,
    ToolbarComponent
  },

};
</script>

<style>
.app-container {
}






</style>
