import UsersList from './components/UsersList.js'
import UserForm from './components/UserForm.js'

const app = new Vue({
    el: '#app',
    components: {
        UsersList,
        UserForm,
    },
    data() {
        return {
            currentPage: 'users-list'
        }
    },
    methods: {
        goToPage(page) {
            this.currentPage = page;
        }
    }

})