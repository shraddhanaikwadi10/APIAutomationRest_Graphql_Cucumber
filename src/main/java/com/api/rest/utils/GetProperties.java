package com.api.rest.utils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class GetProperties {
	private Properties properties;
	private final String propertyFilePath= System.getProperty("user.dir") + "//src//test//resources//properties//configurations.properties";
	 
	 
	 public GetProperties(){
	 BufferedReader reader;
	 try {
	 reader = new BufferedReader(new FileReader(propertyFilePath));
	 properties = new Properties();
	 try {
	 properties.load(reader);
	 reader.close();
	 } catch (IOException e) {
	 e.printStackTrace();
	 }
	 } catch (FileNotFoundException e) {
	 e.printStackTrace();
	 throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
	 } 
	 }
	 
	 public String getConfigHostEnvironmentURL(){
	 String hostNameURL = properties.getProperty("host.config.environment");
	 if(hostNameURL!= null) return hostNameURL;
	 else throw new RuntimeException("hostNameURL not specified in the Configuration.properties file."); 
	 }
	 
	 public String getUserHostEnvironmentURL(){
		 String hostNameURL = properties.getProperty("host.user.environment");
		 if(hostNameURL!= null) return hostNameURL;
		 else throw new RuntimeException("hostNameURL not specified in the Configuration.properties file."); 
	 }
	 
	 public String getConfigServiceURL() { 
	 String getConfigServiceURL = properties.getProperty("getConfig.URL");
	 if(getConfigServiceURL != null) return getConfigServiceURL;
	 else throw new RuntimeException("GetConfigServiceURL not specified in the Configuration.properties file."); 
	 }
	 
	 public String userServiceAuthURL() { 
		 String userServiceAuthURL = properties.getProperty("userServiceAuth.URL");
		 if(userServiceAuthURL != null) return userServiceAuthURL;
		 else throw new RuntimeException("UserServiceAuthURL not specified in the Configuration.properties file."); 
	 }
	 
	 public String userServiceAuthSwitchRoleURL() { 
		 String userServiceAuthSwitchRoleURL = properties.getProperty("userServiceAuthSwitchRole.URL");
		 if(userServiceAuthSwitchRoleURL != null) return userServiceAuthSwitchRoleURL;
		 else throw new RuntimeException("UserServiceAuthSwitchRoleURL not specified in the Configuration.properties file."); 
	 }
	
	 public String getHeaderContentType() {
	 String contentType = properties.getProperty("header.contentType");
	 if(contentType != null) return contentType;
	 else throw new RuntimeException("contentType not specified in the Configuration.properties file.");
	 } 
	 
	 public String authProviderValue() {
		 String authProviderValue = properties.getProperty("getConfig.authProvider.DBValue");
		 if(authProviderValue != null) return authProviderValue;
		 else throw new RuntimeException("Auth Provider Value not specified in the Configuration.properties file.");
	 }
	 
	 public String getUserAuthSwitchRoleErrorMsg() {
		 String userAuthSwitchRoleErrorMsg = properties.getProperty("userServiceAuthSwitchRole.userSwitchError");
		 if(userAuthSwitchRoleErrorMsg != null) return userAuthSwitchRoleErrorMsg;
		 else throw new RuntimeException("UserAuthSwitchRoleErrorMsg is not specified in the Configuration.properties file.");
	 }
	 
	 public String getUserNotUserNotAuthorizedErrorMsg() {
		 String userNotUserNotAuthorizedErrorMsg = properties.getProperty("userServiceAuthSwitchRole.userNotAuthorizedError");
		 if(userNotUserNotAuthorizedErrorMsg != null) return userNotUserNotAuthorizedErrorMsg;
		 else throw new RuntimeException("userNotUserNotAuthorizedErrorMsg is not specified in the Configuration.properties file.");
	 }
	 
	 public String getUserServiceAuthErrorMessage() {
		 String userServiceAuthErrorMsg = properties.getProperty("userServiceAuth.error");
		 if(userServiceAuthErrorMsg != null) return userServiceAuthErrorMsg;
		 else throw new RuntimeException("Error message for userServiceAuth API is not specified in the Configuration.properties file.");
		 } 
	 
	 public String getHeaderTenantID() { 
		 String tenantId = properties.getProperty("header.tenantId");
		 if(tenantId != null) return tenantId;
		 else throw new RuntimeException("TenantID not specified in the Configuration.properties file."); 
		 }
	 
	 public String getHeaderUserName() { 
		 String username = properties.getProperty("header.userName");
		 if(username != null) return username;
		 else throw new RuntimeException("UserName not specified in the Configuration.properties file."); 
		 }
	 
	 public String getHeaderTransactionID() { 
		 String transactionID = properties.getProperty("header.transaction-id");
		 if(transactionID != null) return transactionID;
		 else throw new RuntimeException("TransactionID not specified in the Configuration.properties file."); 
		 }
	 
	 public String getRoleID() { 
		 String roleID = properties.getProperty("userServiceAuthSwitchRole.roleID");
		 if(roleID != null) return roleID;
		 else throw new RuntimeException("RoleID not specified in the Configuration.properties file."); 
		 }
	 
			 
}
