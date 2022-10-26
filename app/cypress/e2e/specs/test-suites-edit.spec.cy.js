import data from "../../../api/data.json";

describe('Edit Test Suites', () => {
  const testSuite = data[0];
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    const parent = cy.contains(testSuite.test_suite_name).parent();
    parent.contains("Edit").click();
  });

  it('Visits the edit page', () => {
    cy.contains(`Edit Test Suite: ${testSuite.test_suite_name}`);
  })

  it('Deletes a test plan', () => {
    const parent = cy.contains(`${testSuite.test_plans[0].test_name}`).parent();
    parent.contains('Delete').click();
    cy.contains(`${testSuite.test_plans[0].test_name}`).should('not.exist');
  })

  it('Adds a new plan', () => {
    cy.contains("+ Add Test Plan").click();
    cy.get('[name="test_name"]').clear().type("Cypress Added Test");
    cy.get('[name="instruction_count"]').clear().type("2");
    cy.get('[name="browser"]').select("safari");
    cy.get('#save-btn').click();
    cy.contains("Cypress Added Test");
  })

  it('Edits an existing plan', () => {
    const parent = cy.contains(`${testSuite.test_plans[0].test_name}`).parent();
    parent.contains('Edit').click();
    cy.get('[name="test_name"]').clear().type("Cypress Edited Test");
    cy.get('#save-btn').click();
    cy.contains("Cypress Edited Test");
  })

  it('Showcases an error when trying to insert a test plan with an empty name', () => {
    const parent = cy.contains(`${testSuite.test_plans[0].test_name}`).parent();
    parent.contains('Edit').click();
    cy.get('[name="test_name"]').clear();
    cy.get('#save-btn').click();
    cy.contains('- Name is a required field.')
  })

  it('Showcases an error when trying to insert a test plan with count 0', () => {
    const parent = cy.contains(`${testSuite.test_plans[0].test_name}`).parent();
    parent.contains('Edit').click();
    cy.get('[name="instruction_count"]').clear().type("0");
    cy.get('#save-btn').click();
    cy.contains('- Instruction Count should be 1 or more.')
  })

  it('Changes a test suite name', () => {
    cy.get('[name="test_suite_name"]').clear().type("Cypress Edited Test Suite");
    cy.get('#save-btn').click();
    cy.contains('Edited and added result to console');
  })

  it('Shows an error when trying to submit a test suite name empty', () => {
    cy.get('[name="test_suite_name"]').clear();
    cy.get('#save-btn').click();
    cy.contains('- Name is a required field.')
  })
});