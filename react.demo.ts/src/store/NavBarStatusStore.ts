import { computed } from 'mobx';
import { RouterStore } from 'mobx-react-router';

export default class NavBarStatusStore {
    routingStore: RouterStore;

    constructor(routingStore: RouterStore) {
        this.routingStore = routingStore;
    }

    @computed
    get currentRoute() {
        // 获取当前路由，路由数量多可能需要考虑优化
        const path = this.routingStore.location.pathname;
        const pathArr = path.split('/');
        return pathArr[pathArr.length - 1];
    }
}