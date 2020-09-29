---
title: 'Lesson 32: Setup Project, Add Player, Add Obstacles, Code Movement'
---

## 1. Introduction

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345549744?app_id=122963" width="100%"></iframe></figure>### **Overview**

The goal of this lesson is to set up the basic gameplay for this prototype. We will start by creating a new project and importing the starter files. Next we will choose a beautiful background and a character for the player to control, and allow that character to jump with a tap of the spacebar. We will also choose an obstacle for the player, and create a spawn manager that throws them in the player’s path at timed intervals.

### Project Outcome

The character, background, and obstacle of your choice will be set up. The player will be able to press spacebar and make the character jump, as obstacles spawn at the edge of the screen and block the player’s path.

### New Functionality

- Player jumps on spacebar press
- Player cannot double-jump
- Obstacles and Background move left
- Obstacles spawn on intervals

### Key Concepts and Skills

- GetComponent
- ForceMode.Impulse
- Physics.Gravity
- Rigidbody constraints
- Rigidbody variables
- Booleans
- Multiply/Assign (“\*) Operator

2. Open prototype &amp; change background
-----------------------------------------

*The first thing we need to do is set up a new project, import the starter files, and choose a background for the game.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345494068?app_id=122963" width="100%"></iframe></figure>1. Open **Unity Hub** and create a new project called “Unity — Sound and Effects ” project in your H:/ drive.
2. Click on the **link** to access the starter files: [https://assetstore.unity.com/packages/templates/tutorials/create-with-code-prototype-3-run-and-jump-146039?\_ga=2.30448511.1913813413.1575476505-2125127897.1570533414](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-prototype-3-run-and-jump-146039?_ga=2.30448511.1913813413.1575476505-2125127897.1570533414)
3. Then **download and import** them into Unity
4. Open the Prototype 3 scene and **delete** the **Sample Scene** without saving
5. Select the **Background object** in the hierarchy, then in the **Sprite Renderer** *component &gt; Sprite,* select the *\_City, \_Nature, or \_Town image*

3. Choose and set up a player character
---------------------------------------

*Now that we’ve started the project and chosen a background, we need to set up a character for the player to control.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345494130?app_id=122963" width="100%"></iframe></figure>1. From *Course Library &gt; Characters*, **Drag** a character into the hierarchy, **rename** **it** “Player”, then **rotate it** on the Y axis to face to the right
2. Add a **Rigid Body** component
3. Add a **box collider**, then **edit** the collider bounds
4. Create a new “Scripts” folder in Assets, create a “PlayerController” C# script inside, and **attach** it to the player

4. Make player jump at start
----------------------------

*Until now, we’ve only called methods on the entirety of a gameobject or the transform component. If we want more control over the force and gravity of the player, we need to call methods on the player’s Rigidbody component, specifically.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345494256?app_id=122963" width="100%"></iframe></figure>1. In **PlayerController.cs**, declare a new ***private Rigidbody playerRb;*** variable
2. In ***Start()***, initialize ***rigidRb = GetComponent&lt;Rigidbody&gt;();***
3. In ***Start()***, use the AddForce method to make the player jump at the start of the game

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190529/learn/images/4afd900b-4152-4d3c-abdc-992e5697784c_3.1_3.PNG)</figure></div>5. Make player jump if spacebar pressed
---------------------------------------

*We don’t want the player jumping at start – they should only jump when we tell it to by pressing spacebar.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345494306?app_id=122963" width="100%"></iframe></figure>1. In **Update()** add an **if-then statement** checking if the spacebar is pressed
2. **Cut and paste** the `AddForce` code from `Start()` into the if-statement
3. Add the ***`ForceMode.Impulse`*** parameter to the ***`AddForce`*** call, then **reduce** force multiplier value

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190529/learn/images/d4821e78-6086-485e-97a4-570dcf9117db_3.1_4.PNG)</figure></div>6. Tweak the jump force and gravity
-----------------------------------

*We need give the player a perfect jump by tweaking the force of the jump, the gravity of the scene, and the mass of the character.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345494346?app_id=122963" width="100%"></iframe></figure>1. **Replace** the hardcoded value with a new ***public float jumpForce*** variable
2. Add a new ***public float gravityModifier*** variable and in ***Start()***, add ***Physics.gravity \*= gravityModifier;***
3. In the inspector, tweak the ***gravityModifer****,* ***jumpForce***, and **Rigibody** mass values to make it fun

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190529/learn/images/e03247cb-f20f-4dab-848f-f4e34c506296_3.1_5.PNG)</figure></div>All Done?
----------

Try modifying your game by:

1. Adding gravity to other objects and modifying that gravity.