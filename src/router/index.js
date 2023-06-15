import { createRouter, createWebHistory } from 'vue-router'
import VueCookies from 'vue-cookies'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: '登录',
            component: () => import("@/views/Login.vue")
        },
        {
            path: "/",
            component: () => import("@/views/Framework.vue"),
        }
    ]
})

router.beforeEach((to, from, next) => {
    const userInfo = VueCookies.get("userInfo");
    if (to.meta.needLogin != null && to.meta.needLogin && userInfo == null) {
      router.push("/login");
    }
    next();
  })
  
export default router