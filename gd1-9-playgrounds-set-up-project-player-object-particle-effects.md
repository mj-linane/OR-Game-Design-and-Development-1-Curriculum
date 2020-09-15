---
title: 'GD1 9: Playgrounds &#8211; Set Up Project, Player Object, &#038; Particle Effects'
date: '2019-09-30T10:51:16-04:00'
status: publish
permalink: /courses/game-design-and-development-1/lessons/gd1-9-playgrounds-set-up-project-player-object-particle-effects
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26114
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 26, 2020 @ 10:49 am'
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
course_id:
    - '25474'
---
Vocabulary
----------

- **Parenting GameObjects**: Child GameObjects inherit movements from the parent GameObjects

Resources
---------

<div class="wp-block-file">[Unity Playgound Scripts Cheatsheet](https://mycodingclass.co/wp-content/uploads/2019/09/Unity-Playgound-Script-Cheatsheet.pdf)[Download](https://mycodingclass.co/wp-content/uploads/2019/09/Unity-Playgound-Script-Cheatsheet.pdf)</div><div class="wp-block-file">[Unity Playground Scripts Full Documentation](https://mycodingclass.co/wp-content/uploads/2019/09/Unity-Playground-Script-Full-Documentation.pdf)[Download](https://mycodingclass.co/wp-content/uploads/2019/09/Unity-Playground-Script-Full-Documentation.pdf)</div>Need Help? Read-Search-Ask
--------------------------

When you get stuck, remember: **Read-Search-Ask**.

1. **Read** the documentation or error
2. **Search** Google
3. **Ask** your friends for help
4. **Ask** the teacher

Do those steps in order. This is the most time-efficient way to handle being stuck, and it’s the most respectful of other people’s time, too.

Most of the time, you’ll solve your problem after doing a quick Google search or by trying to complete one or two steps of the problem.

Activities
----------

### Setup The Playground Game

1. Start a new game from the Unity Hub &gt; New &gt; Select Most Recent Engine
2. Title: Playground
3. Location: H://
4. Once game loads, click on Asset Store &gt; Search for Unity Playground &gt; Click on the game card &gt; Click Import
5. Say yes to any dialog boxes that appear
6. Adding ProGrids &gt; Windows &gt; Package Manager &gt; ProGrids Install

Review all of the new asset files that you now have access to.

### Setting Up The Level and Character

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/f660073d-a369-4143-9ee6-3cdd44338ce5_image.png)</figure></div>*You’ll set the scene by creating a background for your game.*

1. Create a new scene by going to File &gt; Create a New Scene
2. In the Project View, navigate to Images &gt; Backgrounds &gt; BG\_Space and drag it into the Hierarchy
3. Go to the Inspector window and change the Draw Mode from Simple to Tiled. Expand the Visibility Options and set the Sorting Layer to Background to ensure that this element will always be behind other game elements
4. Resize BG\_Space to fit the whole screen by making sure that the image covers the grey rectangle that represents the camera

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/1710d523-6fd5-4f89-92fc-b9c6fe301330_image.png)</figure></div>#### 2. Create and Add Interactivity to the Player

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/3f97737b-d088-4e7e-9063-7281a222c755_image.png)</figure></div>*Now, you’ll add a player to the game and add a script that allows it to move around.*

1. Go to Project &gt; Images &gt; Spaceships &gt; SpaceshipRed
2. In the Project View, navigate to Images &gt; Backgrounds &gt; BG\_Space and drag it into the Hierarchy
3. Go to Inspector &gt; Add Component &gt; Search for Push and add it
4. When you add the Push script, you will notice that a Rigidbody 2D was also automatically added to the Inspector. This is because physics is required to make the game object move
5. Make adjustments: on Rigidbody 2D, change the Gravity value to 0 and Friction to 2 and on the Push (Script), change the Push strength from 5 to 8
6. Test the game by clicking the Play button and use the arrow keys to move the spaceship

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/53786e98-4873-4f92-9d1e-f0fe36ba4d1f_image.png)</figure></div>Definitions:

- Push script applies a push in a direction when pressing a key

Tweaking the Game:

- Changes made in the Play mode are not saved! Get out of the Play mode and make the changes again if you want them to be reflected in the game

#### 3.Add the Rotate script to the Player

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/f110ff1b-ff33-48a4-ab8b-5cd2f01f335b_image.png)</figure></div>*You’ll add another script to allow the player to rotate.*

1. Go to Inspector &gt; Add Component &gt; Search for Rotate and add it to allow steering
2. Change the Input keys (Type of Central) from Arrow Keys to WASD
3. Test the changes by going to Play mode. Tweak the values of Rigidbody 2D &gt; Angular Friction and Rotate (Script) &gt; Speed

#### 4. Add a Flame to the Spaceship

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/d68fa376-6d93-42c0-ac29-4bee30445178_image.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/ad228bbd-7b56-4d39-82b9-8f30d86743cc_image.png)</figure></div>*Now for the finishing touches: you’ll add a particle to your player to make it look more animated.*

1. Go to Project &gt; Prefab &gt; Particles &gt; P\_Flame and drag it on the Hierarchy
2. Parent the P\_Flame under SpaceshipRed. Now, the flame will move in unison with the red spaceship
3. Change the initial position of the flame on the back of the vehicle. While selecting P\_Flame in the Hierarchy, go to Inspector &gt; Transform and change the Position, Rotation, and Scale values to your preference. You can also do this by using the Position, Rotate, and Scale tools on the top left hand part of the screen
4. Save the scene by going to File &gt; Save As &gt; Level 1 and save it in the Scenes folder

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/9be17ec8-9aeb-483b-ba1c-8ab36dd1ec35_image.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/d3b543c7-ef82-47a6-a075-56e048fd9247_image.png)</figure></div>### Setup Camera and Collisions

#### Adjusting the Camera

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/e6558a39-3b2d-4e21-bece-5b60c90eeb7c_image.png)</figure></div>*You’ll tweak the view frame and make the camera follow an object by adding the Camera Follow script*

1. Select the Main Camera in the Hierarchy and in the Inspector window, change the Frame Size value until you’re happy with how it appears on the screen
2. While still selecting the Main Camera on the Hierarchy, Go to Inspector and Click Add Camera Follow Script
3. Drag and drop the SpaceshipRed from the Hierarchy into the Inspector &gt; Camera Follow (Script) &gt; Object to follow &gt; Target &gt; empty box
4. Press play and notice how the camera now follows the red spaceship when you move it

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/c50e206c-3c7f-4938-bca6-e38c0b5aa62b_image.png)</figure></div>Did you know?

- When you use Playground, the Unity Interface is simplified and made easier to read for beginners. If you ever want to use the original Unity interface, you can go to the top left hand screen and click Playground &gt; Turn Playground Off