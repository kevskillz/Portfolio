---
title: 'NarCompass - From Hackathon Project to Pitching to Investors'
status: 'published'
publishedAt: '2024-11-24T15:45:00.000Z'
featured: 'yes'
tags: 'full-stack, mobile app, React, AWS, GraphQL, project'
description: "We won PennApps with NarCompass, and we didn't stop there."
author:
  name: 'Kevin Lobo'
  picture: ''
coverImage: ''
slug: 'narcompass'
---

![NarCompass Logo](/images/narcompass/narcompass.png)

# NarCompass: Life-Saving Connections

NarCompass connects Narcan carriers with overdose victims instantly to save lives.

Check it out on [Github](https://github.com/kevskillz/narcompass/).

Try it out online with [this link](https://appetize.io/app/an43t7zeehs2cytt2jkrgftkxm?device=pixel7&osVersion=13.0).
More information on [How to Run](#how-to-run) is below.

Here is a [link to our demo](https://youtu.be/jBM4NVu7nOk), and here is a [link to our pitch deck](https://docs.google.com/presentation/d/1LEqF48j-76JbAQIIsNgLUkIvx-FbFf2dSDzfHUJvrJM/view).

## 🛠 Tech Stack

- **React Native**: For building the mobile application.
- **AWS Amplify**: For backend services and cloud integration.
- **GraphQL**: For API queries and mutations.
- **Expo**: For development and deployment.
- **Tensorflow**: Train ML custom ML model to determine overdose status based on smartwatch readings.
- **Express**: Creat a RESTful API to query ML model from our app.

## Features

Our app uses the Google Maps API to display Narcan carriers and overdosers.

![recent](/images/narcompass/recent_od.png)

Once the carrier decides to help on the app, it draws the quickest route to the overdoser. It also features a notification system for the carriers and overdosers indicating that someone is on the way and how close they
are from you.

![route](/images/narcompass/route.png)

Each incident also has detailed information to ensure that the Narcan carrier is ready to help.

![info](/images/narcompass/info.png)

This is experimental, but we also trained a model on data that can be gathered from a smartwatch device to detect overdoses
and alert for help.

![od](/images/narcompass/healthy.png)


## The Story

### PennApps

We started NarCompass as a team of highschooler's competing at PennApps, UPenn's hackathon. We were
pretty overwhelmed at the start, going against top college students from across the world, but we
used that kind-of as fuel to push ourselves. We were the underdogs, but Philly was our home, and we
used that to our advantage.

![PennApps](/images/narcompass/pennapps.jpg)

As our team started brainstorming, I brought up Narcan's recent over-the-counter access. Now that it was more accessible, it sparked the question: could we connect overdosers to Narcan carriers quicker? Philadelphia is known for its slow ambulance response times and high overdose rates, and any minute we could save could be the difference between life and death.

NarCompass was born - an app where users can alert overdoses to registered Narcan carriers. Carriers who accept the alert have a route seamlessly mapped out, complete with shared contact information and live updates between users as they approach the location.

And it was great! We won top 5 OVERALL and the Wolfram Award! [Here is our DevPost](https://devpost.com/software/narcompass) if you
wanna check it out.

### Feedback from FDA, Department of Public Health, Penn Medicine, and More!

At this stage, I agree, our app was ugly, but now we had the confirmation
that our idea could and should be pursued further and improved upon.

Engineering relies on iteration. Right after our success at PennApps, I reached out to Dr. Perrone from Penn Medicine and Ms. Sage from Prevention Point. They both mentioned a population of overdosers that our app failed to address: those that happen alone at home. With them, we are developing functionality to alert overdoses with health indicators from a smartwatch, as well as adding interactive instructions so anyone can learn how to administer Narcan. I've fostered connections with the FDA and the Philadelphia Department of Public Health, with upcoming meetings scheduled to explore how our app can collaborate with emergency services and save lives in the city I call home.

![Testimonials](/images/narcompass/testimonials.png)

### Diamond Challenge

We then submitted it to the Diamond Challenge, hearing about it from a teacher. We knew we would have a good shot, 
despite it being a more business competition rather than an app one.

We heard back from them, and we were ecstatic to learn that we moved on to the semifinals as ONE OF EIGHT teams in the region!
The next step was to pitch our app live at the University of Delaware to a set of investors! We prepped for hours every day, perfecting our pitch. Pitching, I learned, is an art, a craft, and creating and practicing this pitch helped me gain both
technical and business experience. 

![PennApps](/images/narcompass/diamond.JPG)

Then came the day where we had to go to UDel. It felt pretty nice to skip a day of high school to do something super cool like
pitch my own app! We got to UDel, shook out the nerves, and pitched our app!


We aced our pitch and the questions we got asked. However, while we unfortunately did not win this event, it was great experience to pitch an app to business professionals and gain more feedback!

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