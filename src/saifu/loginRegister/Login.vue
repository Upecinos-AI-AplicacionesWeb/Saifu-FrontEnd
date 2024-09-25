<script>
import ToolbarComponent from "../../shared/components/toolbar.component.vue";
import LoginComponent from "./login.component.vue";

export default {
  name: 'Login',
  components: {
    LoginComponent,
    ToolbarComponent

  },
}
</script>

<template>
  <div>
    <ToolbarComponent/>
  </div>
  <div>
    <LoginComponent/>
  </div>
</template>

<style scoped>

</style>
