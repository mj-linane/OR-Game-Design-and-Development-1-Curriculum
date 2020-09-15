---
title: 'Lesson 29: Feeding The Animals With Collisions / Free Play'
date: '2019-11-18T11:46:46-05:00'
status: publish
permalink: /lessons/lesson-29-feeding-the-animals-with-collisions-free-play
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26637
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'November 26, 2019 @ 7:33 am'
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
Overview
--------

Our game is coming along nicely, but there are are some critical things we must add before it’s finished. First off, instead of pressing S to spawn the animals, we will spawn them on a timer so that they appear every few seconds. Next we will add colliders to all of our prefabs and make it so launching a projectile into an animal will destroy it. Finally, we will display a “Game Over” message if any animals make it past the player.

### New Functionality

- Animals spawn on a timed interval and walk down the screen
- When animals get past the player, it triggers a “Game Over” message
- If a projectile collides with an animal, both objects are removed

### New Concepts &amp; Skills

- Create custom methods/functions
- InvokeRepeating() to repeat code
- Colliders and Triggers
- Override functions
- Log Debug messages to console

 1. Introduction
----------------

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345549703?app_id=122963" width="100%"></iframe></figure>2. Make a new method to spawn animals
-------------------------------------

*Our Spawn Manager is looking good, but we’re still pressing S to make it work! If we want the game to spawn animals automatically, we need to start by writing our very first custom function.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057803?app_id=122963" width="100%"></iframe></figure>1. In **SpawnManager.cs**, create a new ***void SpawnRandomAnimal() {}*** function beneath ***Update()***
2. Cut and paste the code from the **if-then statement** to the **new function**
3. Call ***SpawnRandomAnimal();*** if **S** is pressed

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/00c1a4e5-dc1e-4ec8-9b63-7b91770f9b51_2_4_1.png)</figure></div>3. Spawn the animals at timed intervals
---------------------------------------

*We’ve stored the spawn code in a custom function, but we’re still pressing S! We need to spawn the animals on a timer, so they randomly appear every few seconds.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057828?app_id=122963" width="100%"></iframe></figure>1. In ***Start()***, use ***InvokeRepeating*** to spawn the animals based on an interval, then **test**.
2. Remove the **if-then statement** that tests for **S** being pressed
3. Declare new ***private startDelay*** and ***spawnInterval*** variables then playtest and tweak variable values

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/ea0a808c-d2e7-4a8f-b0f8-8e2b66ad05b8_2_4_2.png)</figure></div>4. Add collider and trigger components
--------------------------------------

*Animals spawn perfectly and the player can fire projectiles at them, but nothing happens when the two collide! If we want the projectiles and animals to be destroyed on collision, we need to give them some familiar components – “colliders.”*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057851?app_id=122963" width="100%"></iframe></figure>1. Double-click on one of the **animal prefabs**, then *Add Component &gt; Box Collider*
2. Click **Edit Collider**, then **drag** the collider handles to encompass the object
3. Check the “**Is Trigger**” checkbox
4. Repeat this process for each of the **animals** and the **projectile**
5. Add a **RigidBody component** to the projectile and uncheck “use gravity”

5. Destroy objects on collision
-------------------------------

*Now that the animals and the projectile have Box Colliders with triggers, we need to code a new script in order to destroy them on impact.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057883?app_id=122963" width="100%"></iframe></figure>1. Create a new **DetectCollisions.cs** script, add it to each animal prefab, then **open** it
2. Before the final **}** add ***OnTriggerEnter*** function using **autocomplete**
3. In ***OnTriggerEnter***, put ***Destroy(gameObject)*****;**, then test
4. In ***OnTriggerEnter***, put ***Destroy(other.gameObject);***

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/f964ea7d-eeeb-4b49-903c-309bc119287f_2_4_4.png)</figure></div>6. Trigger a “Game Over” message
--------------------------------

*The player can defend their field against animals for as long as they wish, but we should let them know when they’ve lost with a “Game Over” message if any animals get past the player.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345057905?app_id=122963" width="100%"></iframe></figure>1. In DestroyOutOfBounds.cs, in the **else-if condition** that checks if the animals reach the bottom of the screen, add a Game Over messsage: ***Debug.Log(“Game Over!”)***
2. Clean up your code with **comments**
3. If using Visual Studio Code, press the following keys: ***Shift+Alt+F*** *.* This will fix any indentation issues in your code.

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/b80ab1fa-3fd5-439f-aa48-9af139b0dac0_2_4_5.png)</figure></div>