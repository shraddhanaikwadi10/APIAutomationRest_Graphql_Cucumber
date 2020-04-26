package com.api.rest.stepdefinitions;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.logging.Logger;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;

import com.api.rest.commons.CommonUtilities;
import com.api.rest.constants.APIConstants;
import com.api.rest.utils.GetProperties;
import com.aventstack.extentreports.Status;
import com.cucumber.listener.Reporter;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class UserServiceAuth {
	private final static Logger logger = Logger.getLogger(UserServiceAuth.class.getName());
	public static String apiEndPointUri;
	
    String userName;
	String tenantID;
	String response;
	
	GetProperties properties=new GetProperties();;
    CommonUtilities commonUtilities=new CommonUtilities();
	
	APIConstants constant=new APIConstants();

	@Given("^I want to set URL for UserServiceAuth Service of test case \"([^\"]*)\"$")
	public void setEndpointURL( String testCaseName) {
		
		String apiHostName = properties.getUserHostEnvironmentURL();
		apiEndPointUri = properties.userServiceAuthURL();
		commonUtilities.setEndpointURL(apiHostName, apiEndPointUri, testCaseName);
		
	}

	@When("^I set the required headers$")
	public void setHeaders() {
		
		commonUtilities.setHeaderAsContentTypeOnly(properties.getHeaderContentType());
		commonUtilities.setHeaderAsTenantId(properties.getHeaderTenantID());
		commonUtilities.setHeaderAsUsername(properties.getHeaderUserName());
		commonUtilities.setHeaderAsTransactionID(properties.getHeaderTransactionID());
		
	}

	@And("^I run the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\"$")
	public void sendRequest(String requestBodyPath, String requestType) throws Throwable {
		userName=properties.getHeaderUserName();
		tenantID=properties.getHeaderTenantID();
		commonUtilities.sendPostOrPutRequest(requestBodyPath, requestType,userName,tenantID);

	}

	@And("^I hit the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\" and invalid username in header is \"([^\"]*)\"$")
	public void sendRequestWithInvalidUsername(String requestBodyPath, String requestType, String userName)
			throws Throwable {
		tenantID=properties.getHeaderTenantID();
		 response=commonUtilities.sendPostOrPutRequest(requestBodyPath, requestType,userName,tenantID);
		verifyErrorMessages(response);
		
	}

	@And("^I hit the API with invalid password in requestbody \"([^\"]*)\" and request method is \"([^\"]*)\"$")
	public void sendRequestWithInvalidPassword(String requestBodyPath, String requestType) throws Throwable {
		
		userName=properties.getHeaderUserName();
		tenantID=properties.getHeaderTenantID();
		response=commonUtilities.sendPostOrPutRequest(requestBodyPath, requestType,userName,tenantID);
		verifyErrorMessages(response);
		
	}

	@And("^I hit the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\" and invalid tenantId in header is \"([^\"]*)\"$")
	public void sendRequestWithInvalidTenantId(String requestBodyPath, String requestType, String tenantId)
			throws Throwable {
		
		userName=properties.getHeaderUserName();
		
		response=commonUtilities.sendPostOrPutRequest(requestBodyPath, requestType, userName,tenantId);
		verifyErrorMessages(response);
		
	}

	@Then("^I try to verify the status code in response is \"([^\"]*)\"$")
	public void verifyStatusCodeofRequest(String statusCode) {
		
		commonUtilities.verifyStatusCode(statusCode);
	
	}

	@And("^I try to verify the response value \"([^\"]*)\" is not null")
	public void verifyResponseValues(String responseKey) throws Throwable {
		
		commonUtilities.verifyResponseKeyIsNotNull(responseKey);
		
	}

	@And("^I try to verify the response value \"([^\"]*)\" is \"([^\"]*)\"$")
	public void validateResponseValues(String responseKey, String value) throws Throwable {
		commonUtilities.validateResponseValueForGivenResponseKey(responseKey, value);
		
	}
	
	public void verifyErrorMessages(String response) throws Throwable {
		
		JSONParser parser = new JSONParser();
		JSONObject responseObject = (JSONObject) parser.parse(response);
		//logger.info("response body token: "+response);
		String errorMsg = responseObject.get("error_message").toString();
		if(errorMsg.equalsIgnoreCase(properties.getUserServiceAuthErrorMessage())){
			Reporter.addStepLog(Status.PASS + " -If invalid data in the request then it shows error- UnAuthorized: Authentication failed for the user");
		}
		else{
			Reporter.addStepLog(Status.FAIL + " -If invalid data in the request - it shows incorrect error message");
		}
	}



}
