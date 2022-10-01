import data from "../../../api/data.json";

describe('List Test Suites', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Visits the page', () => {
    cy.contains('Test Suites');
  })

  it('Shows the test suites', () => {
    data.forEach((testSuite) => {
      cy.contains(testSuite.test_suite_name);
    })
  });

  it('Shows the amount of tests each test suites have', () => {
    data.forEach((testSuite) => {
      const parent = cy.contains(testSuite.test_suite_name).parent();
      parent.contains(`${testSuite.test_plans.length} Tests`);
    })
  });

  it('Provides a edit link for every test suite', () => {
    data.forEach((testSuite) => {
      const parent = cy.contains(testSuite.test_suite_name).parent();
      parent.contains("Edit");
    })
  });

  it('Clicking on a test suite name should show its test plans and related info', () => {
    cy.contains(data[0].test_suite_name).click();
    data[0].test_plans.forEach((testPlan) => {
      let parent = cy.contains(testPlan.test_name).parent();
      parent.contains(testPlan.browser);
      parent = cy.contains(testPlan.test_name).parent();
      parent.contains(`${testPlan.instruction_count} Steps`);
    });
  });
});