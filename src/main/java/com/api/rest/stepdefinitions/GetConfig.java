package com.api.rest.stepdefinitions;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Properties;
import java.util.logging.Logger;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;

import com.api.rest.commons.CommonUtilities;
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

public class GetConfig {
	private final static Logger logger = Logger.getLogger(GetConfig.class.getName());
	public static String apiEndPointUri;
	public static String response;
	

    GetProperties properties=new GetProperties();;
    CommonUtilities commonUtilities=new CommonUtilities();
	
	@Given("^I want to set URL for GetConfig Service of test case \"([^\"]*)\"$")
	public void setAPIEndpointURL(String testCaseName) {
	
		String apiHostName = properties.getConfigHostEnvironmentURL();
		apiEndPointUri = properties.getConfigServiceURL();
	
		logger.info("host name:"+apiHostName);
		logger.info("endpoint :"+apiEndPointUri);
		logger.info("testCase name:"+testCaseName);
		commonUtilities.setEndpointURL(apiHostName, apiEndPointUri,testCaseName);
	}

	@When("^I set header as content type only$")
	public void setHeader() {
		 
		commonUtilities.setHeaderAsContentTypeOnly(properties.getHeaderContentType());

	}

	@When("^I hit the API with the request method is \"([^\"]*)\"$")
	public void submitRequest( String requestType) throws Throwable {
		
		response=commonUtilities.sendGetRequest( requestType);
		
    }

	@Then("^I try to verify the status code is \"([^\"]*)\"$")
	public void verifyStatusCode(String statusCode) {
		
		commonUtilities.verifyStatusCode(statusCode);
	
	}
	
	@Then("^I try to verify the auth provider value with DB")
	public void verifyAuthProviderValue() {
		
		if(response.equalsIgnoreCase(properties.authProviderValue())){
			Reporter.addStepLog(Status.PASS + " -Auth Provider value matches with DB value");
		}
		else{
			Reporter.addStepLog(Status.FAIL + " -Auth Provider value does not matches with DB value");
		}
    }
	


}
