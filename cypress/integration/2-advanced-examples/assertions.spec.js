/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('https://erm0es.github.io/Grupp-3/');
  });

  describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      // https://on.cypress.io/should
      cy.get('.all-challenges')
        /*  .find('tbody tr:last') */
        .should('have.text', 'Go to all challenges');
      /*     .find('td')
        .first() */
      // checking the text of the <td> element in various ways
      /*  .should('have.text', 'Column content')
        .should('contain', 'Column content')
        .should('have.html', 'Column content')
        // chai-jquery uses "is()" to check if element matches selector
        .should('match', 'td')
        // to match text content against a regular expression
        // first need to invoke jQuery method text()
        // and then match using regular expression
        .invoke('text')
        .should('match', /column content/i);

      // a better way to check element's text content against a regular expression
      // is to use "cy.contains"
      // https://on.cypress.io/contains
      cy.get('.assertion-table')
        .find('tbody tr:last')
        // finds first <td> element with text content matching regular expression
        .contains('td', /column content/i)
        .should('be.visible'); */

      // for more information about asserting element's text
      // see https://on.cypress.io/using-cypress-faq#How-do-I-get-an-element’s-text-contents
    });

    /*     it('.and() - chain multiple assertions together', () => {
      // https://on.cypress.io/and
      cy.get('.assertions-link')
        .should('have.class', 'active')
        .and('have.attr', 'href')
        .and('include', 'cypress.io');
    }); */
    /*   }) */
    /* 
  describe('Explicit Assertions', () => {
    // https://on.cypress.io/assertions
    it('expect - make an assertion about a specified subject', () => {
      // We can use Chai's BDD style assertions
      expect(true).to.be.true;
      const o = { foo: 'bar' };

      expect(o).to.equal(o);
      expect(o).to.deep.equal({ foo: 'bar' });
      // matching text using regular expression
      expect('FooBar').to.match(/bar$/i);
    });

    it('finds element by class name regex', () => {
      cy.get('.docs-header')
        .find('div')
        // .should(cb) callback function will be retried
        .should(($div) => {
          expect($div).to.have.length(1);

          const className = $div[0].className;

          expect(className).to.match(/heading-/);
        })
        // .then(cb) callback is not retried,
        // it either passes or fails
        .then(($div) => {
          expect($div, 'text content').to.have.text('Introduction');
        });
    }); */
    /* 
    it('can throw any error', () => {
      cy.get('.docs-header')
        .find('div')
        .should(($div) => {
          if ($div.length !== 1) {
            // you can throw your own errors
            throw new Error('Did not find 1 element');
          }

          const className = $div[0].className;

          if (!className.match(/heading-/)) {
            throw new Error(`Could not find class "heading-" in ${className}`);
          }
        });
    }); */
  });
});
