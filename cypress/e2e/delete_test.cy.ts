describe('delete test', () => {
  it('deletes task and checks if it is not in the list', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-cy="task"')
      .contains('test task')
      .trigger('mouseover')
      .get('[data-cy="task-delete-button"]')
      .click();

    cy.contains('test task').should('not.exist');
  });
});
