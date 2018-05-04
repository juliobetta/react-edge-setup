import { repeat } from '../support/utils';

const PLUS = '+';
const MINUS = '–';
const RESET = '#reset';
const COUNTER = '#counter';


describe('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('increments counter', () => {
    cy.contains(PLUS).click();
    cy.get(COUNTER).should('contain', '1');
  });

  describe('decrement', () => {
    it('decrements counter', () => {
      repeat(3, () => cy.contains(PLUS).click());
      cy.contains(MINUS).click();
      cy.get(COUNTER).should('contain', '2');
    });

    describe('when counter hits initialValue', () => {
      it('keeps the initialValue', () => {
        repeat(3, () => cy.contains(PLUS).click());
        repeat(10, () => cy.contains(MINUS).click());

        cy.get(COUNTER).should('contain', '0');
      });
    });
  });

  it('resets counter', () => {
    repeat(3, () => cy.contains(PLUS).click());
    cy.get(RESET).click();

    cy.get(COUNTER).should('contain', '0');
  });
});
