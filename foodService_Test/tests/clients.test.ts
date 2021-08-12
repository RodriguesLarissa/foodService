import { clientList } from "../pages/clients";
import { homepage } from "../pages/home";

fixture`Clients Tests`
    .page("http://localhost:4200/");

test('Add client', async t => {
    await t
    .click(homepage.optionsNavBar.withText("Clientes"))
    .click(clientList.btn_add)
    .typeText(clientList.addClient.input_name, "Letícia")
    .typeText(clientList.addClient.input_lastName, "Redondaro")
    .typeText(clientList.addClient.input_email, "leticia@hotmail.com")
    .typeText(clientList.addClient.input_phone, "(11) 95632-8452")
    .typeText(clientList.addClient.input_birthday, "1999-01-16")
    .typeText(clientList.addClient.input_cep, "05426-200")
    .typeText(clientList.addClient.input_number, "16")
    .click(clientList.addClient.btn_save)
    .expect(clientList.clientName.withText("Letícia").exists).ok();
});

test('Check client info', async t => {
    await t
    .click(homepage.optionsNavBar.withText("Clientes"))
    .click(clientList.btn_info)
    .expect(clientList.infoModal.clientStreet.withText("Avenida Brigadeiro Faria Lima, 16").exists).ok()
    .expect(clientList.clientName.withText("Letícia").exists).ok();
});

test('Edit client', async t => {
    await t
    .click(homepage.optionsNavBar.withText("Clientes"))
    .click(clientList.btn_edit)
    .typeText(clientList.editClient.input_name, "Jeff", {replace: true})
    .typeText(clientList.editClient.input_lastName, "Silva", {replace: true})
    .click(clientList.editClient.btn_save)
    .expect(clientList.clientName.withText("Jeff").exists).ok();
});

test('Delete client', async t => {
    await t
    .click(homepage.optionsNavBar.withText("Clientes"))
    .click(clientList.btn_delete)
    .click(clientList.deleteModal.btn_confirmDelete)
    .expect(clientList.clientName.withText("Jeff").exists).notOk();
});