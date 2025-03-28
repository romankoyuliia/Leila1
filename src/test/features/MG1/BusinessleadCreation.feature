 @runThis
Feature: The creation of the new business lead

Scenario: Lead creation_business,leasing
  Given I navigate to Leila1 login page
  When I fill in the login form with valid credentials
  When I submit the login form
  Then I should see the Leila1 menu
  Given I click on the Autohaus Management folder
  When I click on Helferli file
  When I click on Navigation menu
  Then I should be transferred to Search Menu
  Then I should wait
  Given I click on the Vorgang and insert ID
  When I proceed with producer, car model, fuel type, transmission selection 
  When I choose color
  Then I continue with lead processing as soon as it is created