describe('create test', () => {
  it('creates task and checks if it is in the list', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-cy="create-task-title"]').type('test task');
    cy.get('[data-cy="create-task-description"]').type(
      'test description which is quite long'
    );
    cy.get('[data-cy="create-task-button"]').click();

    cy.contains('test task');
    cy.contains('test description which is quite long');
  });
});
