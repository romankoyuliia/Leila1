@runThis
Feature: Leila1 Login Test

Scenario: Successful login
  Given I navigate to Leila1 login page
  When I fill in the login form with valid credentials
  When I submit the login form
  Then I should see the Leila1 menu