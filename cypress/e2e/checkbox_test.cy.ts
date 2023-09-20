describe('checkbox test', () => {
  it('checks if checkbox click toggles completed value', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-cy="task"]').contains('test task').click();

    cy.get('[data-cy="task-checkbox-p"]')
      .parent()
      .then(($task) => {
        if ($task.find('img').length) {
          cy.get('[data-cy="task-checkbox-label"]')
            .click()
            .wait(2000)
            .parent()
            .find('img')
            .should('not.exist');
        } else {
          cy.get('[data-cy="task-checkbox-label"]')
            .click()
            .wait(2000)
            .parent()
            .find('img')
            .should('exist');
        }
      });
  });
});
