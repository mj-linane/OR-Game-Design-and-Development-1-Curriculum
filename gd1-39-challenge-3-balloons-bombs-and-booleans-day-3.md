---
title: 'Lesson 39: Challenge #3 &#8212; Balloons, Bombs, and Booleans (Day 3)'
date: '2020-01-07T12:46:49-05:00'
status: publish
permalink: /lessons/lesson-39-challenge-3-balloons-bombs-and-booleans-day-3
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27036
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'January 7, 2020 @ 12:50 pm'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
course_id:
    - '0'
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

Apply your knowledge of physics, scrolling backgrounds, and special effects to a balloon floating through town, picking up tokens while avoiding explosives. You will have to do a lot of troubleshooting in this project because it is riddled with errors.

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/349088981?app_id=122963" width="100%"></iframe></figure>1. Open your **Prototype 3** project
2. **Download** the “Challenge 3 Starter Files” from [Challenge 3 – Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-3-balloons-bombs-and-booleans-146045) , then double-click on it to **Import**
3. In the *Project Window &gt; Assets &gt; Challenge 3 &gt;* ***Instructions*** folder, use the “Challenge 3 – Instructions” and Outcome video as a guide to complete the challenge

**Challenge Outcome**
---------------------

- The balloon floats upwards as the player holds spacebar
- The background seamlessly repeats, simulating the balloon’s movement
- Bombs and Money tokens are spawned randomly on a timer
- When you collide with the Money, there’s a particle and sound effect
- When you collide with the Bomb, there’s an explosion and the background stops

1. The player can’t control the balloon
---------------------------------------

- The balloon should float up as the player presses spacebar

***Hint:** There is a “NullReferenceExcepton” error on the player’s rigidBody variable – it has to be assigned in Start() using the **GetComponent&lt;&gt;** method*

2. The background only moves when the game is over
--------------------------------------------------

- The background should move at start, then *stop* when the game is over

***Hint**: In MoveLeftX.cs, the objects should only Translate to the left if the game is NOT over*

3. No objects are being spawned
-------------------------------

- Make bombs or money objects spawn every few seconds

***Hint:** There is an error message saying, “Trying to Invoke method: SpawnManagerX.**PrawnsObject** couldn’t be called” – spelling matters*

4. Fireworks appear to the side of the balloon
----------------------------------------------

- Make the fireworks display at the balloon’s position

***Hint:** The fireworks particle is a child object of the Player – but its location still has to be set at the same location*

5. The background is not repeating properly
-------------------------------------------

- Make the background repeat seamlessly

***Hint:** The **repeatWidth** variable should be half of the background’s width, not half of its height*

6. The balloon can float way too high
-------------------------------------

- Prevent the player from floating their balloon too high

***Hint:** Add a boolean to check if the balloon **isLowEnough**, then only allow the player to add upwards force if that boolean is true*

7. The balloon can drop below the ground
----------------------------------------

- Make the balloon appear to bounce off of the ground, preventing it from leaving the bottom of the screen. There should be a sound effect when this happens, too!

***Hint:** Figure out a way to test if the balloon collides with the ground object, then add an impulse force upward if it does*

Scoring
-------

<figure class="wp-block-table"><table class=""><tbody><tr><td class="has-text-align-center" data-align="center">**50**</td><td class="has-text-align-center" data-align="center">**70**</td><td class="has-text-align-center" data-align="center">**85**</td><td class="has-text-align-center" data-align="center">**90**</td><td class="has-text-align-center" data-align="center">**100**</td></tr><tr><td class="has-text-align-center" data-align="center">Not Started</td><td class="has-text-align-center" data-align="center">2 Problems Fixed</td><td class="has-text-align-center" data-align="center">4 Problems Fixed</td><td class="has-text-align-center" data-align="center">5 Problems Fixed</td><td class="has-text-align-center" data-align="center">6 Problems Fixed</td></tr></tbody></table>

</figure>