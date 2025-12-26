import 'dart:convert';

import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
void manageHttpResponse({
  required http.Response response, // the http response from the request
  required BuildContext context, // the context is to show the snackbar
  required VoidCallback onsuccess, // the callback to be executed on successful response
}){

  // switch statement to handle different http status codes
  switch (response.statusCode) {
    case 200:
      onsuccess();
      break;
    case 400:
      showSnackbar(context,json.decode(response.body)['msg']);
      break;
    case 500:
      showSnackbar(context,json.decode(response.body)['error']);
      break;
    case 201:
      onsuccess();
      break;
  }
}

void showSnackbar(context,String title){
  ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(title)));
}

