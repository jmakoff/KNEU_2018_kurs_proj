import UsersList from './components/UsersList.js';
import UserForm from './components/UserForm.js';
import Settings from './components/Settings.js';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'users-list',
            component: UsersList,
        },
        {
            path: '/user-form',
            name: 'user-form',
            component: UserForm,
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings,
        },
    ]
})