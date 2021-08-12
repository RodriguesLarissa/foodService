import { Selector } from 'testcafe';

class ClientsList{
    infoModal = new InfoModal(); 
    addClient = new ClientForm(); 
    editClient = new ClientForm(); 
    deleteModal = new DeleteModal();

    btn_add: Selector;
    clientName: Selector;
    btn_info: Selector;
    btn_edit: Selector;
    btn_delete: Selector;

    constructor(){
        this.btn_add = Selector('a[class*="btn-dark"]');
        this.clientName = Selector('td[id="name"]');
        this.btn_info = Selector('fa-icon[id="info6"]');
        this.btn_edit = Selector('fa-icon[id="edit6"]');
        this.btn_delete = Selector('fa-icon[id="delete6"]');
    }
}

class ClientForm{

    input_name: Selector;
    input_lastName: Selector;
    input_email: Selector;
    input_phone: Selector;
    input_birthday: Selector;
    input_cep: Selector;
    input_street: Selector;
    input_number: Selector;
    btn_save: Selector;

    constructor(){
        this.input_name = Selector('input[name="name"]');
        this.input_lastName = Selector('input[name="lastName"]'); 
        this.input_email = Selector('input[name="email"]');
        this.input_phone = Selector('input[name="phone"]');
        this.input_birthday = Selector('input[name="birthday"]');         
        this.input_cep = Selector('input[name="cep"]');
        this.input_street = Selector('input[name="street"]');
        this.input_number = Selector('input[name="number"]');
        this.btn_save = Selector('button[class*="btn-warning"]');
    }
}

class DeleteModal{
    btn_confirmDelete: Selector;

    constructor(){
        this.btn_confirmDelete = Selector('button[class*="btn-danger"]')
    }
}

class InfoModal{
    clientName: Selector;
    clientStreet: Selector;
    
    constructor(){
        this.clientName = Selector('td[id="name"]');
        this.clientStreet = Selector('td[id="street"]')
    }
}

export const clientList = new ClientsList(); 
