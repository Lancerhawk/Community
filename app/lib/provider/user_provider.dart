import 'package:codingera2/models/user.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class UserProvider extends StateNotifier<User?> {
  UserProvider()
    : super(
        User(
          id: '',
          fullname: '',
          email: '',
          state: '',
          city: '',
          locality: '',
          hobbies: '',
          laptopname: '',
          password: '',
          token: '',
        ),
      );

  User? get user => state;

  void setUser(String userJson) {
    state = User.fromJson(userJson);
  }


  void recreateUserState({
    required String fullname,
    required String newstate,
    required String city,
    required String locality,
    required String hobbies,
    required String laptopname,
}){
    if(state != null){
      state = User(
          id: this.state!.id,
          fullname: fullname,
          email: this.state!.email,
          state: newstate,
          city: city,
          locality: locality,
          hobbies: hobbies,
          laptopname: laptopname,
          password: this.state!.password,
          token: this.state!.token
      );
    }
  }



  void signOut() {
    state = null;
  }


}

final userProvider = StateNotifierProvider<UserProvider, User?>(
  (ref) => UserProvider(),
);
