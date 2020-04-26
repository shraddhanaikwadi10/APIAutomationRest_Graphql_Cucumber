$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getconfig.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Shraddha"
    }
  ],
  "line": 2,
  "name": "GET: Get Config",
  "description": "Description: GET: purpose of this feature is to get configuration.",
  "id": "get:-get-config",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test the Get Config Service",
  "description": "",
  "id": "get:-get-config;get:-test-the-get-config-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL for GetConfig Service of test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header as content type only",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with the request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the auth provider value with DB",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "get:-get-config;get:-test-the-get-config-service;",
  "rows": [
    {
      "cells": [
        "TestName",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 14,
      "id": "get:-get-config;get:-test-the-get-config-service;;1"
    },
    {
      "cells": [
        "LTC-01",
        "GET",
        "200"
      ],
      "line": 15,
      "id": "get:-get-config;get:-test-the-get-config-service;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "GET: Test the Get Config Service",
  "description": "",
  "id": "get:-get-config;get:-test-the-get-config-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL for GetConfig Service of test case \"LTC-01\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header as content type only",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with the request method is \"GET\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the auth provider value with DB",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-01",
      "offset": 54
    }
  ],
  "location": "GetConfig.setAPIEndpointURL(String)"
});
formatter.result({
  "duration": 5567799,
  "status": "passed"
});
formatter.match({
  "location": "GetConfig.setHeader()"
});
formatter.result({
  "duration": 710199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 42
    }
  ],
  "location": "GetConfig.submitRequest(String)"
});
formatter.result({
  "duration": 1118320400,
  "error_message": "java.net.UnknownHostException: configservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\r\n\tat java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:928)\r\n\tat java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1323)\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1276)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:135)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:143)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:135)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:255)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendGetRequest(CommonUtilities.java:97)\r\n\tat com.api.rest.stepdefinitions.GetConfig.submitRequest(GetConfig.java:56)\r\n\tat ✽.When I hit the API with the request method is \"GET\"(getconfig.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetConfig.verifyStatusCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetConfig.verifyAuthProviderValue()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("userServiceAuth.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Shraddha"
    }
  ],
  "line": 2,
  "name": "POST: User Service Authentication",
  "description": "Description: POST: The purpose of this feature is to test service authentication.",
  "id": "post:-user-service-authentication",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "POST: User service Authentication",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-authentication",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL for UserServiceAuth Service of test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I run the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code in response is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"token\" is not null",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"authenticated\" is \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-authentication;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 16,
      "id": "post:-user-service-authentication;post:-user-service-authentication;;1"
    },
    {
      "cells": [
        "LTC-02",
        "/authenticate",
        "application/json",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "200"
      ],
      "line": 17,
      "id": "post:-user-service-authentication;post:-user-service-authentication;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "POST: User service Authentication",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-authentication;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL for UserServiceAuth Service of test case \"LTC-02\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code in response is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"token\" is not null",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"authenticated\" is \"true\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-02",
      "offset": 60
    }
  ],
  "location": "UserServiceAuth.setEndpointURL(String)"
});
formatter.result({
  "duration": 1942199,
  "status": "passed"
});
formatter.match({
  "location": "UserServiceAuth.setHeaders()"
});
formatter.result({
  "duration": 4634800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    }
  ],
  "location": "UserServiceAuth.sendRequest(String,String)"
});
formatter.result({
  "duration": 154696500,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\r\n\tat java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:928)\r\n\tat java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1323)\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1276)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:135)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuth.sendRequest(UserServiceAuth.java:62)\r\n\tat ✽.When I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\"(userServiceAuth.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 48
    }
  ],
  "location": "UserServiceAuth.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "token",
      "offset": 36
    }
  ],
  "location": "UserServiceAuth.verifyResponseValues(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "authenticated",
      "offset": 36
    },
    {
      "val": "true",
      "offset": 55
    }
  ],
  "location": "UserServiceAuth.validateResponseValues(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "POST: User Service Auth with invalid username",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want to set URL for UserServiceAuth Service of test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\" and invalid username in header is \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the status code in response is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#And I try to verify error message in response"
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-username;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Username"
      ],
      "line": 28,
      "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-username;;1"
    },
    {
      "cells": [
        "LTC-03",
        "/authenticate",
        "application/json",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "401",
        "Emil"
      ],
      "line": 29,
      "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-username;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "POST: User Service Auth with invalid username",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want to set URL for UserServiceAuth Service of test case \"LTC-03\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I hit the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" and invalid username in header is \"Emil\"",
  "matchedColumns": [
    3,
    4,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the status code in response is \"401\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-03",
      "offset": 60
    }
  ],
  "location": "UserServiceAuth.setEndpointURL(String)"
});
formatter.result({
  "duration": 1626799,
  "status": "passed"
});
formatter.match({
  "location": "UserServiceAuth.setHeaders()"
});
formatter.result({
  "duration": 2898300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    },
    {
      "val": "Emil",
      "offset": 131
    }
  ],
  "location": "UserServiceAuth.sendRequestWithInvalidUsername(String,String,String)"
});
formatter.result({
  "duration": 12891600,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuth.sendRequestWithInvalidUsername(UserServiceAuth.java:70)\r\n\tat ✽.When I hit the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" and invalid username in header is \"Emil\"(userServiceAuth.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 48
    }
  ],
  "location": "UserServiceAuth.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "POST: User Service Auth with Invalid Password",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want to set URL for UserServiceAuth Service of test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I hit the API with invalid password in requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I try to verify the status code in response is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 39,
      "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-password;;1"
    },
    {
      "cells": [
        "LTC-04",
        "/authenticate",
        "application/json",
        "testdata/userServiceAuth_InvalidPwdReq.json",
        "POST",
        "401"
      ],
      "line": 40,
      "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "POST: User Service Auth with Invalid Password",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want to set URL for UserServiceAuth Service of test case \"LTC-04\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I hit the API with invalid password in requestbody \"testdata/userServiceAuth_InvalidPwdReq.json\" and request method is \"POST\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I try to verify the status code in response is \"401\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-04",
      "offset": 60
    }
  ],
  "location": "UserServiceAuth.setEndpointURL(String)"
});
formatter.result({
  "duration": 1384600,
  "status": "passed"
});
formatter.match({
  "location": "UserServiceAuth.setHeaders()"
});
formatter.result({
  "duration": 2587499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_InvalidPwdReq.json",
      "offset": 52
    },
    {
      "val": "POST",
      "offset": 120
    }
  ],
  "location": "UserServiceAuth.sendRequestWithInvalidPassword(String,String)"
});
formatter.result({
  "duration": 12785701,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuth.sendRequestWithInvalidPassword(UserServiceAuth.java:80)\r\n\tat ✽.When I hit the API with invalid password in requestbody \"testdata/userServiceAuth_InvalidPwdReq.json\" and request method is \"POST\"(userServiceAuth.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 48
    }
  ],
  "location": "UserServiceAuth.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "POST: User Service Auth with Invalid Tenant ID having valid credentials",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-tenant-id-having-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I want to set URL for UserServiceAuth Service of test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\" and invalid tenantId in header is \"\u003cTenantId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I try to verify the status code in response is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-tenant-id-having-valid-credentials;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "TenantId"
      ],
      "line": 50,
      "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-tenant-id-having-valid-credentials;;1"
    },
    {
      "cells": [
        "LTC-05",
        "/authenticate",
        "application/json",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "401",
        "gce"
      ],
      "line": 51,
      "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-tenant-id-having-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 51,
  "name": "POST: User Service Auth with Invalid Tenant ID having valid credentials",
  "description": "",
  "id": "post:-user-service-authentication;post:-user-service-auth-with-invalid-tenant-id-having-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I want to set URL for UserServiceAuth Service of test case \"LTC-05\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I set the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I hit the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" and invalid tenantId in header is \"gce\"",
  "matchedColumns": [
    3,
    4,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I try to verify the status code in response is \"401\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-05",
      "offset": 60
    }
  ],
  "location": "UserServiceAuth.setEndpointURL(String)"
});
formatter.result({
  "duration": 1557400,
  "status": "passed"
});
formatter.match({
  "location": "UserServiceAuth.setHeaders()"
});
formatter.result({
  "duration": 2081200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    },
    {
      "val": "gce",
      "offset": 131
    }
  ],
  "location": "UserServiceAuth.sendRequestWithInvalidTenantId(String,String,String)"
});
formatter.result({
  "duration": 10751700,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuth.sendRequestWithInvalidTenantId(UserServiceAuth.java:91)\r\n\tat ✽.When I hit the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" and invalid tenantId in header is \"gce\"(userServiceAuth.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 48
    }
  ],
  "location": "UserServiceAuth.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("userServiceAuthSwitchRole.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Shraddha"
    }
  ],
  "line": 2,
  "name": "POST: User Service Auth Switch Role",
  "description": "Description: POST: The purpose of this feature is to test user is able to switch role.",
  "id": "post:-user-service-auth-switch-role",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "POST: User service Auth Switch Role",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"\u003cTestName\u003e\" and \"\u003cRequestBody\u003e\" and \"\u003cRequestMethod\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I run the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\" with roleID as RequestParam",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code of the response \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value of \"token\" is not null",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "# And I try to verify the response node \"authenticated\" is \"true\""
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role;",
  "rows": [
    {
      "cells": [
        "TestName",
        "RoleID",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 16,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role;;1"
    },
    {
      "cells": [
        "LTC-06",
        "",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "200"
      ],
      "line": 17,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "POST: User service Auth Switch Role",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-06\" and \"testdata/userServiceAuth_Req.json\" and \"POST\"",
  "matchedColumns": [
    0,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" with roleID as RequestParam",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code of the response \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value of \"token\" is not null",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-06",
      "offset": 116
    },
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 129
    },
    {
      "val": "POST",
      "offset": 169
    }
  ],
  "location": "UserServiceAuthSwitchRole.setEndpointURL(String,String,String)"
});
formatter.result({
  "duration": 15179800,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuthSwitchRole.setEndpointURL(UserServiceAuthSwitchRole.java:71)\r\n\tat ✽.Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-06\" and \"testdata/userServiceAuth_Req.json\" and \"POST\"(userServiceAuthSwitchRole.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserServiceAuthSwitchRole.setHeaders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    }
  ],
  "location": "UserServiceAuthSwitchRole.sendRequest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 49
    }
  ],
  "location": "UserServiceAuthSwitchRole.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "token",
      "offset": 39
    }
  ],
  "location": "UserServiceAuthSwitchRole.verifyResponseValues(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "POST: User Service Auth Switch Role with invalid roleId which is not the user roleID",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-with-invalid-roleid-which-is-not-the-user-roleid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"\u003cTestName\u003e\" and \"\u003cRequestBody\u003e\" and \"\u003cRequestMethod\u003e\" and \"\u003cRoleID\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I run the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\" with roleID as RequestParam",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the status code of the response \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-with-invalid-roleid-which-is-not-the-user-roleid;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "RoleID",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 27,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-with-invalid-roleid-which-is-not-the-user-roleid;;1"
    },
    {
      "cells": [
        "LTC-07",
        "/role/switch/",
        "4",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "403"
      ],
      "line": 28,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-with-invalid-roleid-which-is-not-the-user-roleid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "POST: User Service Auth Switch Role with invalid roleId which is not the user roleID",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-with-invalid-roleid-which-is-not-the-user-roleid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-07\" and \"testdata/userServiceAuth_Req.json\" and \"POST\" and \"4\"",
  "matchedColumns": [
    0,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" with roleID as RequestParam",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the status code of the response \"403\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-07",
      "offset": 116
    },
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 129
    },
    {
      "val": "POST",
      "offset": 169
    },
    {
      "val": "4",
      "offset": 180
    }
  ],
  "location": "UserServiceAuthSwitchRole.setEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 28828200,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuthSwitchRole.setEndpointURL(UserServiceAuthSwitchRole.java:49)\r\n\tat ✽.Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-07\" and \"testdata/userServiceAuth_Req.json\" and \"POST\" and \"4\"(userServiceAuthSwitchRole.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserServiceAuthSwitchRole.setHeaders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    }
  ],
  "location": "UserServiceAuthSwitchRole.sendRequest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 49
    }
  ],
  "location": "UserServiceAuthSwitchRole.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "POST: User service Auth Switch Role provide role in which user is already signed in with same role",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-role-in-which-user-is-already-signed-in-with-same-role",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"\u003cTestName\u003e\" and \"\u003cRequestBody\u003e\" and \"\u003cRequestMethod\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I run the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\" with roleID as RequestParam",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I try to verify the status code of the response \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-role-in-which-user-is-already-signed-in-with-same-role;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 38,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-role-in-which-user-is-already-signed-in-with-same-role;;1"
    },
    {
      "cells": [
        "LTC-08",
        "/role/switch/",
        "application/json",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "403"
      ],
      "line": 39,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-role-in-which-user-is-already-signed-in-with-same-role;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "POST: User service Auth Switch Role provide role in which user is already signed in with same role",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-role-in-which-user-is-already-signed-in-with-same-role;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-08\" and \"testdata/userServiceAuth_Req.json\" and \"POST\"",
  "matchedColumns": [
    0,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" with roleID as RequestParam",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I try to verify the status code of the response \"403\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-08",
      "offset": 116
    },
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 129
    },
    {
      "val": "POST",
      "offset": 169
    }
  ],
  "location": "UserServiceAuthSwitchRole.setEndpointURL(String,String,String)"
});
formatter.result({
  "duration": 15580300,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuthSwitchRole.setEndpointURL(UserServiceAuthSwitchRole.java:71)\r\n\tat ✽.Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-08\" and \"testdata/userServiceAuth_Req.json\" and \"POST\"(userServiceAuthSwitchRole.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserServiceAuthSwitchRole.setHeaders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    }
  ],
  "location": "UserServiceAuthSwitchRole.sendRequest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 49
    }
  ],
  "location": "UserServiceAuthSwitchRole.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "POST: User service Auth Switch Role provide roleID and expired token in header",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-roleid-and-expired-token-in-header",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service with expired token in header of test case \"\u003cTestName\u003e\" and \"\u003cRequestBody\u003e\" and \"\u003cRequestMethod\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I run the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\" with roleID as RequestParam",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I try to verify the status code of the response \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-roleid-and-expired-token-in-header;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "RoleID",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 49,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-roleid-and-expired-token-in-header;;1"
    },
    {
      "cells": [
        "LTC-09",
        "/role/switch/2",
        "1",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "403"
      ],
      "line": 50,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-roleid-and-expired-token-in-header;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "POST: User service Auth Switch Role provide roleID and expired token in header",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role-provide-roleid-and-expired-token-in-header;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@postfail"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service with expired token in header of test case \"LTC-09\" and \"testdata/userServiceAuth_Req.json\" and \"POST\"",
  "matchedColumns": [
    0,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" with roleID as RequestParam",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I try to verify the status code of the response \"403\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-09",
      "offset": 99
    },
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 112
    },
    {
      "val": "POST",
      "offset": 152
    }
  ],
  "location": "UserServiceAuthSwitchRole.setEndpointURLWithExpiredToken(String,String,String)"
});
formatter.result({
  "duration": 1494000,
  "status": "passed"
});
formatter.match({
  "location": "UserServiceAuthSwitchRole.setHeaders()"
});
formatter.result({
  "duration": 1416300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    }
  ],
  "location": "UserServiceAuthSwitchRole.sendRequest(String,String)"
});
formatter.result({
  "duration": 10164799,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuthSwitchRole.sendRequest(UserServiceAuthSwitchRole.java:120)\r\n\tat ✽.When I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" with roleID as RequestParam(userServiceAuthSwitchRole.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 49
    }
  ],
  "location": "UserServiceAuthSwitchRole.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "POST: User service Auth Switch Role - Revert back the user role",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role---revert-back-the-user-role",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"\u003cTestName\u003e\" and \"\u003cRequestBody\u003e\" and \"\u003cRequestMethod\u003e\" and \"\u003cRoleID\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I run the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\" with roleID as RequestParam",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I try to verify the status code of the response \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I try to verify the response value of \"token\" is not null",
  "keyword": "And "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role---revert-back-the-user-role;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "RoleID",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 63,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role---revert-back-the-user-role;;1"
    },
    {
      "cells": [
        "LTC-010",
        "/role/switch/",
        "1",
        "testdata/userServiceAuth_Req.json",
        "POST",
        "200"
      ],
      "line": 64,
      "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role---revert-back-the-user-role;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "POST: User service Auth Switch Role - Revert back the user role",
  "description": "",
  "id": "post:-user-service-auth-switch-role;post:-user-service-auth-switch-role---revert-back-the-user-role;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-010\" and \"testdata/userServiceAuth_Req.json\" and \"POST\" and \"1\"",
  "matchedColumns": [
    0,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I set up the required headers",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I run the API with requestbody \"testdata/userServiceAuth_Req.json\" and request method is \"POST\" with roleID as RequestParam",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I try to verify the status code of the response \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I try to verify the response value of \"token\" is not null",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LTC-010",
      "offset": 116
    },
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 130
    },
    {
      "val": "POST",
      "offset": 170
    },
    {
      "val": "1",
      "offset": 181
    }
  ],
  "location": "UserServiceAuthSwitchRole.setEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 24847300,
  "error_message": "java.net.UnknownHostException: userservice-docker-dev.us-west-2.elasticbeanstalk.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:259)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.api.rest.commons.CommonUtilities.sendPostOrPutRequest(CommonUtilities.java:211)\r\n\tat com.api.rest.stepdefinitions.UserServiceAuthSwitchRole.setEndpointURL(UserServiceAuthSwitchRole.java:49)\r\n\tat ✽.Given I want to set URL for UserServiceAuthSwitchRole Service and UserServiceAuth service to get Auth Token of test case \"LTC-010\" and \"testdata/userServiceAuth_Req.json\" and \"POST\" and \"1\"(userServiceAuthSwitchRole.feature:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserServiceAuthSwitchRole.setHeaders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/userServiceAuth_Req.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 90
    }
  ],
  "location": "UserServiceAuthSwitchRole.sendRequest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 49
    }
  ],
  "location": "UserServiceAuthSwitchRole.verifyStatusCodeofRequest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "token",
      "offset": 39
    }
  ],
  "location": "UserServiceAuthSwitchRole.verifyResponseValues(String)"
});
formatter.result({
  "status": "skipped"
});
});