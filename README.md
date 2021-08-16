# Food Service
Food Service is a web system for restaurant management.

# How to run
## Front-end
Run `ng serve` inside the "foodService" folder at foodService_FrontEnd. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Back-end
To execute Spring-boot Application, run the following code at foodService_BackEnd:

`./gradlew bootRun`

## Tests
Run the tests with the following command at foodService_Test:

`testcafe chrome tests/clients.test.ts`

`testcafe chrome tests/menu.test.ts`

Results:
![Saida](/images/ClientsTests.png)
![Saida](/images/MenuTests.png)

# Example Usage

## Client Tab Example
Access `http://localhost:4200/` to enter at the homepage, then click on `Clientes` to access the client list.

This page will bring the list of all clients saved in data base.

### Add Client
To add an new client to the list, click on the add user icon. 

![Saida](/images/addButton.png)

In sequence, fill in all the fields of the form (Only the complement field is optional).

Click on `Salvar` to finish the operation. The user should appears at the client list.

### Edit Client
In the row of the user you want to edit, click at the edit icon to proceed.

![Saida](/images/editOption.png)

Fill in the informations that you want to edit and click on `Salvar` to finish the operation. The user should appears at the client list with updated information.

### Delete Client
To delete an user, click on the delete icon in the chosen customer's row.

![Saida](/images/deleteOption.png)

A modal will open to confirm if you want to delete the chosen client. Click on `Sim` to proceed or `Não` to cancel the operation.

The user should not appears at the client list.

### Informations of the Client
To view all information for a particular customer, click on the information icon in the chosen customer's row.

![Saida](/images/infoOption.png)

A modal will open with all the information entered for this customer.