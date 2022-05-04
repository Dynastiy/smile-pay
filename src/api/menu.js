const items = [{
        id: 1,
        menu_header: "Menu",
        sub_menu: [{
            id: 1,
            menu_item: "Dashboard",
            url: '/dashboard',
            icon: 'apps'
        }, ]
    },
    {
        id: 2,
        menu_header: "orders",
        sub_menu: [{
                id: 1,
                menu_item: "Pending",
                url: '/pending',
                icon: 'pending'
            },
            {
                id: 2,
                menu_item: "Completed",
                url: '/completed',
                icon: 'task_alt'
            },
            {
                id: 2,
                menu_item: "Cancelled",
                url: '/cancelled',
                icon: 'cancel'
            },
        ]

    },
    {
        id: 3,
        menu_header: "navigation",
        sub_menu: [{
                id: 1,
                menu_item: "Notifications",
                url: '/notifications',
                icon: 'notifications'
            },
            {
                id: 2,
                menu_item: "Logout",
                url: '/sign-in',
                icon: 'logout'
            },
        ]

    },

]

export default items;