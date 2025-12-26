import 'package:codingera2/views/widgets/club_widget.dart';
import 'package:flutter/material.dart';

class ClubScreen extends StatefulWidget {
  const ClubScreen({super.key});

  @override
  State<ClubScreen> createState() => _ClubScreenState();
}

class _ClubScreenState extends State<ClubScreen> {
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Text("Our Clubs",style: TextStyle(fontSize: 40,fontWeight: FontWeight.bold,color: Colors.white),),
              ClubWidget()
            ],
          ),
        ),
      ),
    );
  }
}