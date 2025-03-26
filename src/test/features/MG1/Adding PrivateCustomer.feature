
Feature: Adding a new customer

Scenario: Filling in customer form
  Given I click at new customer
  When I fill in private customer form 
  Then I save the changes