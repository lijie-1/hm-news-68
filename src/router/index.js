import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
// import Login from '../views/user/Login.vue'
// import Register from '../views/user/Register.vue'
// import User from '../views/user/User.vue'
// import UserEdit from '../views/user/UserEdit.vue'
// import Demo from '../views/user/Demo.vue'
// import MyFollow from '../views/user/MyFollow.vue'
// import MyComment from '../views/user/MyComment.vue'
// import MyStar from '../views/user/MyStar.vue'
// import Index from '../views/news/Index.vue'
// import Manage from '../views/news/Manage.vue'
// import PostDetail from '../views/news/PostDetail.vue'
// import Search from '../views/news/Search.vue'


const Login=()=> import(/* webpackChunkName:'user' */'../views/user/Login.vue')
const Register=()=> import( /* webpackChunkName:'user' */'../views/user/Register.vue')
const User=()=> import(/* webpackChunkName:'user' */ '../views/user/User.vue')
const UserEdit=()=> import(/* webpackChunkName:'user' */ '../views/user/UserEdit.vue')
const Demo=()=> import(/* webpackChunkName:'user' */ '../views/user/Demo.vue')
const MyFollow=()=> import(/* webpackChunkName:'user' */ '../views/user/MyFollow.vue')
const MyComment=()=> import(/* webpackChunkName:'user' */ '../views/user/MyComment.vue')
const MyStar=()=> import(/* webpackChunkName:'user' */ '../views/user/MyStar.vue')
const Index=()=> import(/* webpackChunkName:'index' */ '../views/news/Index.vue')
const Manage=()=> import(/* webpackChunkName:'news' */ '../views/news/Manage.vue')
const PostDetail=()=> import(/* webpackChunkName:'news' */ '../views/news/PostDetail.vue')
const Search=()=> import(/* webpackChunkName:'news' */ '../views/news/Search.vue')

Vue.use(VueRouter)

// 全局的把push的异常给处理了
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    { path: '/login', component: Login, name: 'login' },
    {
        path: '/register',
        component: Register,
        name: 'register'
            // beforeEnter(to, from, next) {
            //   console.log('路由独享的导航守卫')
            //   next()
            // }
    },
    { path: '/user', component: User, name: 'user' },
    {
        path: '/user-edit',
        component: UserEdit,
        name: 'user-edit'
    },
    {
        path: '/demo',
        component: Demo
    },
    {
        path: '/myfollow',
        component: MyFollow,
        name: 'myfollow'
    },
    {
        path: '/mycomment',
        component: MyComment,
        name: 'mycomment'
    },
    {
        path: '/mystar',
        component: MyStar,
        name: 'mystar'
    },
    {
        path: '/',
        component: Index,
        name: 'index'
    },
    {
        path: '/manage',
        component: Manage,
        name: 'Manage'
    },
    {
        path: '/post-detail/:id',
        component: PostDetail,
        name: 'post-detail'
    },
    {
        path: '/search',
        component: Search,
        name: 'search'
    }

]

const router = new VueRouter({
  routes
  // mode:'hash'
})
router.beforeEach(function(to, from, next) {
    const token = localStorage.getItem('token')
        // 需要拦截的所有的页面
    const authUrls = ['/user', '/user-edit', '/myfollow', '/mycomment', '/mystar']
    if (!authUrls.includes(to.path) || token) {
        next()
    } else {
        router.push('/login')
    }
})
export default router