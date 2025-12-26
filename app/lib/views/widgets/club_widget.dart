import 'package:codingera2/controllers/club_controller.dart';
import 'package:codingera2/models/club.dart';
import 'package:flutter/material.dart';

class ClubWidget extends StatefulWidget {
  const ClubWidget({super.key});

  @override
  State<ClubWidget> createState() => _ClubWidgetState();
}

class _ClubWidgetState extends State<ClubWidget> {
  late Future<List<Club>> futureClub;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    futureClub = ClubController().loadClub();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: futureClub,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return Center(child: CircularProgressIndicator(color: Colors.white));
        } else if (snapshot.hasError) {
          return Center(
            child: Text(
              "Error: ${snapshot.error}",
              style: TextStyle(color: Colors.redAccent),
            ),
          );
        } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
          return Center(
            child: Text(
              "No Hackathons Available",
              style: TextStyle(color: Colors.white),
            ),
          );
        } else {
          final clubs = snapshot.data;
          return ListView.builder(
            shrinkWrap: true,
            physics: NeverScrollableScrollPhysics(),
            itemCount: clubs!.length,
            itemBuilder: (context, index) {
              final club = clubs[index];
              return Padding(
                padding: const EdgeInsets.all(15.0),
                child: Container(
                  width: MediaQuery.of(context).size.width,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                       const Color.fromARGB(255, 38, 187, 255),
                        const Color.fromARGB(255, 12, 33, 81),
                      ],
                    ),
                    border: Border.all(color: Colors.white),
                    borderRadius: BorderRadius.circular(20),
                  ),

                  child: Column(
                    children: [
                      Text(
                        club.clubname,
                        style: TextStyle(
                          fontSize: 40,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      Text(
                        club.techname,
                        style: TextStyle(
                          fontSize: 25,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                        ),
                        textAlign: TextAlign.center,
                      ),

                      Text(
                        club.desc,
                        style: TextStyle(
                          fontWeight: FontWeight.w600,
                          color: Colors.white,
                          fontSize: 16,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      SizedBox(height: 10,),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                        GestureDetector(
                          onTap: (){
                            showDialog(
                              barrierDismissible: true,
                                context: context,
                                builder: (context){
                              return AlertDialog(

                                shadowColor: Colors.white,
                                elevation: 30,
                                backgroundColor: Theme.of(context).colorScheme.primary,
                                content: SingleChildScrollView(
                                  child: Column(
                                    mainAxisSize: MainAxisSize.max,
                                    children: [
                                      Text("Club Leadership",style: TextStyle(fontSize: 36,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                      Divider(color: Colors.cyanAccent,),
                                      const SizedBox(height: 20,),
                                      Text("Club Leader: ${club.clubLeader}",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                      Text("Club Manager: ${club.clubManager}",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                  
                                      SizedBox(height: 20,),
                                      Text(club.detailDec,style: TextStyle(fontSize: 18,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                      SizedBox(height: 20,),
                                      Text("Club Rules",style: TextStyle(fontSize: 36,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                      Divider(color: Colors.cyanAccent,indent: 50,endIndent: 50,),
                                      SizedBox(height: 20,),
                                      Text(club.clubRule,style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                      SizedBox(height: 20,),
                                      Text("Club Activities",style: TextStyle(fontSize: 36,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                      Divider(color: Colors.cyanAccent),
                                      SizedBox(height: 20,),
                                      Text(club.clubActivities,style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,color: Colors.white),textAlign: TextAlign.start,),
                                      SizedBox(height: 20,),
                                    ],
                                  ),
                                ),
                              );
                            });
                          },
                          child: Container(
                          height: 50,
                          width: 120,
                          decoration: BoxDecoration(
                              gradient: LinearGradient(colors: [
                                const Color.fromARGB(255, 38, 187, 255),
                                const Color.fromARGB(255, 12, 33, 81),
                              ]),
                              borderRadius: BorderRadius.circular(20)
                          ),
                          child: Center(child: Text("More Details",style: TextStyle(fontWeight: FontWeight.bold,color: Colors.white),),),
                                                ),
                        ),
                          SizedBox(width: 20,),
                          GestureDetector(onTap: () {}, child: Container(
                            height: 50,
                            width: 120,
                            decoration: BoxDecoration(
                                gradient: LinearGradient(colors: [
                                  const Color.fromARGB(255, 38, 187, 255),
                                  const Color.fromARGB(255, 12, 33, 81),
                                ]),
                                borderRadius: BorderRadius.circular(20)
                            ),
                            child: Center(child: Text("Join Now",style: TextStyle(fontWeight: FontWeight.bold,color: Colors.white),),),
                          )),
                        ],
                      ),
                      SizedBox(height: 20,)
                    ],
                  ),
                ),
              );
            },
          );
        }
      },
    );
  }
}
