import { createRouter, createWebHistory } from "vue-router";
import PrincipalPage from "../components/Principal.vue";
import RestauranteForm from "../components/Restaurantes.vue";
import HelloWorld from "../components/HelloWorld.vue"; // Asegúrate de que esta ruta sea correcta

const routes = [
  {
    path: "/",
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
