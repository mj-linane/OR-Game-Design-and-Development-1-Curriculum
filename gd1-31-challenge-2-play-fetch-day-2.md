---
title: 'Lesson 31: Challenge #2 &#8212; Play Fetch (Day 2)'
date: '2019-11-26T07:33:08-05:00'
status: publish
permalink: /lessons/lesson-31-challenge-2-play-fetch-day-2
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26767
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'December 18, 2019 @ 10:01 am'
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
uagb_style_timestamp-css:
    - '1576687673'
---
Assets: [https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-2-play-fetch-146044?\_ga=2.138440627.1263321540.1574261967-2125127897.1570533414](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-2-play-fetch-146044?_ga=2.138440627.1263321540.1574261967-2125127897.1570533414)

 Overview
---------

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/349081567?app_id=122963" width="100%"></iframe></figure>1. Open your **Prototype 2** project
2. **Download** the “[Challenge 2 Starter Files](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-2-play-fetch-146044?_ga=2.138440627.1263321540.1574261967-2125127897.1570533414)“, then double-click on it to **Import**
3. In the *Project Window &gt; Assets &gt; Challenge 2 &gt;* ***Instructions*** folder, use the “Challenge 2 – Instructions” and “Outcome” video as a guide to complete the challenge

Problem 1: Dogs are spawning at the top of the screen
-----------------------------------------------------

- Make the balls spawn from the top of the screen

***Hint:** Click on the Spawn Manager object and look at the “Ball Prefabs” array*

Problem 2: The player is spawning green balls instead of dogs
-------------------------------------------------------------

- Make the player spawn dogs

***Hint:** Click on the Player object and look at the “Dog Prefab” variable*

Problem 3: The balls are destroyed if anywhere near the dog
-----------------------------------------------------------

- The balls should only be destroyed when coming into direct contact with a dog

***Hint:** Check out the box collider on the dog prefab*

Problem 4: Nothing is being destroyed off screen
------------------------------------------------

- Balls should be destroyed when they leave the bottom of the screen and dogs should be destroyed when they leave the bottom of the screen

***Hint:** In the DestroyOutOfBounds script, double-check the lowerLimit and bottomLimit variables, the greater than vs less than signs, and which position (x,y,z) is being tested*

Problem 5: Only one type of ball is being spawned 
--------------------------------------------------

- Ball 1, 2, and 3 should be spawned randomly

***Hint:** In the SpawnRandomBall() method, you should declare a new random **int index** variable, then incorporate that variable into the the Instantiate call*

<div class="warning uagb-infobox__outer-wrap" id="uagb-infobox-dfb70a5b-8a1e-4e7a-b295-c5fe1beab5a7"><div class="uagb-infobox__content-wrap uagb-infobox uagb-infobox-has-icon uagb-infobox-icon-left uagb-infobox-left uagb-infobox-stacked-tablet uagb-infobox-image-valign-middle uagb-infobox-enable-border-radius "><div class="uagb-ifb-left-right-wrap"><div class="uagb-ifb-image-icon-content uagb-ifb-imgicon-wrap"><div class="uagb-ifb-icon-wrap"><span class="uagb-ifb-icon"><svg viewbox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg></span></div></div><div class="uagb-ifb-content"><div class="uagb-ifb-title-wrap">### Heads Up

</div><div class="uagb-ifb-separator-parent"><div class="uagb-ifb-separator"></div></div><div class="uagb-ifb-text-wrap">The following challenges are very difficult and should only be attempted after the previous ones have been completed.   
  
TL;DR Don’t attempt these ones first.

</div></div></div></div></div>Problem 6: The spawn interval is always the same
------------------------------------------------

- Make the spawn interval a random value between 3 seconds and 5 seconds

***Hint:** Using “InvokeRepeating” won’t work here because it requires you to define a constant repeat rate. Try using the simpler “Invoke” method instead, then re-setting the **startDelay** and re-calling the method from within the “SpawnRandomBall” method.*

Problem 7: The player can “spam” the spacebar key
-------------------------------------------------

- Only allow the player to spawn a new dog after a certain amount of time has passed

***Hint:** Search for Time.time in the Unity Scripting API and look at the example. And don’t worry if you can’t figure it out – this is a very difficult challenge.*

Scoring
-------

<figure class="wp-block-table"><table class=""><tbody><tr><td class="has-text-align-center" data-align="center">**50**</td><td class="has-text-align-center" data-align="center">**70**</td><td class="has-text-align-center" data-align="center">**85**</td><td class="has-text-align-center" data-align="center">**90**</td><td class="has-text-align-center" data-align="center">**100**</td></tr><tr><td class="has-text-align-center" data-align="center">Not Started</td><td class="has-text-align-center" data-align="center">2 Problems Fixed</td><td class="has-text-align-center" data-align="center">4 Problems Fixed</td><td class="has-text-align-center" data-align="center">5 Problems Fixed</td><td class="has-text-align-center" data-align="center">6 Problems Fixed</td></tr></tbody></table>

</figure>