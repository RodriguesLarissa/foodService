import { Selector } from 'testcafe';

class Menu{
    menuCategory = new MenuCategory(); 
    addMenu = new MenuForm(); 
    editMenu = new MenuForm(); 
    deleteModal = new DeleteModal();

    btn_add: Selector;
    menuCategories: Selector;

    constructor(){
        this.btn_add = Selector('a[class*="btn-dark"]').withText("Adicionar");
        this.menuCategories = Selector('h2[class="menu-subtitle"]');
    }
}

class MenuCategory{
    
    foodTitle: Selector;
    foodPrice: Selector;
    btn_delete: Selector;
    btn_edit: Selector;

    constructor(){
        this.foodTitle = Selector('h3[class="menu-title"]');
        this.foodPrice = Selector('div[class="menu-price"]')
            .child("h3");   
        this.btn_delete = Selector('a[id="7"]').withText("Deletar ").filterVisible();
        this.btn_edit = Selector('a[id="7"]').withText("Editar ").filterVisible();
    }
}

class MenuForm{

    input_name: Selector;
    input_price: Selector;
    select_category: Selector;
    input_imageUrl: Selector;
    input_foodDetails: Selector;
    btn_save: Selector;

    constructor(){
        this.input_name = Selector('input[name="foodName"]');
        this.input_price = Selector('input[name="price"]');
        this.select_category = Selector('div[class="form-check"]')
            .child("label");   
        this.input_imageUrl = Selector('input[name="imageUrl"]');
        this.input_foodDetails = Selector('textarea[name="foodDetails"]');
        this.btn_save = Selector('button[class*="btn-warning"]');
    }
}

class DeleteModal{
    btn_confirmDelete: Selector;

    constructor(){
        this.btn_confirmDelete = Selector('button[class*="btn-danger"]')
    }
}

export const menu = new Menu(); 
