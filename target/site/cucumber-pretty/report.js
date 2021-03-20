$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PetServices.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Update Pet Information",
  "description": "",
  "id": "login;update-pet-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@UpdatePet"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User add a new pet with \u003cname\u003e and \u003cid\u003e and \u003cstatus\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User updates pets information \u003cnewName\u003e and \u003cnewStatus\u003e and \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User gets a existent pet by id \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User verify pets detail has the \u003cnewName\u003e and \u003cnewStatus\u003e as expected",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;update-pet-information;",
  "rows": [
    {
      "cells": [
        "name",
        "id",
        "status",
        "newName",
        "newStatus"
      ],
      "line": 20,
      "id": "login;update-pet-information;;1"
    },
    {
      "cells": [
        "dogi",
        "9655",
        "available",
        "catman",
        "sold"
      ],
      "line": 21,
      "id": "login;update-pet-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Update Pet Information",
  "description": "",
  "id": "login;update-pet-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@UpdatePet"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User add a new pet with dogi and 9655 and available",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User updates pets information catman and sold and 9655",
  "matchedColumns": [
    1,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User gets a existent pet by id 9655",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User verify pets detail has the catman and sold as expected",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dogi",
      "offset": 24
    },
    {
      "val": "9655",
      "offset": 33
    },
    {
      "val": "available",
      "offset": 42
    }
  ],
  "location": "PetServicesStep.userAddNewPet(String,int,String)"
});
formatter.result({
  "duration": 11842831400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catman",
      "offset": 30
    },
    {
      "val": "sold",
      "offset": 41
    },
    {
      "val": "9655",
      "offset": 50
    }
  ],
  "location": "PetServicesStep.UpdatePetInformation(String,String,String)"
});
formatter.result({
  "duration": 1264477700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9655",
      "offset": 31
    }
  ],
  "location": "PetServicesStep.getExistentPet(int)"
});
formatter.result({
  "duration": 3134781000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "catman",
      "offset": 32
    },
    {
      "val": "sold",
      "offset": 43
    }
  ],
  "location": "PetServicesStep.UserVerifyPetsDetailIsAsExpected(String,String)"
});
formatter.result({
  "duration": 21850834500,
  "status": "passed"
});
});