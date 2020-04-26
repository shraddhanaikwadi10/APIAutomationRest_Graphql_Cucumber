#Author: Shraddha
Feature: POST: GraphQL API of Films data
  Description: POST: The purpose of this feature is to test graphQL API working fine with valid query payload.

  @post
  Scenario Outline: POST: GraphQL API of Films data
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the response value "title" is "A New Hope"
  #  And I try to verify the response value "episodeID" is "4"
   

    Examples: 
      | TestName  | URL                     | ContentType      | RequestBody           | RequestMethod | StatusCode |
      |  test1    | https://swapi.apis.guru | application/json | testdata/test.graphql | POST          |        200 |
