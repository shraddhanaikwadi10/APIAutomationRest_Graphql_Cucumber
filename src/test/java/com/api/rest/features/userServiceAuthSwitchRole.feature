#Author: Shraddha
Feature: POST: User Service Auth Switch Role
  Description: POST: The purpose of this feature is to test user is able to switch role.

 @post
  Scenario Outline: POST: User service Auth Switch Role 
    Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case "<TestName>" and "<RequestBody>" and "<RequestMethod>"
    When I set up the required headers
    When I run the API with requestbody "<RequestBody>" and request method is "<RequestMethod>" with roleID as RequestParam
    Then I try to verify the status code of the response "<StatusCode>"
    And I try to verify the response value of "token" is not null
   # And I try to verify the response node "authenticated" is "true"
  

    Examples: 
      | TestName  | RoleID      | RequestBody                       | RequestMethod | StatusCode |
      | LTC-06    |             | testdata/userServiceAuth_Req.json | POST          |        200 |
      
  @postfail
  Scenario Outline: POST: User Service Auth Switch Role with invalid roleId which is not the user roleID
    Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case "<TestName>" and "<RequestBody>" and "<RequestMethod>" and "<RoleID>"
    When I set up the required headers
    When I run the API with requestbody "<RequestBody>" and request method is "<RequestMethod>" with roleID as RequestParam
    Then I try to verify the status code of the response "<StatusCode>"
    
    Examples:
      | TestName  | URL            | RoleID | RequestBody                       | RequestMethod | StatusCode |
      | LTC-07    | /role/switch/  | 4      | testdata/userServiceAuth_Req.json | POST          |        403 |  
      
  @postfail
  Scenario Outline: POST: User service Auth Switch Role provide role in which user is already signed in with same role
    Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case "<TestName>" and "<RequestBody>" and "<RequestMethod>"
    When I set up the required headers
    When I run the API with requestbody "<RequestBody>" and request method is "<RequestMethod>" with roleID as RequestParam
    Then I try to verify the status code of the response "<StatusCode>"
    
    Examples: 
      | TestName  | URL            | ContentType      | RequestBody                       | RequestMethod | StatusCode |
      | LTC-08    | /role/switch/  | application/json | testdata/userServiceAuth_Req.json | POST          |        403 |
      
  @postfail
  Scenario Outline: POST: User service Auth Switch Role provide roleID and expired token in header
    Given I want to set URL for UserServiceAuthSwitchRole Service with expired token in header of test case "<TestName>" and "<RequestBody>" and "<RequestMethod>"
    When I set up the required headers
    When I run the API with requestbody "<RequestBody>" and request method is "<RequestMethod>" with roleID as RequestParam
    Then I try to verify the status code of the response "<StatusCode>"
    
    Examples: 
      | TestName  | URL            | RoleID | RequestBody                       | RequestMethod | StatusCode |
      | LTC-09    | /role/switch/2 | 1      | testdata/userServiceAuth_Req.json | POST          |        403 |
      
 @post
    Scenario Outline: POST: User service Auth Switch Role - Revert back the user role
    Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case "<TestName>" and "<RequestBody>" and "<RequestMethod>" and "<RoleID>"
    When I set up the required headers
    When I run the API with requestbody "<RequestBody>" and request method is "<RequestMethod>" with roleID as RequestParam
    Then I try to verify the status code of the response "<StatusCode>"
    And I try to verify the response value of "token" is not null
    
  

    Examples: 
      | TestName   | URL           | RoleID | RequestBody                       | RequestMethod | StatusCode |
      | LTC-010    | /role/switch/ | 1      | testdata/userServiceAuth_Req.json | POST          |        200 |