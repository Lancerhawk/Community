import 'package:codingera2/components/container_button.dart';
import 'package:codingera2/components/text_fields.dart';
import 'package:codingera2/controllers/auth_controller.dart';
import 'package:codingera2/views/screens/authentication/login_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lottie/lottie.dart';

class RegisterScreen extends ConsumerStatefulWidget {


  RegisterScreen({super.key});

  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends ConsumerState<RegisterScreen> {
  final AuthController _authController = AuthController();

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  TextEditingController emailController = TextEditingController();

  TextEditingController passwordController = TextEditingController();

  TextEditingController fullNameController = TextEditingController();

  void signUpUser()async{
    await _authController.signUpUser(
        context: context,
        fullname: fullNameController.text,
        email: emailController.text.trim(),
        password: passwordController.text.trim(),
        ref: ref
    );
  }

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      backgroundColor: Colors.grey[300],
      body: SafeArea(
        child: SingleChildScrollView(
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(height: 50,),
                Text(
                  "Create an Account!",
                  style: GoogleFonts.getFont(
                      "Lato",
                      color: Colors.black87,
                      fontWeight: FontWeight.bold,
                      fontSize: 23,
                      letterSpacing: 1.5
                  ),
                ),
                Text("To explore the world exclusive",
                  style: GoogleFonts.getFont(
                      "Lato",
                      color: Colors.black87,
                      fontWeight: FontWeight.bold,
                      fontSize: 15,
                      letterSpacing: 1.5
                  ),
                ),
                SizedBox(height: 20,),
                Lottie.asset("assets/animations/registeranimation.json",height: 200,width: 200),
                SizedBox(height: 20,),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20.0),
                  child: Row(
                    children: [
                      Icon(FontAwesomeIcons.person),
                      SizedBox(width: 10,),
                      Text("Full Name",
                        style: TextStyle(
                            color: Colors.black87,
                            fontWeight: FontWeight.bold,
                            fontSize: 26
                        ),),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 12.0),
                  child: TextFields(
                    validator: (value){
                      if(value!.isEmpty){
                        return "Please enter your full name";
                      }
                      else {
                        return null;
                      }
                    },
                      controller: fullNameController,
                      hinttext: "Enter your full name here..."
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20.0),
                  child: Row(
                    children: [
                      Icon(FontAwesomeIcons.mailBulk),
                      SizedBox(width: 10,),
                      Text("email",
                        style: TextStyle(
                            color: Colors.black87,
                            fontWeight: FontWeight.bold,
                            fontSize: 26
                        ),),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 12.0),
                  child: TextFields(
                    validator: (value){
                      if(value!.isEmpty){
                        return "Please enter your email";
                      }
                      else{
                        return null;
                      }
                    },
                      controller: emailController,
                      hinttext: "Enter the email here..."
                  ),
                ),

                Padding(
                  padding: const EdgeInsets.symmetric(horizontal:20.0),
                  child: Row(
                    children: [
                      Icon(FontAwesomeIcons.lock),
                      SizedBox(width: 10,),
                      Text("password",
                        style: TextStyle(
                            color: Colors.black87,
                            fontWeight: FontWeight.bold,
                            fontSize: 26
                        ),),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 12.0),
                  child: TextFields(
                    validator: (value){
                      if(value!.isEmpty){
                        return "Please enter your password";
                      }
                      else {
                        return null;
                      }
                    },
                      controller: passwordController,
                      hinttext: "Enter the password here..."
                  ),
                ),
                SizedBox(height: 20,),

                Text("Forgot password?",
                  style: TextStyle(
                      color: Colors.lightBlue,
                      fontWeight: FontWeight.bold,
                      fontSize: 18
                  ),
                ),

                SizedBox(height: 20,),

                GestureDetector(
                  onTap: () async{
                    if(_formKey.currentState!.validate()) {
                      signUpUser();
                    }

                  },
                  child: ContainerButton(
                    height: 60,
                    width: 350,
                    text: "Sign-up",
                  ),
                ),

                SizedBox(height: 10,),

                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("Already have an account?",style:GoogleFonts.roboto(
                        color: Colors.black87,
                        fontSize: 18,
                        fontWeight: FontWeight.bold
                    ),),
                    SizedBox(width: 10,),
                    GestureDetector(
                      onTap: (){
                        Navigator.pushReplacement(context,
                            MaterialPageRoute(builder: (context)=>LoginScreen())
                        );
                      },
                      child: Text("Sign-in",
                        style:GoogleFonts.roboto(
                            color: Colors.lightBlue,
                            fontSize: 18,
                            fontWeight: FontWeight.bold
                        ),),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
