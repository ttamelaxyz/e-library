import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";
import Likes from "@/views/Likes.vue";
import AddBookPage from "@/views/AddBookPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/checkout",
      component: CheckoutPage,
    },
    {
      path: "/likes",
      component: Likes,
    },
    {
      path: "/addbook",
      component: AddBookPage,
    },
  ],
});

export default router;
