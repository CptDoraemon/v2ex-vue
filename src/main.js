import Vue from 'vue'
import App from './App.vue'
import { Layout, Menu, Icon } from 'ant-design-vue';
import VueRouter from "vue-router";
import {router} from "./routes";

Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Icon.name, Icon);

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
