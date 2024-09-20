import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';

import Checkbox from "primevue/checkbox";
import Toast from "primevue/toast";
import Button from "primevue/button";
import Card from "primevue/card";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import FloatLabel from "primevue/floatlabel";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Rating from "primevue/rating";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import Toolbar from "primevue/toolbar";
import DataView from "primevue/dataview";
import Paginator from "primevue/paginator";
import Column from "primevue/column";

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import router from './router/index.js';

const app = createApp(App);

app.use(PrimeVue, { ripple: true, theme: { preset: Aura, options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        } } });

app.component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-dropdown', Dropdown)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv.input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-tag', Tag)
    .component('pv.textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .component('pv-data-view', DataView)
    .component('pv-paginator', Paginator)
    .component('pv-column', Column)
    .component('pv-data-table',DataTable)
    .use(router)

app.mount('#app')