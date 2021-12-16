# TempApi.BlogApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createblog**](BlogApi.md#createblog) | **POST** /blog | Creates the data
[**deleteblog**](BlogApi.md#deleteblog) | **DELETE** /blog/{blogId} | Delete the element
[**getAllblog**](BlogApi.md#getAllblog) | **GET** /blog/getAll | Get all the data
[**getblog**](BlogApi.md#getblog) | **GET** /blog/{blogId} | Get the element
[**updateblog**](BlogApi.md#updateblog) | **PUT** /blog/{blogId} | Updates the element



## createblog

> Blog createblog(blog)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BlogApi();
let blog = new TempApi.Blog(); // Blog | data to be created
apiInstance.createblog(blog, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blog** | [**Blog**](Blog.md)| data to be created | 

### Return type

[**Blog**](Blog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteblog

> deleteblog(blogId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BlogApi();
let blogId = "blogId_example"; // String | the Id parameter
apiInstance.deleteblog(blogId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blogId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllblog

> [Blog] getAllblog()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BlogApi();
apiInstance.getAllblog((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Blog]**](Blog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getblog

> Blog getblog(blogId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BlogApi();
let blogId = "blogId_example"; // String | the Id parameter
apiInstance.getblog(blogId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blogId** | **String**| the Id parameter | 

### Return type

[**Blog**](Blog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateblog

> Blog updateblog(blogId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.BlogApi();
let blogId = "blogId_example"; // String | the Id parameter
let opts = {
  'blog': new TempApi.Blog() // Blog | data to be updated
};
apiInstance.updateblog(blogId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blogId** | **String**| the Id parameter | 
 **blog** | [**Blog**](Blog.md)| data to be updated | [optional] 

### Return type

[**Blog**](Blog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

