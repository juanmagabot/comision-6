export class ToDoListPage {

    constructor() {
        this.taskInput = '#task';
        this.sendTaskButton = '#sendTask';
    };

    escribirTarea(tarea) {
        cy.get(this.taskInput).type(tarea);
    };

    clickSendButon() {
        cy.get(this.sendTaskButton).click();
    };

    retornarTarea(tarea) {
        return cy.contains(tarea);
    };
};