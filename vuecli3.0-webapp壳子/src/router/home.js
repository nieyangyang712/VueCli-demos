var Layout = (resolve) => require(['@/components/Layout/index.vue'], resolve)
export default [
    {
        path: '/',
        redirect: '/home/index', //设置默认指向的路径
        name: '主页'
    },
    {
        path: '/login',
        name: 'login',
        component: (resolve) => require(['@/components/login/index.vue'], resolve),
        meta: {
            name: '登陆',
            menuShow: false
        }
        },
    {
        path: '/home',
        name: 'home',
        component: Layout,
        meta: {
            name: '首页',
            menuShow: true
        },
        //        redirect: '/index',
        children: [
            {
                path: '/home/index',
                component: (resolve) => require(['@/components/pages/home/index'], resolve),
                name: 'homeIndex',
                meta: {
                    menuShow: true,
                    name: '首页',
                    role: 'user'
                }
            },
            ]
        },
    {
        path: '/notfound',
        component: Layout,
        name: 'notfound',
        redirect: '/notfound/index',
        meta: {
            menuShow: true,
            name: '报错',
            role: 'user'
        },
        children: [{
                path: 'index',
                component: (resolve) => require(['@/components/NotFound'], resolve),
                name: 'notfoundindex',
                meta: {
                    menuShow: true,
                    role: 'user'
                }
            },
                  ],


    },

    {
        path: '/error',
        component: (resolve) => require(['@/components/Error'], resolve),
        name: 'error',
        redirect: '/error/index',
        meta: {
            menuShow: true,
            name: '报错',
            role: 'user'
        },
        children: [{
                path: 'index',
                component: (resolve) => require(['@/components/Error'], resolve),
                name: 'errorindex',
                meta: {
                    menuShow: true,
                    role: 'user'
                }
      },
      ],

    },
]
