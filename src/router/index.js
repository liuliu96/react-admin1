const Router=[
    {
        title: "控制台",
        icon: "index",
        key:"/index"        
    },
    {
        title: "用户管理",
        icon: "laptop",
        key: "/index/user",
        child: [
            {
                key: '/index/user/list',
                title: '用户列表',
                icon: " "
            },
            {
                key: '/index/user/add',
                title: '添加用户',
                icon: ' '
            },            
        ]
    },
    {
        title:'部门管理',
        key: "/index/department",
        icon: 'bar',
       child: [
            {
                key: '/index/department/list',
                title: '部门列表',
                icon: ' '
            },
            {
                key: '/index/department/add',
                title: '添加部门',
                icon: ''
            }
        ]
    },
    {
        title: '职位管理',
        icon: 'edit',
        key: '/index/entry',
       child: [
            {
                key: '/index/entry/form/basic-form',
                title: '职位列表',
                icon: ''
            },
            {
                key: '/index/entry/form/step-form',
                title: '添加职位',
                icon: ''
            }
        ]

    },
    {
        title: '请假',
        key: '/index/about1',
        icon: 'info-circle-o'        
    },
    {
        title: '加班',
        key: '/index/about',
        icon: 'info-circle-o'
    }
]
export default Router;