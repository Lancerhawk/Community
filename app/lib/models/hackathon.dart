import 'dart:convert';

// ignore_for_file: public_member_api_docs, sort_constructors_first
class Hackathon {
  final String id;
  final String name;
  final String image;
  final String description;
  final String eventdate;
  final String deadline;
  final int prize;
  final String venue;
  final int teamsize;
  final String level;
  Hackathon({
    required this.id,
    required this.name,
    required this.image,
    required this.description,
    required this.eventdate,
    required this.deadline,
    required this.prize,
    required this.venue,
    required this.teamsize,
    required this.level,
  });

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'name': name,
      'image': image,
      'description': description,
      'eventdate': eventdate,
      'deadline': deadline,
      'prize': prize,
      'venue': venue,
      'teamsize': teamsize,
      'level': level,
    };
  }

  factory Hackathon.fromJson(Map<String, dynamic> map) {
    return Hackathon(
      id: map['_id'] as String,
      name: map['name'] as String,
      image: map['image'] as String,
      description: map['description'] as String,
      eventdate: map['eventdate'] as String,
      deadline: map['deadline'] as String,
      prize: map['prize'] as int,
      venue: map['venue'] as String,
      teamsize: map['teamsize'] as int,
      level: map['level'] as String,
    );
  }

  String toJson() => json.encode(toMap());

}
