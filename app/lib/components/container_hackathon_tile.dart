import 'package:flutter/material.dart';

class ContainerTile extends StatelessWidget {
  final String title;
  final String subtitle;
  const ContainerTile({super.key,required this.title,required this.subtitle});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 180,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white)
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(title,textAlign: TextAlign.center,style: TextStyle(fontWeight: FontWeight.bold,color: Colors.white,fontSize: 20),),
          Text(subtitle,style: TextStyle(fontWeight: FontWeight.bold,color: Colors.white,fontSize: 18),)
      ]),
    );
  }
}
