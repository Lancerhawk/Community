import 'dart:convert';

import 'package:codingera2/global_variable.dart';
import 'package:codingera2/models/user.dart';
import 'package:codingera2/provider/user_provider.dart';
import 'package:codingera2/services/manage_http_request.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../views/screens/main_screen.dart' show MainScreen;

class AuthController {

  //sign up
  Future<void> signUpUser({
    required context,
    required String fullname,
    required String email,
    required String password,
    required WidgetRef ref
})async{

    User user = User(
        id: '',
        fullname: fullname,
        email: email,
        state: '',
        city: '',
        locality: '',
        hobbies: '',
        laptopname: '',
        password: password,
        token: ''
    );

    http.Response response = await http.post(
        Uri.parse('$uri/api/signup'),
      body: user.toJson(),
      headers: <String,String> {
          'Content-Type':'application/json; charset=UTF-8'
      }
    );

    manageHttpResponse(response: response, context: context, onsuccess: (){
      showSnackbar(context, "Account is created with the same credential!");
    });

  }


  // sign in
  Future<void> signInUsers({
    required context,
    required String email,
    required String password,
    required WidgetRef ref
  }) async {
    try {

      http.Response response = await http.post(
          Uri.parse('$uri/api/signin'),
        body: jsonEncode({
          'email':email,
          'password':password,
        }),
        headers: <String,String>{
            'Content-Type':'application/json; charset=UTF-8'
        }
      );

      manageHttpResponse(response: response, context: context, onsuccess: ()async{
        SharedPreferences preferences = await SharedPreferences.getInstance();
        ref.read(userProvider.notifier).setUser(response.body);
        await preferences.setString('auth-token', jsonDecode(response.body)['token']);
        Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context)=>MainScreen()), (route)=>false);
      });

    } catch (e) {
      showSnackbar(context, e.toString());
    }
  }

  // getUserData
  void getUserData(BuildContext context,WidgetRef ref) async{
    try{
      SharedPreferences preferences = await SharedPreferences.getInstance();
      String? token = preferences.getString('auth-token');
      if(token==null){
        preferences.setString('auth-token', '');
      }

      http.Response tokenResponse = await http.post(
          Uri.parse('$uri/api/tokenIsValid'),
        headers: <String,String>{
            'Content-Type':'application/json; charset=UTF-8',
            'auth-token':token!
        }
      );

      final response = jsonDecode(tokenResponse.body);
      if(response==true){
        http.Response userResponse = await http.get(
            Uri.parse('$uri/'),
          headers: <String,String>{
              'Content-Type':'application/json; charset=UTF-8',
            'auth-token':token
          }
        );

        ref.read(userProvider.notifier).setUser(userResponse.body);
      }
    }
    catch(e){
      showSnackbar(context, e.toString());
    }
  }

  // sign out



}
