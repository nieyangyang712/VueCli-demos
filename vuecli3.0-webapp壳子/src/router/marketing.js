var Layout = (resolve) => require(['@/components/Layout/index.vue'], resolve)
export default [{
    path: '/marketing',
    component: Layout,
    name: 'marketing',
    children: [
        {
            path: '/marketing/index',
            component: (resolve) => require(['@/components/pages/marketing/index/index'], resolve),
            name: 'marketingIndex',
            },

     ]
}]
