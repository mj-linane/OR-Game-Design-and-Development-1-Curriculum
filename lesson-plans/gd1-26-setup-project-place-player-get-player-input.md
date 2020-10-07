---
title: 'Lesson 26: Setup Project, Place Player, Get Player Input'
---
1. Introduction

### New Functionality

- The player can move left and right based on the user’s left and right key presses
- The player will not be able to leave the play area on either side

### New Concepts &amp; Skills

- Adjust object scale
- If-statements
- Greater/Less than operators

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345549587?app_id=122963" width="100%"></iframe></figure>2. Create a new Project for Prototype 2

*The first thing we need to do is create a new project and import the Prototype 2 starter files.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057294?app_id=122963" width="100%"></iframe></figure>1. Open **Unity Hub** and create a **New** project named “Prototype 2” in your H drive course directory
1. Click on the **link** to access the Prototype 2 starter files,[ Prototype 2 – Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-prototype-2-feed-the-animals-146037?_ga=2.19052920.151578798.1573139372-2125127897.1570533414), then **import** them into Unity
2. Open the **Prototype 2 scene** and **delete** the SampleScene without saving
3. In the top-right of the Unity Editor, change your Layout from **Default** to your custom layout

3.Add the Player, Animals, and Food

*Let’s get all of our objects positioned in the scene, including the player, animals, and food.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057307?app_id=122963" width="100%"></iframe></figure>1. If you want, drag a different **material** from *Course Library &gt; Materials* onto the Ground object
1. Drag 1 **Human**, 3 **Animals**, and 1 **Food** object into the Hierarchy
2. Rename the character “Player”, then **reposition** the animals and food so you can see them
3. Adjust the XYZ **scale** of the food so you can easily see it from above

4. Get the user’s horizontal input

*If we want to move the Player left-to-right, we need a variable tracking the user’s input.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057328?app_id=122963" width="100%"></iframe></figure>1. In your **Assets** folder, create a “Scripts” folder, and a “PlayerController” script inside
1. **Attach** the script to the Player and open it
2. At the top of PlayerController.cs, declare a new ***public float horizontalInput***
3. In ***Update()***, set ***horizontalInput = Input.GetAxis(“Horizontal”)***, then test to make sure it works in the inspector

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190621/learn/images/546250cd-fc1b-4d31-acbc-354d64c91c46_Screen_Shot_2019_06_21_at_11.59.37_AM.png)</figure></div>5. Move the player left-to-right
--------------------------------

*We have to actually use the horizontal input to translate the Player left and right.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057346?app_id=122963" width="100%"></iframe></figure>1. Declare a new ***public float speed = 10.0f;***
2. In ***Update()***, Translate the player side-to-side based on ***horizontalInput*** and ***speed***

[](https://connect-prd-cdn.unity.com/20190621/learn/images/f3d6b526-f65d-4c5e-a7dd-d700fa92e26a_Screen_Shot_2019_06_21_at_12.01.02_PM.png)
6. Keep the player inbounds
----------------------------

*We have to prevent the player from going off the side of the screen with an if-then statement.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057363?app_id=122963" width="100%"></iframe></figure>1. In ***Update()***, write an **if-statement** checking if the player’s left X position is **less than** a certain value
1. In the if-statement, set the player’s position to its current position, but with a **fixed X location**

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190621/learn/images/99fa70e7-48b6-4877-85c5-161d0261f2b5_Screen_Shot_2019_06_21_at_11.57.13_AM.png)</figure></div>7. Clean up your code and variables
-----------------------------------

*We need to make this work on the right side, too, then clean up our code.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057386?app_id=122963" width="100%"></iframe></figure>1. Repeat this process for the **right side** of the screen
2. Declare new ***xRange*** variable, then replace the hardcoded values with them
3. Add **comments** to your code

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190621/learn/images/09d30ead-e943-49fe-b854-4d94a18e33ab_Screen_Shot_2019_06_21_at_11.58.04_AM.png)</figure></div>8. Lesson Recap
---------------

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057438?app_id=122963" width="100%"></iframe></figure>
