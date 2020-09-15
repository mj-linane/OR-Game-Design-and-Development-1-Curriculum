---
title: 'Lesson 28: Random Animal Spawning'
date: '2019-11-14T15:01:33-05:00'
status: publish
permalink: /lessons/lesson-28-random-animal-spawning
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26597
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 12, 2020 @ 8:53 am'
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
**Overview**
------------

Our animal prefabs walk across the screen and get destroyed out of bounds, but they don’t actually appear in the game unless we drag them in! In this lesson we will allow the animals to spawn on their own, in a random location at the top of the screen. In order to do so, we will create a new object and a new script to manage the entire spawning process.

### New Functionality

- The player can press the S to spawn an animal
- Animal selection and spawn location are randomized
- Camera projection (perspective/orthographic) selected

### New Concepts &amp; Skills

- Spawn Manager
- Arrays
- Keycodes
- Random generation
- Local vs Global variables
- Perspective vs Isometric projections

1. Introduction
---------------

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345549673?app_id=122963" width="100%"></iframe></figure>2. Create a spawn manager
-------------------------

*If we are going to be doing all of this complex spawning of objects, we should have a dedicated script to manage the process, as well as an object to attach it to.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345057651?app_id=122963" width="100%"></iframe></figure>1. In the hierarchy, create an **empty object** called “SpawnManager”
2. Create a new script called “SpawnManager”, attach it to the **Spawn Manager**, and open it
3. Declare new ***public GameObject\[ \] animalPrefabs;***
4. In the inspector, change the **Array size** to match your animal count, then **assign** your animals by **dragging** them in

3. Spawn an animal if S is pressed
----------------------------------

*We’ve created an array and assigned our animals to it, but that doesn’t do much good until we have a way to spawn them during the game. Let’s create a temporary solution for choosing and spawning the animals.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345057674?app_id=122963" width="100%"></iframe></figure>1. In ***Update()***, write an if-then statement to **instantiate** a new animal prefab at the top of the screen if **S** is pressed
2. Declare a new ***public int animalIndex*** and incorporate it in the **Instantiate** call, then test editing the value in the Inspector

<figure class="wp-block-image is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/6aef28c5-ca91-414b-af2f-1adeddc60b84_2_3_2.png)</figure>4. Spawn random animals from array
----------------------------------

*We can spawn animals by pressing S, but doing so only spawns an animal at the array index we specify. We need to randomize the selection so that S can spawn a random animal based on the index, without our specification.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345057710?app_id=122963" width="100%"></iframe></figure>1. In the if-statement checking if S is pressed, generate a random ***int animalIndex*** between 0 and the length of the array
2. Remove the global ***animalIndex*** variable, since it is only needed locally in the **if-statement**

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/61490e42-d835-4f1d-bff8-933f2e59d47a_2_3_3.png)</figure></div>### Limits of Instantiate

<div class="wp-block-image">![](../../../uploads/2019/11/whatthe-650x480.png)</div>5. Randomize the spawn location
-------------------------------

*We can press S to spawn random animals from animalIndex, but they all pop up in the same place! We need to randomize their spawn position, so they don’t march down the screen in a straight line.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345057748?app_id=122963" width="100%"></iframe></figure>1. **Replace** the X value for the Vector3 with ***Random.Range(-20, 20)***, then test
2. Within the **if-statement**, make a new local ***Vector3 spawnPos*** variable
3. At the top of the class, create ***private float*** variables for ***spawnRangeX*** and ***spawnPosZ***

<figure class="wp-block-image">![](https://connect-prd-cdn.unity.com/20190529/learn/images/dace9f7f-f781-4ab8-ae03-0a49813440f6_2.3_4.PNG)</figure>6. Change the perspective of the camera
---------------------------------------

*Our Spawn Manager is coming along nicely, so let’s take a break and mess with the camera.Changing the camera’s perspective might offer a more appropriate view for this top-down game.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345057771?app_id=122963" width="100%"></iframe></figure>1. Toggle between **Perspective** and **Isometric** view in Scene view to appreciate the difference
2. Select the **camera** and change the **Projection** from “Perspective” to “Orthographic”