---
title: 'NarCompass - How I took my hackathon project to the next level'
status: 'published'
publishedAt: '2024-11-24T15:45:00.000Z'
featured: 'yes'
tags: 'full-stack, mobile app, AWS, API, GraphQL, project'
description: "NarCompass"
author:
  name: 'Kevin Lobo'
  picture: ''
coverImage: '/images/narcompass/narcompass.png'
slug: 'narcompass'
---

# NarCompass: Life-Saving Connections

NarCompass connects Narcan carriers with overdose victims instantly to save lives.

Check it out on [Github](https://github.com/kevskillz/narcompass/)

Try it out online with [this link](https://appetize.io/app/an43t7zeehs2cytt2jkrgftkxm?device=pixel7&osVersion=13.0).
More information on [How to Run](#how-to-run) is below.

## The Story

### PennApps

We started NarCompass as a team of highschooler's competing at PennApps, UPenn's hackathon. We were
pretty overwhelmed at the start, going against top college students from across the world, but we
used that kind-of as fuel to push ourselves. We were the underdogs, but Philly was our home, and we
used that to our advantage.

As our team started brainstorming, I brought up Narcan's recent over-the-counter access. Now that it was more accessible, it sparked the question: could we connect overdosers to Narcan carriers quicker? Philadelphia is known for its slow ambulance response times and high overdose rates, and any minute we could save could be the difference between life and death.

NarCompass was born - an app where users can alert overdoses to registered Narcan carriers. Carriers who accept the alert have a route seamlessly mapped out, complete with shared contact information and live updates between users as they approach the location.

And it was great! We won top 5 OVERALL and the Wolfram Award! Here is our DevPost if you
wanna check it out.

<iframe src="https://devpost.com/software/narcompass" width="100%" height="600px" frameborder="0"></iframe>

### Feedback from FDA, Department of Public Health, Penn Medicine, and More!

At this stage, I agree, our app was ugly, but now we had the confirmation
that our idea could and should be pursued further and improved upon.

Engineering relies on iteration. Right after our success at PennApps, I reached out to Dr. Perrone from Penn Medicine and Ms. Sage from Prevention Point. They both mentioned a population of overdosers that our app failed to address: those that happen alone at home. With them, we are developing functionality to alert overdoses with health indicators from a smartwatch, as well as adding interactive instructions so anyone can learn how to administer Narcan. I've fostered connections with the FDA and the Philadelphia Department of Public Health, with upcoming meetings scheduled to explore how our app can collaborate with emergency services and save lives in the city I call home.

![Testimonials](/images/narcompass/testimonials.png)



## 🛠 Tech Stack

- **React Native**: For building the mobile application.
- **AWS Amplify**: For backend services and cloud integration.
- **GraphQL**: For API queries and mutations.
- **Expo**: For development and deployment.
- **Tensorflow**: Train ML custom ML model to determine overdose status based on smartwatch readings.
- **Express**: Creat a RESTful API to query ML model from our app.

## 🌟 Inspiration

Philadelphia's overdose crisis has overwhelmed emergency services. Narcan, now available over-the-counter, can save lives, but civilians often don't know where overdoses are happening. Our app provides this crucial information, enabling timely civilian intervention.

## 📱 What it does

NarCompass lets victims call for help with one button, alerting hospitals and nearby Narcan carriers. It maps the quickest route for carriers to reach victims, supporting driving, walking, and biking. Callers are updated on help's progress.

Carriers can set their response range, and callers control what information is shared, stored in a cloud database for optimal response.

## How to Run

### On Android Device

If you have an Android device, follow these steps:

1. Install our executable, `NarCompass.apk`, onto your device.

### Without Android Device

If you do not have an Android device, you have a few options:

1. **Online Emulator:**
   - An easier alternative is to use [this link](https://appetize.io/app/an43t7zeehs2cytt2jkrgftkxm?device=pixel7&osVersion=13.0) to run our app online in an emulator.
   - Note: It may time out, but you can run it multiple times on the provided link.

2. **Using Android Studio:**
   - Download Android Studio and set up an emulator through the virtual device manager (e.g., Pixel).
   - Build our React Native App and drag our `NarCompass.apk` onto the emulator to install it.

3. **Using Any Android Emulator:**
   - Download any Android emulator of your choice.
   - Set the emulator to be in portrait mode.
   - Build our React Native App and drag our `NarCompass.apk` on the emulator.



