var Layout = (resolve) => require(['@/components/Layout/index.vue'], resolve)
export default [{
    path: '/aboutMe',
    component: Layout,
    name: 'aboutMe',
    children: [
        {
            path: '/aboutMe/index',
            component: (resolve) => require(['@/components/pages/aboutMe/index/index'], resolve),
            name: 'aboutMeIndex',
            },

     ]
}]
