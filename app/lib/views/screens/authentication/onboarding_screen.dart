import 'dart:ui';

import 'package:codingera2/views/screens/authentication/on_boarding_content.dart';
import 'package:flutter/material.dart';
import 'package:rive/rive.dart' as rive;

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(
            bottom: 250,
            left: 100,
            child: Image.asset("assets/images/gradient_background.png"),
          ),
          Positioned.fill(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 20, sigmaY: 10),
              child: SizedBox(),
            ),
          ),
          rive.RiveAnimation.asset("assets/animations/onboarding_screen.riv"),
          Positioned.fill(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 20, sigmaY: 10),
              child: SizedBox(),
            ),
          ),
          rive.RiveAnimation.asset("assets/animations/onboarding_screen.riv"),
          Positioned.fill(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 50, sigmaY: 10),
              child: SizedBox(),
            ),
          ),
          OnBoardingContent(),
        ],
      ),
    );
  }
}
