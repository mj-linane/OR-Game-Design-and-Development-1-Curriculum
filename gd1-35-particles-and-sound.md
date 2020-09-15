---
title: 'Lesson 35: Particles and Sound'
date: '2019-12-16T07:51:23-05:00'
status: publish
permalink: /lessons/lesson-35-particles-and-sound
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26944
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'December 16, 2019 @ 7:55 am'
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
###  1. Introduction

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345549826?app_id=122963" width="100%"></iframe></figure>### New Functionality

- Music plays during the game
- Particle effects at the player’s feet when they run
- Sound effects and explosion when the player hits an obstacle

### New Concepts and Skills

- Particle systems
- Child object positioning
- Audio clips and Audio sources
- Play and stop sound effects

2. Customize an explosion particle
----------------------------------

*The first particle effect we should add is an explosion for when the player collides with an obstacle.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/345495830?app_id=122963" width="100%"></iframe></figure>1. From the *Course* *Library &gt; Particles*, drag **FX\_Explosion\_Smoke** into the hierarchy, then use the **Play** / **Restart** / **Stop** buttons to preview it
2. Play around with the **settings** to get your **particle system** the way you want it
3. Make sure to **uncheck** the **Play on Awake** setting
4. Drag the **particle** onto your player to make it a **child object**, then position it relative to the player

3. Play the particle on collision
---------------------------------

*We discovered the particle effects and found an explosion for the crash, but we need to assign it to the Player Controller and write some new code in order to play it.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495927?app_id=122963" width="100%"></iframe></figure>1. In **PlayerController.cs**, declare a new ***public ParticleSystem explosionParticle;***
2. In the Inspector, assign the **explosion** to the **explosion particle** variable
3. In the **if-statement** where the player collides with an obstacle, call ***explosionParticle.Play();***, then test and tweak the **particle properties**

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190522/learn/images/39475189-eaa1-4697-adf7-507fad7c3ede_3_4_2.png)</figure></div>4. Add a dirt splatter particle
-------------------------------

*The next particle effect we need is a dirt splatter, to make it seem like the player is kicking up ground as they sprint through the scene. The trick is that the particle should only play when the player is on the ground.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345495989?app_id=122963" width="100%"></iframe></figure>1. Drag **FX\_DirtSplatter** as the Player’s **child object**, reposition it, rotate it, and edit its settings
2. Declare a new ***public ParticleSystem dirtParticle;***, then **assign** it in the Inspector
3. Add ***dirtParticle.Stop();*** when the player jumps or collides with an **obstacle**
4. Add ***dirtParticle.Play();*** when the player lands on the **ground**

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190522/learn/images/a5f8ad79-bd1c-42a9-9574-d08a799e3062_3_4_3.png)</figure></div>5. Add music to the camera object
---------------------------------

*Our particle effects are looking good, so it’s time to move on to sounds! In order to add music, we need to attach sound component to the camera. After all, the camera is the eyes AND the ears of the scene.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345496152?app_id=122963" width="100%"></iframe></figure>1. Select the Main **Camera** object, then *Add Component &gt; Audio Source*
2. From *Course* *Library &gt; Sound*, drag a **music clip** onto the **AudioClip** variable in the inspector
3. Reduce the **volume** so it will be easier to hear **sound effects**
4. Check the **Loop** checkbox

6. Declare variables for Audio Clips
------------------------------------

*Now that we’ve got some nice music playing, it’s time to add some sound effects. This time audio clips will emanate from the player, rather than the camera itself.*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345496263?app_id=122963" width="100%"></iframe></figure>1. In **PlayerController.cs**, declare a new ***public AudioClip jumpSound;*** and a new ***public AudioClip crashSound;***
2. From *Course Library &gt; Sound*, drag a clip onto each new **sound** variable in the inspector

7. Play Audio Clips on jump and crash
-------------------------------------

*We’ve assigned audio clips to the jump and the crash in PlayerController. Now we need to play them at the right time, giving our game a full audio experience*

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/345496320?app_id=122963" width="100%"></iframe></figure>1. Add an **Audio Source** component to the **player**
2. Declare a new ***private AudioSource playerAudio;*** and initialize it as ***playerAudio = GetComponent&lt;AudioSource&gt;();***
3. Call ***playerAudio.PlayOneShot(jumpSound, 1.0f);*** when the character **jumps**
4. Call ***playerAudio.PlayOneShot(crashSound, 1.0f);*** when the character **crashes**

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190522/learn/images/8dce2eeb-fa66-4dbc-b4e3-ad1d686ae17f_3_4_6.png)</figure></div>