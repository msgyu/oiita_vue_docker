import Vue from "vue";
import VueRouter from "vue-router";
import Toppage from "./components/Toppage";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "root",
        component: Toppage
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});
export default router;
