import { createRouter, createWebHashHistory } from "vue-router";
import Test from "./components/pages/Test.vue";
import AboutTest from "./components/pages/AboutTest.vue";
import DetailTest from "./components/pages/DetailTest.vue";
import HomePage from "./components/pages/HomePage.vue";
import Result from "./components/pages/Result.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: '/', component: HomePage},
        { path: '/test', component: Test},
        { path: '/about', component: AboutTest},
        { path: '/detail', component: DetailTest},
        { path: '/result', component: Result},
    ]
})