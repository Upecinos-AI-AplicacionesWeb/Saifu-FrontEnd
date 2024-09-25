<script>
import Sidebar from "../../shared/components/sidebar.component.vue"; // Asegúrate de tener el componente Sidebar
import RegisterDataComponent from "./registerData.component.vue";
import ToolbarComponent from "../../shared/components/toolbar.component.vue";
export default {
  name: 'RegistroDatos',
  components: {
    Sidebar,
    RegisterDataComponent,
    ToolbarComponent
  },
}
</script>

<template>
  <div>
    <ToolbarComponent/>
    <RegisterDataComponent/>
  </div>
  <div>

  </div>
</template>

<style scoped>

</style>