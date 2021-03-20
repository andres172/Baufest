Feature: PetServices

  @AddPet @SmokeTest
  Scenario Outline: Add Pet
    Given User add a new pet with <name> and <id> and <status>
    When User gets a existent pet by id <id>
    Then User verify pets detail has the <name> and <status> as expected
    Examples:
      |name    |id    |status|
      |phanton  |518   |available|


  @UpdatePet @SmokeTest
  Scenario Outline: Update Pet Information
    Given User add a new pet with <name> and <id> and <status>
    When User updates pets information <newName> and <newStatus> and <id>
    When User gets a existent pet by id <id>
    Then User verify pets detail has the <newName> and <newStatus> as expected
    Examples:
      |name        |id    |status     |newName   |newStatus|
      |dogi        |9655  |available  |catman     |sold     |
