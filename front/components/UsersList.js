export default {
    name: 'UsersList',
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
                        {{ user.pib }}
                    </div>
                    <div>Паспорт: {{ user.passport_seria }} {{ user.passport_number}}</div>
                    <div>Номер телефону: {{user.phone_number}}</div>
                    <div class="user__rating">
                         {{ user.rating ?'надати' :'не надавати' }} кредит
                    </div>
                    <a :link="'/editUser/' + user.id">Редагувати</a>
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
        axios.get('http://localhost:8080/api/usersList')
            .then(({data: users}) => {
                this.users = users.map(user => ({...user, rating: Math.random() >= 0.5}));
            })
    },
    methods: {
        goToPage(path) {
            console.log(path)
      }
    }
}