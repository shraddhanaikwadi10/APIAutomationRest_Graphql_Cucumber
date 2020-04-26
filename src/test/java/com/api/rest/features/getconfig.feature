#Author: Shraddha
Feature: GET: Get Config
  Description: GET: purpose of this feature is to get configuration.

  @get
  Scenario Outline: GET: Test the Get Config Service
    Given I want to set URL for GetConfig Service of test case "<TestName>"
    When I set header as content type only
    When I hit the API with the request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the auth provider value with DB

    Examples: 
      | TestName        |RequestMethod | StatusCode |
      | LTC-01          |      GET    |        200 |
