#Author: Shraddha
Feature: POST: User Service Authentication
  Description: POST: The purpose of this feature is to test service authentication.

  @post
  Scenario Outline: POST: User service Authentication
    Given I want to set URL for UserServiceAuth Service of test case "<TestName>"
    When I set the required headers
    When I run the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code in response is "<StatusCode>"
    And I try to verify the response value "token" is not null
    And I try to verify the response value "authenticated" is "true"
  

    Examples: 
      | TestName  | URL           | ContentType      | RequestBody                       | RequestMethod | StatusCode |
      | LTC-02    | /authenticate | application/json | testdata/userServiceAuth_Req.json | POST          |        200 |
      
  @postfail
  Scenario Outline: POST: User Service Auth with invalid username
    Given I want to set URL for UserServiceAuth Service of test case "<TestName>"
    When I set the required headers
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>" and invalid username in header is "<Username>"
    Then I try to verify the status code in response is "<StatusCode>"
    #And I try to verify error message in response
    
    Examples:
      | TestName  | URL           | ContentType      | RequestBody                       | RequestMethod | StatusCode | Username |
      | LTC-03    | /authenticate | application/json | testdata/userServiceAuth_Req.json | POST          |        401 |  Emil    |
      
  @postfail
  Scenario Outline: POST: User Service Auth with Invalid Password
    Given I want to set URL for UserServiceAuth Service of test case "<TestName>"
    When I set the required headers
    When I hit the API with invalid password in requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code in response is "<StatusCode>"
    
    Examples:
      | TestName  | URL           | ContentType      | RequestBody                                 | RequestMethod | StatusCode | 
      | LTC-04    | /authenticate | application/json | testdata/userServiceAuth_InvalidPwdReq.json | POST          |        401 |
      
   @postfail
  Scenario Outline: POST: User Service Auth with Invalid Tenant ID having valid credentials
    Given I want to set URL for UserServiceAuth Service of test case "<TestName>"
    When I set the required headers
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>" and invalid tenantId in header is "<TenantId>"
    Then I try to verify the status code in response is "<StatusCode>"
    
    Examples:
      | TestName  | URL           | ContentType      | RequestBody                       | RequestMethod | StatusCode | TenantId |
      | LTC-05    | /authenticate | application/json | testdata/userServiceAuth_Req.json | POST          |        401 |  gce     |
      
 

 