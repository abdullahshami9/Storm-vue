import SfDashboard  from './components/SfDashboard.vue'
import SfLogin from './components/SfLogin.vue'
import SFHeader from './components/SFHeader.vue'
import SFForgetPassword from './components/SFForgetPassword.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes=[{
    name:'Dashboard',
    component:SfDashboard,
    path:'/'
},
{
    name:'Login',
    component:SfLogin,
    path:'/login'
},
{
    name:'SFForgetPassword',
    component:SFForgetPassword,
    path:'/forgetpassword'
},
{
    name:'sfheader',
    component:SFHeader,
    path:'/header'
}
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router