import * as React from 'react';
import { Menu } from 'antd';
import { RouterStore } from 'mobx-react-router';
import { inject, observer } from 'mobx-react';
import { MenuItemConfig } from 'src/utils/constants';
import { MenuProps, SelectParam } from 'antd/lib/menu';
import { NavBarStatusStore } from 'src/store';

const SubMenu = Menu.SubMenu;

interface NavBarProps {
    navBarStatusStore?: NavBarStatusStore;
    routingStore?: RouterStore;
    config: MenuItemConfig[];
    menuProps?: MenuProps;
    className?: string;
}

@inject('navBarStatusStore', 'routingStore')
@observer
export default class NavBar extends React.Component<NavBarProps> {
    render() {
        const { navBarStatusStore, config, menuProps, className } = this.props;

        return this.renderMenu(config, Object.assign({
            selectedKeys: [navBarStatusStore!.currentRoute],
            onSelect: this.onMenuSelect
        }, menuProps), className)
    }

    onMenuSelect = (params: SelectParam) => {
        const routingStore = this.props.routingStore!;
        routingStore.push(params.key);
    }

    // Menu渲染函数
    renderMenu(menuConfig: MenuItemConfig[], menuProps?: MenuProps, className?: string) {
        return <Menu className={className} {...menuProps} onClick={({ item, key, keyPath }) => {
            console.log(item, key, keyPath)
        }}>
            {menuConfig.map(c => {
                return !c.children || c.children.length === 0 ?
                    <Menu.Item key={c.key}>{c.title}</Menu.Item>
                    : <SubMenu key={c.key} title={c.title}>
                        {this.renderMenu(c.children!)}
                    </SubMenu>
            })}
        </Menu>
    }
}