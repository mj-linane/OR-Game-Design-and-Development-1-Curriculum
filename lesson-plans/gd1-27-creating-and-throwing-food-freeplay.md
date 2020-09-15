---
title: 'Lesson 27: Creating and Throwing Food / Freeplay'
date: '2019-11-13T14:44:22-05:00'
status: publish
permalink: /lessons/lesson-27-creating-and-throwing-food-freeplay
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26575
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'November 17, 2019 @ 2:49 pm'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
ld_course_25474:
    - '25474'
site-sidebar-layout:
    - default
site-content-layout:
    - default
theme-transparent-header-meta:
    - default
stick-header-meta:
    - default
---
Code from Last Class
--------------------

If you feel behind or were absent, here is the code we wrote in the previous class.

<https://github.com/mj-linane/OR-Unity-Scripts/blob/master/Create%20With%20Code%20Scripts/Basic%20Gameplay/PlayerController.cs>

Overview
--------

 In this lesson, you will allow the player to launch the projectile through the scene. First you will write a new script to send the projectile forwards. Next you will store the projectile along with all of its scripts and properties using an important new concept in Unity called Prefabs. The player will be able to launch the projectile prefab with a tap of the spacebar. Finally, you will add boundaries to the scene, removing any objects that leave the screen.

New Functionality
-----------------

- The player can press the Spacebar to launch a projectile prefab,
- Projectile and Animals are removed from the scene if they leave the screen

New Concepts &amp; Skills
-------------------------

- Create Prefabs
- Override Prefabs
- Test for Key presses
- Instantiate objects
- Destroy objects
- Else-if statements

1. Introduction
---------------

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345549625?app_id=122963" width="100%"></iframe></figure>2. Make the projectile fly forwards
-----------------------------------

*The first thing we must do is give the projectile some forward movement so it can zip across the scene when it’s launched by the player.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057379?app_id=122963" width="100%"></iframe></figure>1. Create a new “MoveForward” script, **attach** it to the food object, then open it
2. Declare a new ***public float speed*** variable***;***
3. In ***Update()***, add ***transform.Translate(Vector3.forward \* Time.deltaTime \* speed);***, then **save**
4. In the **Inspector**, set the projectile’s **speed** variable, then test

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190529/learn/images/b41957b7-b0c1-450b-b9cd-92641d017a64_2.2_1.PNG)</figure></div>3.Make the projectile into a prefab
-----------------------------------

*Now that our projectile has the behavior we want, we need to make it into a prefab it so it can be reused anywhere and anytime, with all its behaviors included.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057430?app_id=122963" width="100%"></iframe></figure>1. Create a new “Prefabs” folder, drag your food into it, and choose **Original Prefab**
2. In PlayerController.cs, declare a new ***public GameObject projectilePrefab;*** variable at the top of the class.
3. **Select** the Player in the hierarchy, then **drag** the object from your Prefabs folder onto the new **Projectile Prefab box** in the inspector
4. Try **dragging** the projectile into the scene at runtime to make sure they fly

4. Test for spacebar press
--------------------------

*Now that we have a projectile prefab assigned to PlayerController.cs, the player needs a way to launch it with the space bar.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057474?app_id=122963" width="100%"></iframe></figure>1. In PlayerController.cs, in ***Update()***, add an **if-statement** checking for a spacebar press: ***if (Input.GetKeyDown(KeyCode.Space)) {***
2. Inside the if-statement, add a comment saying that you should ***// Launch a projectile from the player***

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/1a45908a-318d-4b09-8b95-0482eb511333_2_2_3.png)</figure></div>5. Launch projectile on spacebar press
--------------------------------------

*We’ve created the code that tests if the player presses spacebar, but now we actually need spawn a projectile when that happens*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057506?app_id=122963" width="100%"></iframe></figure>1. Inside the if-statement, use the **Instantiate** method to spawn a projectile at the player’s location with the prefab’s rotation

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/5603976d-6611-42fc-9732-7c3c680f7461_2_2_4.png)</figure></div>6. Make animals into prefabs
----------------------------

*The projectile is now a prefab, but what about the animals? They need to be prefabs too, so they can be instantiated during the game.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057525?app_id=122963" width="100%"></iframe></figure>1. **Rotate** all animals on the Y axis by **180 degrees** to face down
2. **Select** all three animals in the hierarchy and *Add Component &gt;* ***Move Forward***
3. Edit their **speed values** and **test** to see how it looks
4. Drag all three animals into the **Prefabs folder**, choosing “Original Prefab”
5. **Test** by dragging prefabs into scene view during gameplay

7.Destroy projectiles offscreen
-------------------------------

*Whenever we spawn a projectile, it drifts past the play area into eternity. In order to improve game performance, we need to destroy them when they go out of bounds.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057556?app_id=122963" width="100%"></iframe></figure>1. Create “DestroyOutOfBounds” script and apply it to the **projectile**
2. Add a new ***private float topBound*** variable and initialize it ***= 30;***
3. Write code to destroy if out of top bounds ***if (transform.position.z &gt; topBound) {******Destroy(gameObject); }***
4. In the Inspector **Overrides** drop-down, click **Apply all** to apply it to prefab

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/8013cad3-22bf-4ab7-bd93-f98ada66104f_2_2_6.png)</figure></div>8.Destroy animals offscreen
---------------------------

*If we destroy projectiles that go out of bounds, we should probably do the same for animals. We don’t want critters getting lost in the endless abyss of Unity Editor…*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057581?app_id=122963" width="100%"></iframe></figure>1. Create **else-if statement** to check if objects are beneath ***lowerBound***: ***else if (transform.position.z &gt; topBound)***
2. **Apply** the script to all of the animals, then **Override** the prefabs

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/2dcb0a48-4095-4419-a7b3-c20b3af20c27_2_2_7.png)</figure></div>