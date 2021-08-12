import { Selector } from 'testcafe';

class Homepage{

    optionsNavBar: Selector;

    constructor(){
        this.optionsNavBar = Selector('ul[class*="navbar-nav"]')
            .child("li")
            .child("a");
    }
}

export const homepage = new Homepage(); 
