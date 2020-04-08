import { routes as auth } from '../modules/auth'

export default [
    ...auth,
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "about" */ "../pages/Home")
    } 
]