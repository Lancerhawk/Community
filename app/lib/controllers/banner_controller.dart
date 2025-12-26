import 'dart:convert';

import 'package:codingera2/global_variable.dart';
import 'package:codingera2/models/banner.dart';
import 'package:http/http.dart' as http;

class BannerController {
  // load banners...
  Future<List<BannerModel>> loadBanner() async {
    try {
      // send an http request to fetch the banners

      http.Response response = await http.get(
        Uri.parse('$uri/api/banner'),
        headers: <String, String>{
          "Content-Type": "application/json; charset=UTF-8",
        },
      );

      print(response.body);

      if (response.statusCode == 200) {
        List<dynamic> data = jsonDecode(response.body);
        List<BannerModel> banner =
            data.map((banner) => BannerModel.fromJson(banner)).toList();
        return banner;
      } else {
        throw Exception("Unable to load banners");
      }
    } catch (e) {
      throw Exception("Failed to load banners");
    }
  }
}
