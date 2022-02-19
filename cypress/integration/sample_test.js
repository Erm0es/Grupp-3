describe('testing localhost', () => {
  it('tests localhost', () => {
    cy.visit('http://127.0.0.1:5502/index.html');
  });
});

describe('Implicit Assertions', () => {
  it('tests if .all-challenges have text "Go to all challenges"', () => {
    cy.visit('https://erm0es.github.io/Grupp-3/');
    cy.get('.all-challenges').should('have.text', 'Go to all challenges');
  });

  it('clicks on CTA "Go to all challenges"', () => {
    cy.visit('https://erm0es.github.io/Grupp-3/');
    cy.get('.all-challenges').click();
  });
});
