// 导入VUE
import Vue from "vue"
// 导入路由
import VueRouter from "vue-router"
// 使用路由
Vue.use(VueRouter)


// 编写路由
const router = new VueRouter({
    routes: [
        // {
        //     path : "/",
        //     component : ()=>import("../pages/Login/Login.vue"),
        //     meta : ["login"]
        // },
        // {
        //     path : "/manage",
        //     component : ()=>import("../pages/Layout/Layout.vue"),
        //     meta : ["manage"]
        // },
    ]
})


// 导出路由
export default router