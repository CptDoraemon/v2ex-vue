import MainContent from "./components/MainContent";
import VueRouter from "vue-router";

const routes = {
  root: '/',
  new: '/tab/new',
  popular: '/tab/popular'
};

const routerRoutes = [
  { path: '/', redirect: routes.new },
  { path: '/tab/:tab', component: MainContent }
];

const router = new VueRouter({
  routes: routerRoutes,
  mode: 'history',
  base: process.env.BASE_URL
});

export default routes
export {router}
