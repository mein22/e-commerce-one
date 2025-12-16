import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
// Layouts
import AuthLayout from "../Layouts/AuthLayout.vue";
import GeneralLayout from "../Layouts/GeneralLayout.vue";

// Views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import LoggedHome from "../views/LoggedHome.vue";
import WishList from "../views/WishList.vue";
import CartPage from "../views/CartPage.vue";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: { hideUserAvatar: true },
  },
  // AUTH PAGES
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
        meta: { hideHeaderIcons: true, hideDropdown: true },
      },
      {
        path: "signup",
        name: "Signup",
        component: Signup,
        meta: { hideHeaderIcons: true, hideDropdown: true },
      },
    ],
  },

  // Protected pages are here
  {
    path: "/",
    component: GeneralLayout,
    children: [
      { path: "about", name: "About", component: About },
      { path: "contact", name: "Contact", component: Contact },
      { path: "loggedhome", name: "LoggedHome", component: LoggedHome, meta: { requiresAuth: true }, },
      { path: "wishlist", name: "WishList", component: WishList, meta: { requiresAuth: true }, },
      { path: "cartpage", name: "Cartpage", component: CartPage, meta: { requiresAuth: true }, },
      {
        path: "/product/:id",
        name: "SingleProduct",
        component: () => import("../views/SingleProduct.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//router guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn;

  // If route requires auth and user is NOT logged in
  if (to.matched.some(route => route.meta.requiresAuth) && !isLoggedIn) {
    next("/auth/login");
  } 
  // Otherwise allow access
  else {
    next();
  }
});

export default router;
