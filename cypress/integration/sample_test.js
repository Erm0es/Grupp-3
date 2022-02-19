context('Assertions', () => {
  beforeEach(() => {
    cy.visit('https://erm0es.github.io/Grupp-3/');
  });

  describe('Implicit Assertions', () => {
    it('tests if .all-challenges have text "Go to all challenges"', () => {
      cy.get('.all-challenges').should('have.text', 'Go to all challenges');
    });

    it('clicks on CTA "Go to all challenges"', () => {
      cy.get('.all-challenges').click();
    });
  });
});
