var Layout = (resolve) => require(['@/components/Layout/index.vue'], resolve)
export default [{
    path: '/analysis',
    component: Layout,
    name: 'analysis',
    children: [
        {
            path: '/analysis/index',
            component: (resolve) => require(['@/components/pages/analysis/index/index'], resolve),
            name: 'analysisIndex',
            },

     ]
}]
