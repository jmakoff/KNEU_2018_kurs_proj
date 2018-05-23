export default {
    name: 'Settings',
    template: `
        <div class="settings">
            <h2 class="uk-heading-divider">
                Налаштування
            </h2>
            <div class="settings-block">
                <h4>
                    Довідник освіти
                </h4>
                <table class="uk-table uk-table-striped uk-table-small">
                    <thead>
                        <tr>
                            <th>Код освіти</th>
                            <th>Назва освіти</th>
                            <th>Бал освіти</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(education, index) in educations">
                            <td>
                                <span v-if="editRow != index">{{education.id}}</span>
                                <input 
                                    v-else
                                    v-model="education.id" 
                                    class="uk-input" 
                                    type="text"
                                >
                            </td>
                            <td>
                                <span v-if="editRow != index">{{education.name}}</span>
                                <input 
                                    v-else
                                    v-model="education.name" 
                                    class="uk-input" 
                                    type="text"
                                >
                            </td>
                            <td>
                                <span v-if="editRow != index">{{education.rating}}</span>
                                <input 
                                    v-else
                                    v-model="education.rating" 
                                    class="uk-input" 
                                    type="text"
                                >
                            </td>
                            <td>
                                <div class="uk-button-group" style="height: 25px">
                                    <template v-if="editRow == index">
                                        <a class="uk-button uk-button-default uk-button-small">
                                            <span uk-icon="check"></span>
                                        </a>
                                        <a 
                                            @click.prevent="editRow = null"
                                            class="uk-button uk-button-default uk-button-small"
                                        >
                                            <span uk-icon="close"></span>
                                        </a>
                                    </template>
                                    <template v-else>
                                        <a 
                                            @click.prevent="editRow = index"
                                            class="uk-button uk-button-default uk-button-small"
                                        >
                                            <span uk-icon="pencil"></span>
                                        </a>
                                        <a class="uk-button uk-button-default uk-button-small">
                                            <span uk-icon="trash"></span>
                                        </a>
                                    </template>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    data() {
        return {
            editRow: null,
            educations: [
                {
                    id: 1,
                    name: 'Test name4',
                    rating: 5,
                },
                {
                    id: 1,
                    name: 'Test name3',
                    rating: 5,
                },
                {
                    id: 1,
                    name: 'Test name2',
                    rating: 5,
                },
                {
                    id: 1,
                    name: 'Test name1',
                    rating: 5,
                },
                {
                    id: 1,
                    name: 'Test name5',
                    rating: 5,
                }
            ]
        }
    }
}