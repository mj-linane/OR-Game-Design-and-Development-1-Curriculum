---
title: 'Lesson 25: Player Movement &#8212; Plane Challenge (Day 2)'
date: '2019-11-07T10:15:49-05:00'
status: publish
permalink: /lessons/lesson-25-player-movement-plane-challenge-day-2
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26477
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'November 7, 2019 @ 10:20 am'
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
Introduction to Challenges
--------------------------

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/343470869?app_id=122963" width="100%"></iframe></figure>Challenge 1 Overview
--------------------

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/343071884?app_id=122963" width="100%"></iframe></figure>- Open your **Prototype 1** project
- **Download** the “Challenge 1 Starter Files” from [Challenge 1 – Asset Store](https://assetstore.unity.com/packages/slug/146043) , then double-click on it to **Import**
- In the *Project Window &gt; Assets &gt; Challenge 1 &gt;* ***Instructions*** folder, use the “Challenge 1 – Instructions” and Outcome video as a guide to complete the challenge

Problem 1: The plane is going backward
--------------------------------------

- **Make the plane go forward**

***Hint:*** *Vector3.back makes an object move backwards, Vector3.forward makes it go forwards*

Problem 2: The plane is going too fast
--------------------------------------

- **Slow the plane down to a manageable speed**

***Hint****: If you multiply a value by Time.deltaTime, it will change it from 1x/frame to 1x/second*

Problem 3: The plane is tilting automatically
---------------------------------------------

- **Make the plane tilt only if the user presses the up/down arrows**

***Hint****: In PlaneController.cs, in Update(), the verticalInput value is assigned, but it’s never actually used in the Rotate() call*

Problem 4: The camera is in front of the plane
----------------------------------------------

- **Reposition it so it’s beside the plane**

***Hint****: For the camera’s position, try X=30, Y=0, Z=10 and for the camera’s rotation, try X=0, Y=-90, Z=0*

Problem 5: The camera is not following the plane
------------------------------------------------

- **Make the camera follow the plane**

***Hint****: In FollowPlane.cs, neither the plane nor offset variables are assigned a value – assign the plane variable in the camera’s inspector and assign the offset = new Vector3(30, 0, 10) in the code*

Problem 6: The plane’s propeller does not spin
----------------------------------------------

- **Create a script that spins the plane’s propeller**

***Hint:*** *There is a “Propeller” child object of the plane – you should create a new “SpinPropellerX.cs” script and make it rotate every frame around the Z axis.*

Scoring
-------

<table class="wp-block-table alignwide"><tbody><tr><td>**50**</td><td>**70**</td><td>**85**</td><td>**100**</td></tr><tr><td>Not Started</td><td> 1-3 Problems Fixed </td><td> 4 Problems Fixed </td><td> All Problems Fixed </td></tr></tbody></table>

When Completed
--------------

Use this time as a freeplay. Expand your skills by playing with Particles, Landscape Design, or designing out different game concepts.