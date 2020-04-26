package com.api.rest.stepdefinitions;

import java.util.logging.Logger;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.api.rest.commons.CommonUtilities;
import com.api.rest.utils.GetProperties;
import com.aventstack.extentreports.Status;
import com.cucumber.listener.Reporter;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserServiceAuthSwitchRole {
	private final static Logger logger = Logger.getLogger(UserServiceAuth.class.getName());
	public static String apiEndPointUri;
	public static String userServiceAuthURL;
	public static String authToken;
	
    String userName;
	String tenantID;
	String response;
	
	GetProperties properties=new GetProperties();;
    CommonUtilities commonUtilities=new CommonUtilities();
    
    public void setURLandHeadersForUserServiceAuth(){
    	String apiHostName = properties.getUserHostEnvironmentURL();
    	userServiceAuthURL = properties.userServiceAuthURL();
		commonUtilities.setEndpointURL(apiHostName, userServiceAuthURL, "");
		
    	commonUtilities.setHeaderAsContentTypeOnly(properties.getHeaderContentType());
		commonUtilities.setHeaderAsTenantId(properties.getHeaderTenantID());
		commonUtilities.setHeaderAsUsername(properties.getHeaderUserName());
		commonUtilities.setHeaderAsTransactionID(properties.getHeaderTransactionID());	
		
    }
    
    @Given("^I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void setEndpointURL( String testCaseName,String requestBodyPath, String requestMethod, String roleID) throws Throwable {
    	
    	Reporter.addStepLog(Status.INFO + " Get the User Auth Token from UserServiceAuth API");
    	setURLandHeadersForUserServiceAuth();
    	String responsePayload=commonUtilities.sendPostOrPutRequest(requestBodyPath, requestMethod, properties.getHeaderUserName(), properties.getHeaderTenantID());
    	
    
		JSONParser parser = new JSONParser();
		JSONObject responseObject = (JSONObject) parser.parse(responsePayload);
		logger.info("response body token: "+responsePayload);
		 authToken = "Bearer "+responseObject.get("token").toString();
    	//authToken=commonUtilities.getValueFromResponseKey("token");
    	logger.info("authTokenL :"+authToken);
    	
		String apiHostName = properties.getUserHostEnvironmentURL();
		apiEndPointUri = properties.userServiceAuthSwitchRoleURL()+roleID;
		
		commonUtilities.setEndpointURL(apiHostName, apiEndPointUri, testCaseName);
		
	}

    @Given("^I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
   	public void setEndpointURL( String testCaseName,String requestBodyPath, String requestMethod) throws Throwable {
       	
       	Reporter.addStepLog(Status.INFO + " Get the User Auth Token from UserServiceAuth API");
       	setURLandHeadersForUserServiceAuth();
       	String responsePayload=commonUtilities.sendPostOrPutRequest(requestBodyPath, requestMethod, properties.getHeaderUserName(), properties.getHeaderTenantID());
       	
       
   		JSONParser parser = new JSONParser();
   		JSONObject responseObject = (JSONObject) parser.parse(responsePayload);
   		logger.info("response body token: "+responsePayload);
   		 authToken = "Bearer "+responseObject.get("token").toString();
       	//authToken=commonUtilities.getValueFromResponseKey("token");
       	logger.info("authTokenL :"+authToken);
       	
   		String apiHostName = properties.getUserHostEnvironmentURL();
   		
   		apiEndPointUri = properties.userServiceAuthSwitchRoleURL()+properties.getRoleID();
   		
   	
   		commonUtilities.setEndpointURL(apiHostName, apiEndPointUri, testCaseName);
   		
   	}

    @Given("^I want to set URL for UserServiceAuthSwitchRole Service with expired token in header of test case \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
   	public void setEndpointURLWithExpiredToken( String testCaseName,String requestBodyPath, String requestMethod) throws Throwable {
       	
   		 authToken = "Bearer "+"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJFbWlseSIsImV4cCI6MTU5MzI0MjY3NSwidXNlciI6IntcInVzZXJpZFwiOlwiMVwiLFwidXNlcm5hbWVcIjpcIkVtaWx5XCIsXCJ0ZW5hbnRcIjpcImdjdVwiLFwicm9sZVwiOntcImlkXCI6XCIxXCIsXCJuYW1lXCI6XCJGYWN1bHR5XCIsXCJwcmlvcml0eVwiOjEsXCJwZXJtaXNzaW9uc1wiOlt7XCJpZFwiOlwiNFwiLFwibmFtZVwiOlwiUmVhZF9Vc2VyXCJ9XX19IiwiaWF0IjoxNTg0NjAyNjc1fQ.NHe2tY_zQjn6_0SZfYWbh52r_76J_rkZXGQR4hrbvek";
       	//authToken=commonUtilities.getValueFromResponseKey("token");
       	logger.info("authTokenL :"+authToken);
       	
   		String apiHostName = properties.getUserHostEnvironmentURL();
   		apiEndPointUri = properties.userServiceAuthSwitchRoleURL()+properties.getRoleID();
   		
   		commonUtilities.setEndpointURL(apiHostName, apiEndPointUri, testCaseName);
   		
   	}
    
	@When("^I set up the required headers$")
	public void setHeaders() {
		
		commonUtilities.setHeaderAsContentTypeOnly(properties.getHeaderContentType());
		commonUtilities.setHeaderAsTenantId(properties.getHeaderTenantID());
		commonUtilities.setHeaderAsAuthorizationToken(authToken);
    }
	
	@And("^I run the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\" with roleID as RequestParam$")
	public void sendRequest(String requestBodyPath, String requestType) throws Throwable {
		
		//userName=properties.getHeaderUserName();
		tenantID=properties.getHeaderTenantID();
		
		commonUtilities.setHeaderAsTransactionID(properties.getHeaderTransactionID());	

		response=commonUtilities.sendPostOrPutRequest(requestBodyPath, requestType,"",tenantID);
		verifyErrorMessages(response);

	}
	
	
	@Then("^I try to verify the status code of the response \"([^\"]*)\"$")
	public void verifyStatusCodeofRequest(String statusCode) {
		
		commonUtilities.verifyStatusCode(statusCode);
	
	}

	@And("^I try to verify the response value of \"([^\"]*)\" is not null")
	public void verifyResponseValues(String responseKey) throws Throwable {
		
		commonUtilities.verifyResponseKeyIsNotNull(responseKey);
		
	}
	
	public void verifyErrorMessages(String response) throws ParseException{
		
		JSONParser parser = new JSONParser();
		JSONObject responseObject = (JSONObject) parser.parse(response);
		//logger.info("response body token: "+response);
		if(response.contains("error_message")){
		String errorMsg = responseObject.get("error_message").toString();
		if(errorMsg.equalsIgnoreCase(properties.getUserNotUserNotAuthorizedErrorMsg())){
			Reporter.addStepLog(Status.PASS + " -If User RoleID is invalid then it shows error- Forbidden: User is not authorized");
		}
		else if(errorMsg.equalsIgnoreCase(properties.getUserAuthSwitchRoleErrorMsg())){
			Reporter.addStepLog(Status.PASS + " -Either user is already logged in with same role or user has only one role- then it shows error- Forbidden: Switch role failed. Signed in with same role.");

		}
		else{
			Reporter.addStepLog(Status.FAIL + " -If User RoleID is invalid - it shows incorrect error message");
		}
		}
		
	}



}
