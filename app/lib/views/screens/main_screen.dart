import 'package:codingera2/views/nav_screen/club_screen.dart';
import 'package:codingera2/views/nav_screen/hackathon_screen.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../nav_screen/home_screen.dart';
import '../nav_screen/profile/profile_screen.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _selectedindex = 0;

  final List<Widget> _pages = [
    const HomeScreen(),
    const ClubScreen(),
    const HackathonScreen(),
    const ProfileScreen(),
    
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 3, 53, 134),
      body: _pages[_selectedindex],
      bottomNavigationBar: CurvedNavigationBar(
        backgroundColor: const Color.fromARGB(255, 3, 53, 134),
        color: const Color.fromARGB(255, 29, 124, 240),
        onTap: (index) {
          setState(() {
            _selectedindex = index;
          });
        },
        items: [
          Icon(FontAwesomeIcons.house,size: 30,color: Colors.white),

          Icon(FontAwesomeIcons.peopleGroup,size: 30,color: Colors.white),

          Icon(FontAwesomeIcons.code,size: 30,color: Colors.white),

          Icon(FontAwesomeIcons.user,size: 30,color: Colors.white),

        ],
      ),
    );
  }
}
