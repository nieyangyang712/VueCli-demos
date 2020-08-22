var Layout = (resolve) => require(['@/components/Layout/index.vue'], resolve)
export default [{
    path: '/service',
    component: Layout,
    name: 'service',
    children: [
        {
            path: '/service/index',
            component: (resolve) => require(['@/components/pages/service/index/index'], resolve),
            name: 'serviceIndex',
            },
     ]
}]
