export default {
    template: `
        <div class="users-list">
            <h2 class="uk-heading-divider">
                Список позичальників
            </h2>
            <div v-cloak class="users">
                <div
                    v-for="user in users"
                    :class="'user '+(user.rating ?'rating-success' :'rating-unsuccess')"
                >
                    <div class="user__name">
                        {{ user.name }}
                    </div>
                    <div class="user__rating">
                         {{ user.rating ?'надати' :'не надавати' }} кредит
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            users: []
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data: users}) => {
                this.users = users.map(user => ({...user, rating: Math.random() >= 0.5}));
            })
    }
}