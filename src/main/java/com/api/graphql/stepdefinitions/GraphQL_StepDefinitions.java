package com.api.graphql.stepdefinitions;

import java.io.File;
import java.util.logging.Logger;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.junit.Assert;

import com.aventstack.extentreports.Status;
import com.cucumber.listener.Reporter;
import com.vimalselvam.graphql.GraphqlTemplate;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class GraphQL_StepDefinitions {
	private final static Logger logger = Logger.getLogger(GraphQL_StepDefinitions.class.getName());
	public static String apiEndPointUri;
	public static String testName;
	public static String CONTENT_TYPE;
	public static String STATUS_CODE;
	public static String FILE_PATH;
	public static String REQUESTBODY;
	public static String RESPONSEBODY;
	public static Response response;

	private static final OkHttpClient client = new OkHttpClient();

	@Given("^I want to set URL as \"([^\"]*)\" for test case \"([^\"]*)\"$")
	public void setAPIEndpointURL(String URL, String testCaseName) {
		// String apiHostName = "https://reqres.in";
		// apiEndPointUri = String.format("%s%s", apiHostName, URL);
		// apiEndPointUri = String.format("%s", URL);
		apiEndPointUri = URL;
		testName = testCaseName;
		Reporter.addStepLog(Status.PASS + " :: Cucumber Hostname URL is :: " + apiEndPointUri);
		logger.info("Cucumber Hostname URL is :: " + apiEndPointUri);
		logger.info("Cucumber Test case name is :: " + testName);
	}

	@When("^I set header content type as \"([^\"]*)\"$")
	public void setHeader(String contentType) {
		if (contentType != null && !contentType.isEmpty()) {
			CONTENT_TYPE = contentType;
			Reporter.addStepLog(Status.PASS + " :: content type is :: " + CONTENT_TYPE);
			logger.info("Content type is :: " + CONTENT_TYPE);
		} else {
			Reporter.addStepLog(Status.FAIL + " :: content type cannot be null or empty!");
			logger.info("Content type cannot be null or empty!");
		}
	}

	@And("^I hit the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\"$")
	public void submitRequest(String requestBodyPath, String requestType) throws Throwable {

		FILE_PATH = System.getProperty("user.dir") + "//src//test//java//com//api//graphql//" + requestBodyPath;
		// Read a graphql file
		File file = new File(FILE_PATH);

		// Now parse the graphql file to a request payload string
		REQUESTBODY = GraphqlTemplate.parseGraphql(file, null);

		// Build and trigger the request
		Response response = prepareResponse(REQUESTBODY, apiEndPointUri);
		STATUS_CODE = String.valueOf(response.networkResponse().code());
		RESPONSEBODY = response.body().string();
		System.out.println("STATUS_CODE: " + STATUS_CODE);
		System.out.println("RESPONSEBODY: " + RESPONSEBODY);
		Reporter.addStepLog(Status.PASS + " :: Request successfully processed");
		Reporter.addStepLog("Response is :: " + RESPONSEBODY);

	}

	@Then("^I try to verify the status code is \"([^\"]*)\"$")
	public void verifyStatusCode(String statusCode) {
		if (statusCode.equals(String.valueOf(STATUS_CODE))) {
			Assert.assertEquals(STATUS_CODE, statusCode);
			Reporter.addStepLog(Status.PASS + " :: Status Code is :: " + STATUS_CODE);
			logger.info("Status Code is :: " + STATUS_CODE);
		} else {
			Assert.assertEquals(STATUS_CODE, statusCode);
			Reporter.addStepLog(Status.FAIL + " :: Status Code is :: " + STATUS_CODE);
			logger.info("Status Code is not as expected :: " + STATUS_CODE);
		}
	}

	@And("^I try to verify the response value \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verifyResponseValue(String responseKey, String value) throws Throwable {
		// Object obj = responseKey;
		// JSONParser parser = new JSONParser();
		// JSONObject responseObject = (JSONObject) parser.parse(RESPONSEBODY);
		// Object key = (Object) responseObject.get(responseKey);
		JSONParser parser = new JSONParser();
		JSONObject jsonObject = (JSONObject) parser.parse(RESPONSEBODY);
		JSONObject data = (JSONObject) jsonObject.get("data");
		JSONObject filmdata = (JSONObject) data.get("allFilms");
		JSONArray jsonArray = (JSONArray) filmdata.get("films");
		JSONObject filmObject = (JSONObject) jsonArray.get(0);
		System.out.println("title: " + filmObject.get("title"));
		compareResponseValues(String.valueOf(value), filmObject.get("title").toString(), responseKey);
	}

	private void compareResponseValues(String expected, String actual, String responseKey) {
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

	private Response prepareResponse(String requestBody, String apiEndPointURL) throws Throwable {
		RequestBody body = RequestBody.create(MediaType.get("application/json; charset=utf-8"), requestBody);
		Request request = new Request.Builder().url(apiEndPointURL).post(body).build();
		return client.newCall(request).execute();
	}

}
