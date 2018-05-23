export default {
    template: `
        <div class="user-form">
            <h2 class="uk-heading-divider">
                Анкета позичальників
            </h2>
            <form class="uk-form-stacked">
                <fieldset class="uk-fieldset">
            
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Ідентифікаційний код</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="Ідентифікаційний код">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Серія паспорту</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="Серія паспорту">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">№ паспорту</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="№ паспорту">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">ПІБ</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="ПІБ">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Адреса</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="Адреса">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Домашній телефон</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="Домашній телефон">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Мобільний телефон</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="Мобільний телефон">
                        </div>
                    </div>
            
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Код віку</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>            
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Код майнового статусу</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>            
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Код освіти</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>            
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Код доходів</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>            
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Код оцінки</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>
                    <button class="uk-button uk-button-primary">
                        Підтвердити    
                    </button>
                </fieldset>
            </form>
        </div>
    `,
    data() {
        return {

        }
    }
}