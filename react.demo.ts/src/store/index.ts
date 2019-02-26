import { RouterStore } from 'mobx-react-router';
import NavBarStatusStore from './NavBarStatusStore';

export {
    NavBarStatusStore
}

export const routingStore = new RouterStore();
export const navBarStatusStore = new NavBarStatusStore(routingStore);