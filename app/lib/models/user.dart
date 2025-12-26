// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class User {
    final String id;
    final String fullname;
    final String email;
    final String state;
    final String city;
    final String locality;
    final String hobbies;
    final String laptopname;
    final String password;
    final String token;

  User({
    required this.id,
    required this.fullname,
    required this.email,
    required this.state,
    required this.city,
    required this.locality,
    required this.hobbies,
    required this.laptopname,
    required this.password,
    required this.token
  });


  User copyWith({
      String? id,
    String? fullname,
    String? email,
    String? state,
    String? city,
    String? locality,
    String? hobbies,
    String? laptopname,
    String? password,
    String? token
}){
    return User(
        id: this.id,
        fullname: fullname ?? this.fullname,
        email: email ?? this.email,
        state: state ?? this.state,
        city: city ?? this.city,
        locality: locality ?? this.locality,
        hobbies: hobbies ?? this.hobbies,
        laptopname: laptopname ?? this.laptopname,
        password: this.password,
        token: this.token
    );
  }






  // Serialization: Convert user object to a map 
  // Map : map is a collection of Key-values pairs
  // why : Converting to a map is an intermediate step that makes it easier to serialize
  //       the object to formates like Json for storage or transmission.
  
  Map<String , dynamic> toMap(){
    return  {
        'id':id,
        'fullname':fullname,
        'email':email,
        'state':state,
        'city':city,
        'locality':locality,
      'hobbies':hobbies,
      'laptopname':laptopname,
        'password':password,
      'token':token
    };
  }
  // Serialization : Convert Map to a Json String 
  // This method directly encodes the data from the Map into a Json String
  // The json.encodes function converts a dart object(such as Map or List) 
  // into a Json String representation , making it suitable for communication 
  // between different systems.
  String toJson() => json.encode(toMap());


  // Deserialization : Converts a Map to a User Objects
  // purpose - Manipulation and user : Once the data is converted to a User object
  //           it can be easily manipulated and use within the application. for example 
  //           we might want to display the user's fullname,email etc.. on the UI OR we might 
  //           want to save the data locally.

  // the factory constructor take a Map (Usually obtained from a Json object)
  // and convert it into a User object and if a field is not present in the map,
  // then it defaults to an empty String.

  factory User.fromMap(Map<String, dynamic> map){
    return User(
      id: map['_id'] as String ? ?? '',
      fullname: map['fullname'] as String ? ?? '',
      email: map['email'] as String ? ?? '',
      state: map['state'] as String ? ?? '',
      city: map['city'] as String ? ?? '',
      locality: map['locality'] as String ? ?? '',
      hobbies: map['hobbies'] as String ? ?? '',
      laptopname: map['laptopname'] as String ? ?? '',
      password: map['password'] as String ? ?? '',
      token: map['token'] as String ? ?? ''
    );
  }

  /*
    fromJson : This factory constructor takes a Json String and then decode
    into a Map<String,dynamic> and then uses fromMap to convert that Map into User object.
     */

  factory User.fromJson(String source) => User.fromMap(json.decode(source));



}
