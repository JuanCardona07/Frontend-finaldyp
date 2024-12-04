import { createRouter, createWebHistory } from "vue-router";
import PerfilUser from "../components/PerfilUser.vue";
import RegistroUser from "../components/RegistroUser.vue";
import PrincipalPage from "../components/Principal.vue";
import RestauranteForm from "../components/Restaurantes.vue";
import HelloWorld from "../components/HelloWorld.vue"; 


const routes = [
  {
    path: "/",
    name: "PerfilUser",
    component: PerfilUser,
  },
  {
    path: "/RegistroUser",
    name: "RegistroUser",
    component: RegistroUser,
  },
  {
    path: "/Principal",
    name: "Principal",
    component: PrincipalPage,
  },
  {
    path: "/Restaurantes",
    name: "Restaurantes",
    component: RestauranteForm,
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
