@runThis
Feature: Leila1 Landing page

Scenario: Opening menu
  Given I navigate to Leila1 login page
  When I fill in the login form with valid credentials
  When I submit the login form
  Then I should see the Leila1 menu
  Given I click on the Autohaus Management folder
  When I click on Helferli file
  Then I should see Navigation menu
  When I click on Navigation menu
  Then I should be trasferred to Search Menu