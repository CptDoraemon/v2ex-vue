import VueRouter from "vue-router";
import PostList from "./components/PostList";
import AboutPage from "./components/AboutPage";

const routes = {
  root: '/',
  new: '/tab/new',
  popular: '/tab/popular',
  about: '/about',
};

const routerRoutes = [
  { path: '/', redirect: routes.new },
  {
    path: '/tab/:tab',
    component: PostList,
    props: route => ({
      tab: route.params.tab
    })
  },
  { path: '/about', component: AboutPage }
];

const router = new VueRouter({
  routes: routerRoutes,
  mode: 'history',
  base: process.env.BASE_URL
});

export default routes
export {router}
