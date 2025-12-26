import 'package:codingera2/components/alert_dialog_warning.dart';
import 'package:codingera2/components/container_for_homescreen.dart';
import 'package:codingera2/controllers/auth_controller.dart';
import 'package:codingera2/views/widgets/banner_widget.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final AuthController _authController = AuthController();

  void logOut(){
    showDialog(context: context, builder: (context){
      return AlertDialogWarning(title: Text("Do You Really Want To LogOut?"), content: Text("Press Confirm To LogOut!"), onSave: (){
        //_authController.signOutUser(context: context);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        leading: Builder(builder: (context)=>IconButton(onPressed: (){
          Scaffold.of(context).openDrawer();
        }, icon: Icon(FontAwesomeIcons.bars)),),
        title: Text(
          "CODING ERA",
          style: TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.white,
            fontSize: 36,
          ),
        ),
        iconTheme: IconThemeData(color: Colors.white),
        backgroundColor: Colors.transparent,
      ),

      drawer: Drawer(
        width: 250,
        backgroundColor: Theme.of(context).colorScheme.primary,
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Center(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.asset(
                    "assets/images/coding era logo.jpg",
                    height: 200,
                    width: 200,
                    fit: BoxFit.fill,
                  ),
                ),
              ),

              Padding(
                padding: const EdgeInsets.all(10.0),
                child: Column(
                  children: [
                    ListTile(
                      title: Text("Home"),
                      leading: Icon(FontAwesomeIcons.house),
                      textColor: Colors.white,
                      iconColor: Colors.white,
                      onTap: () {
                        Navigator.of(context).pop();
                      },
                    ),

                    ListTile(
                      title: Text("Members"),
                      leading: Icon(FontAwesomeIcons.peopleGroup),
                      textColor: Colors.white,
                      iconColor: Colors.white,
                      onTap: () async {
                        final url = Uri.parse(
                          'https://www.codingera.site/',
                        );
                        launchUrl(url, mode: LaunchMode.externalApplication);
                      },
                    ),

                    ListTile(
                      title: Text("About"),
                      leading: Icon(FontAwesomeIcons.infoCircle),
                      textColor: Colors.white,
                      iconColor: Colors.white,
                      onTap: () async {
                        final url = Uri.parse(
                          'https://www.codingera.site/about',
                        );
                        launchUrl(url, mode: LaunchMode.externalApplication);
                      },
                    ),
                  ],
                ),
              ),
              Spacer(),
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: ListTile(
                  title: Text("Logout"),
                  leading: Icon(FontAwesomeIcons.rightFromBracket),
                  textColor: Colors.white,
                  iconColor: Colors.white,
                  onTap:logOut ,
                ),
              ),
              Spacer(),
            ],
          ),
        ),
      ),
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(
                height: 250,
                child: BannerWidget(),
              ), // ✅ constrain height
              SizedBox(height: 50),
              ContainerForHomescreen(),
              SizedBox(height: 50),
            ],
          ),
        ),
      ),
    );
  }
}
