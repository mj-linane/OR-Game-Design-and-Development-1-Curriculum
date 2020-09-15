---
title: 'Lesson 34: Game Over and Motion'
date: '2019-12-11T07:35:21-05:00'
status: publish
permalink: /lessons/lesson-34-game-over-and-motion
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26898
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'December 11, 2019 @ 9:02 am'
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
1. Add a new game over trigger
------------------------------

*When the player collides with an obstacle, we want to trigger a “Game Over” state that stops everything In order to do so, we need a way to label and discern all game objects that the player collides with.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345494957?app_id=122963" width="100%"></iframe></figure>1. In the inspector, add a “Ground” tag to the **Ground** and an “Obstacle” tag to the **Obstacle prefab**
2. In PlayerController, declare a new ***public bool gameOver;***
3. In ***OnCollisionEnter***, add the **if-else statement** to test if player collided with the “Ground” or an “Obstacle”
4. If they collided with the “Ground”, set ***isOnGround = true***, and if they collide with an “Obstacle”, set ***gameOver = true***

<figure class="wp-block-image">![](https://connect-prd-cdn.unity.com/20190523/learn/images/efbbf70f-5cc5-4d27-89e3-3c1b25f0df94_3_2_4.png)</figure>2. Stop MoveLeft on gameOver
----------------------------

*We’ve added a gameOver bool that seems to work, but the background and the objects continue to move when they collide with an obstacle. We need the MoveLeft script to communicate with the PlayerController, and stop once the player triggers gameOver.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495034?app_id=122963" width="100%"></iframe></figure>1. In **MoveLeft.cs**, declare a new ***private PlayerController playerControllerScript;***
2. In ***Start()***, initialize it by finding the **Player** and getting the PlayerController component
3. Wrap the **translate method** in an **if-statement** checking if game is not over

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190522/learn/images/5bb36fd0-ebad-441a-8a49-6190ffda6121_3_2_5.png)</figure></div>3. Stop obstacle spawning on gameOver
-------------------------------------

*The background and the obstacles stop moving when gameOver == true, but the Spawn Manager is still raising an army of obstacles! We need to communicate with the Spawn Manager script and tell it to stop when the game is over.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495099?app_id=122963" width="100%"></iframe></figure>1. In **SpawnManager.cs**, get a reference to the **playerControllerScript** using the same technique you did in MoveLeft.cs
2. Add a condition to only instantiate objects if ***gameOver*** ***== false***

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190522/learn/images/77b2934b-d6e1-407f-8a0c-f8cfdce81115_3_2_6.png)</figure></div>4. Destroy obstacles that exit bounds
-------------------------------------

*Just like the animals in Unit 2, we need to destroy any obstacles that exit boundaries. Otherwise they will slide into the distance… forever!*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495145?app_id=122963" width="100%"></iframe></figure>1. In **MoveLeft**, in ***Update()***; write an if-statement to **Destroy** Obstacles if their position is less than a ***leftBound*** variable
2. Add any **comments** you need to make your code more **readable**

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190529/learn/images/ffad50db-b857-44cb-b972-c2d46ae9bc5e_3.2_7.PNG)</figure></div>5. Explore the player’s animations
----------------------------------

*In order to get this character moving their arms and legs, we need to explore the Animation Controller.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495233?app_id=122963" width="100%"></iframe></figure>Double-click on the Player’s **Animation Controller**, then explore the different **Layers**, double-clicking on **States** to see their animations and **Transitions** to see their conditions  
Mark step as completed

6. Make the player start off at a run
-------------------------------------

*Now that we’re more comfortable with the animation controller, we can tweak some variables and settings to make the player look like they’re really running.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495387?app_id=122963" width="100%"></iframe></figure>1. In the **Parameters tab**, change the **Speed\_f** variable to 1.0
2. **Right-click** on *Run\_Static &gt; Set as Layer Default State*
3. **Single-click** the the Run\_Static state and adjust the **Speed** value in the inspector to match the speed of the **background**

7. Set up a jump animation
--------------------------

*The running animation looks good, but very odd when the player leaps over obstacles. Next up, we need to add a jumping animation that puts a real spring in their step.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495498?app_id=122963" width="100%"></iframe></figure>1. In **PlayerController.cs**, declare a new ***private Animator playerAnim;***
2. In ***Start()***, set ***playerAnim = GetComponent&lt;Animator&gt;();***
3. In the **if-statement** for when the player jumps, trigger the jump: ***animator.SetTrigger(“Jump\_trig”);***

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190529/learn/images/a3cfaac0-a3d2-41bb-a844-6a41628a3c02_3.3_3.PNG)</figure></div>8. Adjust the jump animation
----------------------------

*The running animation plays, but it’s not perfect yet, we should tweak some of our character’s physics-related variables to get this looking just right.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495566?app_id=122963" width="100%"></iframe></figure>1. In the Animator window, click on the **Running\_Jump** state, then in the inspector and **reduce its Speed** value to slow down the animation
2. Adjust the player’s **mass**, jump **force**, and **gravity** modifier to get your jump just right

9. Set up a falling animation
-----------------------------

*The running and jumping animations look great, but there’s one more state that the character should have an animation for. Instead of continuing to sprint when it collides with an object, the character should fall over as if it has been knocked out.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495631?app_id=122963" width="100%"></iframe></figure>1. In the **condition** that player collides with Obstacle, set the **Death** **bool** to **true**
2. In the same **if-statement**, set the **DeathType** integer to 1

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190522/learn/images/74a1d416-1584-47d8-b49e-2d891487c527_3_3_5.png)</figure></div>10. Keep player from unconscious jumping
----------------------------------------

*Everything is working perfectly, but there’s one small disturbing bug to fix: the player can jump from an unconscious position, making it look like the character is being defibrillated.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495724?app_id=122963" width="100%"></iframe></figure>1. To prevent the player from jumping while unconscious, add ***&amp;&amp; !gameOver*** to the **jump condition**

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190522/learn/images/31fb58fc-a494-40cb-9d4b-649975fc614e_3_3_6.png)</figure></div>