
Feature: Leila1 Landing page

  Given I navigate to Leila1 login page
  When I fill in the login form with valid credentials
  When I submit the login form
  Then I should see the Leila1 menu
  Given I click on the Autohaus Management folder
  When I click on Helferli file
  When I click on Navigation menu
  Then I should be transferred to Search Menu
  Then I should wait
