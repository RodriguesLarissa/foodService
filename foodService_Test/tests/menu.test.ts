import { homepage } from "../pages/home";
import { menu } from "../pages/menu";

fixture`Menu Tests`
    .page("http://localhost:4200/")
    .beforeEach(async t =>{
        await t 
            .maximizeWindow()
    });

test('Add food to menu', async t => {
    await t
    .click(homepage.optionsNavBar.withText("Cardápio"))
    .click(menu.btn_add)
    .typeText(menu.addMenu.input_name, "Insta Salada")
    .typeText(menu.addMenu.input_price, "R$17,90")
    .click(menu.addMenu.select_category.withText("Lanches"))
    .typeText(menu.addMenu.input_imageUrl, "https://scontent.fcgh17-1.fna.fbcdn.net/v/t1.6435-9/187519747_118148880422935_255104385451283431_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=8bfeb9&_nc_ohc=dSUD3wdIMnMAX9FAEDB&_nc_ht=scontent.fcgh17-1.fna&oh=6f1468ac2d2c0287dc7a94896a1edf16&oe=613B8FC9")
    .typeText(menu.addMenu.input_foodDetails, "Pão brioche, maionese verde, blend 120gr., queijo prato, alface, tomate, cebola roxa e picles.")
    .click(menu.addMenu.btn_save)
    .click(menu.menuCategories.withText("Lanches"))
    .expect(menu.menuCategory.foodTitle.withText("Insta Salada").exists).ok()
    .expect(menu.menuCategory.foodPrice.withText("R$17,90").exists).ok();
});

test('Edit food of the menu', async t => {
    await t
    .click(homepage.optionsNavBar.withText("Cardápio"))
    .click(menu.menuCategories.withText("Lanches"))
    .click(menu.menuCategory.btn_edit)
    .typeText(menu.editMenu.input_name, "Insta Burguer", {replace: true})
    .typeText(menu.editMenu.input_price, "R$24,00", {replace: true})
    .click(menu.editMenu.btn_save)
    .click(menu.menuCategories.withText("Lanches"))
    .expect(menu.menuCategory.foodTitle.withText("Insta Burguer").exists).ok()
    .expect(menu.menuCategory.foodPrice.withText("R$24,00").exists).ok();
});

test('Delete food of the menu', async t => {
    await t
    .click(homepage.optionsNavBar.withText("Cardápio"))
    .click(menu.menuCategories.withText("Lanches"))
    .click(menu.menuCategory.btn_delete)
    .click(menu.deleteModal.btn_confirmDelete)
    .click(menu.menuCategories.withText("Lanches"))
    .expect(menu.menuCategory.foodTitle.withText("Insta Salada").exists).notOk()
    .expect(menu.menuCategory.foodPrice.withText("R$17,90").exists).notOk();
});