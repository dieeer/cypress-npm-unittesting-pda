describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // Do the number buttons update the display of the running total?

  it('should update the running total when pressing the number buttons', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '123456789')
  })

  // Do the arithmetical operations update the display with the result of the operation?

    it('should update the running total when pressing the arithematic buttons', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  });

  // Can multiple operations be chained together?

  it('should be able to chain multiple operations together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20')
  });

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

  it('should have the output expected for a range of numbers e.g. -/+, decimal, very large numbers', () => {
    // negative range test
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
    // positive range test
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
    // decimal test
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
    // large numbers
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', 'Infinity')
  });
  it('should return 0 when dividing by 0', () => {
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
  })



})