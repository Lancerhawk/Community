// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class Club {
  final String image;
  final String clubname;
  final String techname;
  final String desc;
  final String clubLeader;
  final String clubManager;
  final String detailDec;
  final String clubRule;
  final String clubActivities;

  Club({
    required this.image,
    required this.clubname,
    required this.techname,
    required this.desc,
    required this.clubLeader,
    required this.clubManager,
    required this.detailDec,
    required this.clubRule,
    required this.clubActivities,
  });

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'image': image,
      'clubname': clubname,
      'techname': techname,
      'desc': desc,
      'clubLeader': clubLeader,
      'clubManager':clubManager,
      'detailDes': detailDec,
      'clubRule': clubRule,
      'clubActivities': clubActivities,
    };
  }

  factory Club.fromJson(Map<String, dynamic> map) {
    return Club(
      image: map['image'] as String,
      clubname: map['clubname'] as String,
      techname: map['techname'] as String,
      desc: map['desc'] as String,
      clubLeader: map['clubLeader'] as String ?? '',
      clubManager: map['clubManager'] as String ?? '',
      detailDec: map['detailDes'] as String ?? '',
      clubRule: map['clubRule'] as String ?? '',
      clubActivities: map['clubActivities'] as String ?? '',
    );
  }

  String toJson() => json.encode(toMap());

  
}
