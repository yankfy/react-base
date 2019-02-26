export interface MenuItemConfig {
    title: string;
    key: string;
    to?: string;
    children?: MenuItemConfig[];
}

export const TABBARCONFIG: MenuItemConfig[] = [
    {
        title: '主页',
        key: 'setupHome',
        to: 'setupHome'
    },
    {
        title: '对象管理器',
        key: 'objectManager',
        to: 'objectManager'
    }
]

export const SETUPHOMEMENUCONFIG: MenuItemConfig[] = [
    {
        title:'主页',
        key:'setupHome',
        to:'setupHome'
    },
    {
        title: '对象和字段',
        key: 'objectAndFields',
        children: [
            {
                title: '对象管理器',
                key: 'objectManager',
                to: 'objectManager'
            },
            {
                title: '选项列表值集',
                key: 'pickList',
                to: 'pickList'
            }
        ]
    },
    {
        title: 'Others',
        key: 'others',
        children: [
            {
                title: 'child1',
                key: 'child1',
                to:'child1'
            },
            {
                title: 'child2',
                key: 'child2',
                to:'child2'
            }
        ]
    }
]