import { Selector } from 'testcafe';

class MenuCategories{

    menuCategories: Selector;

    constructor(){
        this.menuCategories = Selector('h2[class="menu-subtitle"]');
    }
}

export default new MenuCategories(); 