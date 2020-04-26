package com.api.rest.commons;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.logging.Logger;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;

import com.api.rest.constants.APIConstants;
import com.aventstack.extentreports.Status;
import com.cucumber.listener.Reporter;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class CommonUtilities {
	
	private final static Logger logger = Logger.getLogger(CommonUtilities.class.getName());	
	public static Response response;
	APIConstants apiConstants;
	public CommonUtilities(){
		apiConstants=new APIConstants();
	}
    public void setEndpointURL(String apiHostName,String endpointUrl,String testCaseName) {
	
    	apiConstants.setAPI_ENDPOINT_URL(apiHostName + endpointUrl);
		Reporter.addStepLog(Status.PASS + "Host URL is :: " + apiConstants.getAPI_ENDPOINT_URL());
		logger.info("Host URL is :: " + apiConstants.getAPI_ENDPOINT_URL());
		logger.info("Test case name is :: " + testCaseName);
	}
    
    public void setHeaderAsContentTypeOnly(String contentType) {
		if (contentType != null && !contentType.isEmpty()) {
			apiConstants.setCONTENT_TYPE(contentType);
			Reporter.addStepLog(Status.PASS + " content type is :: " + apiConstants.getCONTENT_TYPE());
			logger.info("Content type is :: " + apiConstants.getCONTENT_TYPE());
		} else {
			Reporter.addStepLog(Status.FAIL + "content type cannot be null or empty!");
			logger.info("Content type cannot be null or empty!");
		}
	}
    
    public void setHeaderAsTenantId(String tenantId) {
  		if (tenantId != null && !tenantId.isEmpty()) {
  			apiConstants.setTENANT_ID(tenantId);
  			Reporter.addStepLog(Status.PASS + " Tenant Id is :: " + apiConstants.getTENANT_ID());
  			logger.info("TenantID is :: " + apiConstants.getTENANT_ID());
  		} else {
  			Reporter.addStepLog(Status.FAIL + "TenantID cannot be null or empty!");
  			logger.info("TenantID cannot be null or empty!");
  		}
  	}
    
    public void setHeaderAsUsername(String userName) {
  		if (userName != null && !userName.isEmpty()) {
  			apiConstants.setUSERNAME(userName);
  			Reporter.addStepLog(Status.PASS + " Username is :: " + apiConstants.getUSERNAME());
  			logger.info("Username is :: " + apiConstants.getUSERNAME());
  		} else {
  			Reporter.addStepLog(Status.FAIL + "Username cannot be null or empty!");
  			logger.info("Username cannot be null or empty!");
  		}
  	}
    
    public void setHeaderAsTransactionID(String transactionID) {
  		if (transactionID != null && !transactionID.isEmpty()) {
  			apiConstants.setTRANSACTION_ID(transactionID);
  			Reporter.addStepLog(Status.PASS + " TransactionID is :: " + apiConstants.getTRANSACTION_ID());
  			logger.info("TransactionID is :: " + apiConstants.getTRANSACTION_ID());
  		} else {
  			Reporter.addStepLog(Status.FAIL + "TransactionID cannot be null or empty!");
  			logger.info("TransactionID cannot be null or empty!");
  		}
  	}
    
    public void setHeaderAsAuthorizationToken(String authToken) {
  		if (authToken != null && !authToken.isEmpty()) {
  			apiConstants.setAUTHORIZATION(authToken);
  			Reporter.addStepLog(Status.PASS + " Auth Token is :: " + apiConstants.getAUTHORIZATION());
  			logger.info("Auth Token is :: " + apiConstants.getAUTHORIZATION());
  		} else {
  			Reporter.addStepLog(Status.FAIL + "Auth Token cannot be null or empty!");
  			logger.info("Auth Token cannot be null or empty!");
  		}
  	}
    
    
	public String sendGetRequest(String requestType) throws Throwable {
		RestAssured.baseURI = apiConstants.getAPI_ENDPOINT_URL();
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", apiConstants.getCONTENT_TYPE());
		 if (requestType.equalsIgnoreCase("GET")) {
			response = request.get();
		}
		apiConstants.setSTATUS_CODE(String.valueOf(response.getStatusCode()));
		apiConstants.setRESPONSEBODY(response.getBody().asString());
		Reporter.addStepLog(Status.PASS + " Request successfully processed");
		Reporter.addStepLog("Response is: " + apiConstants.getRESPONSEBODY());
		return apiConstants.getRESPONSEBODY();
	}


	public void verifyStatusCode(String statusCode) {
		if (statusCode.equals(String.valueOf(apiConstants.getSTATUS_CODE()))) {
			Assert.assertEquals(apiConstants.getSTATUS_CODE(), statusCode);
			Reporter.addStepLog(Status.PASS + " Status Code is :: " + apiConstants.getSTATUS_CODE());
			logger.info("Status Code is: " + apiConstants.getSTATUS_CODE());
		} else {
			Assert.assertEquals(apiConstants.getSTATUS_CODE(), statusCode);
			Reporter.addStepLog(Status.FAIL + " Status Code is :: " + apiConstants.getSTATUS_CODE());
			logger.info("Status Code is not as expected :: " + apiConstants.getSTATUS_CODE());
		}
	}
	
	public void verifyResponseValue(String expectedValue) throws Throwable {

		Reporter.addStepLog("Actual Value is  ::" + apiConstants.getRESPONSEBODY());
		Reporter.addStepLog("Expected Value is  ::" + expectedValue);
		logger.info("Actual Value is  ::" + apiConstants.getRESPONSEBODY());
		logger.info("Expected Value is  ::" + expectedValue);
		if (expectedValue.equals(apiConstants.getRESPONSEBODY())) {
			Assert.assertEquals(apiConstants.getRESPONSEBODY(), expectedValue);
			Reporter.addStepLog(Status.PASS + "  Expected value : " + expectedValue + " mathches with Actual Value : "
					+ apiConstants.getRESPONSEBODY());
		} else {
			Reporter.addStepLog(Status.FAIL + "  Expected value : " + expectedValue
					+ " do not matches with Actual Value : " +apiConstants.getRESPONSEBODY());
			Assert.assertEquals(apiConstants.getRESPONSEBODY(), expectedValue);
		}
	}
	
	public void validateResponseValueForGivenResponseKey(String responseKey, String expected) throws Throwable {
		Object obj = responseKey;
		JSONParser parser = new JSONParser();
		JSONObject responseObject = (JSONObject) parser.parse(apiConstants.getRESPONSEBODY());
		Object key = (Object) responseObject.get(responseKey);
		//compareResponseValues(String.valueOf(value), String.valueOf(key), responseKey);
		String actual=String.valueOf(key);
		
		Reporter.addStepLog("Actual Value is  ::" + actual);
		Reporter.addStepLog("Expected Value is  ::" + expected);
		logger.info("Actual Value is  ::" + actual);
		logger.info("Expected Value is  ::" + expected);
		if (expected.equals(actual)) {
			Assert.assertEquals(actual, expected);
			Reporter.addStepLog(Status.PASS + " " + responseKey + " : Expected value : " + expected
					+ " mathches with Actual Value : " + actual);
		} else {
			Reporter.addStepLog(Status.FAIL + " " + responseKey + " : Expected value : " + expected
					+ " do not matches with Actual Value : " + actual);
			Assert.assertEquals(actual, expected);
		}
	}
	
	public void verifyResponseKeyIsNotNull(String responseKey) throws Throwable {
		Object obj = responseKey;
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(apiConstants.getRESPONSEBODY());

		String tokenValue = json.get(responseKey).toString();
		//constant.setUserAuthToken(tokenValue);
		if (tokenValue != null) {
			Assert.assertNotNull(tokenValue);
			Reporter.addStepLog(Status.PASS + "Auth Token is :: " + tokenValue);
			logger.info("Auth Token is :: " + tokenValue);
		} else {
			Assert.assertNotNull(tokenValue);
			Reporter.addStepLog(Status.FAIL + "Auth Token is not generated :: " + tokenValue);
			logger.info("Auth Token is not generated :: " + tokenValue);
		}
 
		
	}
	
	
	public String sendPostOrPutRequest(String requestBodyPath, String requestType,String userName, String tenantID) throws Throwable {
		
		RestAssured.baseURI = apiConstants.getAPI_ENDPOINT_URL();
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", apiConstants.getCONTENT_TYPE());
        if(tenantID!=null){
		request.header("tenantId", tenantID);
        }
        if(userName!=null){
		request.header("username", userName);
        }
		request.header("transaction-id", apiConstants.getTRANSACTION_ID());
		if(apiConstants.getAUTHORIZATION()!=null){
			request.header("Authorization", apiConstants.getAUTHORIZATION());
		}
		
		if (requestBodyPath != null && !requestBodyPath.isEmpty() && requestType.equalsIgnoreCase("POST")
				|| requestType.equalsIgnoreCase("PUT")) {
			JSONParser jsonParser = new JSONParser();
			apiConstants.setFILE_PATH(System.getProperty("user.dir") + "//src//test//java//com//api//rest//"
					+ requestBodyPath);
			logger.info("Path of requestbody file is :: " + apiConstants.getFILE_PATH());
			try (FileReader reader = new FileReader(apiConstants.getFILE_PATH())) {
				Object obj = jsonParser.parse(reader);
				apiConstants.setREQUESTBODY(obj.toString());
				logger.info("Request Body is :: " + apiConstants.getREQUESTBODY());
			} catch (FileNotFoundException | ParseException exc) {
				exc.printStackTrace();
			}
			if (apiConstants.getREQUESTBODY().length() > 0) {
				request.body(apiConstants.getREQUESTBODY());
				response = request.post();
			} else {
				Reporter.addStepLog(Status.FAIL + " Request Body cannot be null or empty!");
				logger.info(" Request Body cannot be null or empty!");
			}
		} 
		apiConstants.setSTATUS_CODE(String.valueOf(response.getStatusCode()));
		apiConstants.setRESPONSEBODY(response.getBody().asString());
		Reporter.addStepLog(Status.PASS + " Request successfully processed");
		Reporter.addStepLog("Response is: " + apiConstants.getRESPONSEBODY());
		return apiConstants.getRESPONSEBODY();
	}

	
	
}
