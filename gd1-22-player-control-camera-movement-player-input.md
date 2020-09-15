---
title: 'Lesson 22: Player Control &#8212; Camera Movement &#038; Player Input'
date: '2019-10-28T14:56:33-04:00'
status: publish
permalink: /lessons/lesson-22-player-control-camera-movement-player-input
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26344
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'October 30, 2019 @ 11:03 am'
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
Part 1: Make Camera Follow Player
---------------------------------

### 1. Create a new script for the camera

*The camera is currently stuck in one position. If we want it to follow the player, we have to make a new script for the camera.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760510?app_id=122963" width="100%"></iframe></figure>1. Create a new **C# script** called FollowPlayer and attach it to the **camera**
2. Add ***public GameObject player;*** to the top of the script
3. Select the **Main Camera, then**, **drag** the player object onto the **empty player variable** in the Inspector
4. In ***Update()***, assign the camera’s position to the player’s position, then test

```
<pre class="wp-block-code">```
public GameObject player;

void Update()
  {
    transform.position = player.transform.position;
  }
```
```

### 2. Add an offset to the camera position

*We need to move the camera’s position above the vehicle so that the player can have a decent view of the game.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760565?app_id=122963" width="100%"></iframe></figure>1. In the line in the Update method add ***+ new Vector3(0, 5, -7)***, then test

```
<pre class="wp-block-code">```
public GameObject player;

void Update()
{
  transform.position = player.transform.position + new Vector3(0, 5, -7);
}
```
```

### 3. Make the offset into a Vector3 variable

*We’ve fixed the camera’s position, but we may want to change it later! We need an easier way to access the offset.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760590?app_id=122963" width="100%"></iframe></figure>1. At the top of **FollowPlayer.cs**, declare ***private Vector3 offset;***
2. Copy the ***new Vector3()*** code and **assign** it to that variable
3. **Replace** the original code with the ***offset*** variable
4. **Test** and **save**

```
<pre class="wp-block-code">```
public GameObject player;
private Vector3 offset = new Vector3(0, 5, -7);

void Update()
{
  transform.position = player.transform.position + offset;
}
```
```

Part 2: Writing the C# Script To Control The Car 
-------------------------------------------------

#### New Functionality

- When the player presses the up/down arrows, the vehicle will move forward and backward
- When the player presses the left/right arrows, the vehicle turns

#### New Concepts &amp; Skills

- Empty objects
- Get user input
- Translate vs Rotate

### Head Start Script

*If you fell behind in the last lesson and just want to jump in to today’s lesson script, here is the code we wrote last class.*

[**Link to the script**](https://github.com/mj-linane/Unity-Scripts/blob/master/PlayerController.cs)

###  1. Allow the vehicle to move left/right

*Until now, the vehicle has only been able to move straight forward along the road. We need it to be able to move left and right to avoid the obstacles.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342761172?app_id=122963" width="100%"></iframe></figure>1. At the top of PlayerController.cs, add a ***public float turnSpeed;*** variable
2. In ***Update()***, add ***transform.Translate(Vector3.right \* Time.deltaTime \* turnSpeed);***
3. Run your game and use the ***turnSpeed*** **variable slider** to move the vehicle left and right

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="csharp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">public float turnSpeed;

void Update()
{
   transform.Translate(Vector3.forward * Time.deltaTime * speed);
   transform.Translate(Vector3.right * Time.deltaTime * turnSpeed);
}
```

### 2. Base left/right movement on input

*Currently, we can only control the vehicle’s left and right movement in the inspector. We need to grant some power to the player and allow them to control that movement for themselves.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342761191?app_id=122963" width="100%"></iframe></figure>1. In **PlayerController.cs**, add a new ***public float horizontalInput*** variable
2. In ***Update***, assign ***horizontalInput = Input.GetAxis(“Horizontal”);***, then test to see it in inspector
3. Add the ***horizontalInput*** variable to your left/right **Translate method** to gain control of the vehicle
4. In the inspector, edit the ***turnSpeed*** and ***speed*** variables to tweak the feel

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="csharp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""> public float horizontalInput;

void Update()
{
    horizontalInput = Input.GetAxis("Horizontal");

    transform.Translate(Vector3.forward * Time.deltaTime * speed);
    transform.Translate(Vector3.right * Time.deltaTime * turnSpeed * horizontalInput);

}
```

### 3. Take control of the vehicle speed

*We’ve allowed the player to control the steering wheel, but we also want them to control the gas pedal and brake*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342761230?app_id=122963" width="100%"></iframe></figure>1. Declare a new public ***forwardInput*** variable
2. In ***Update***, assign ***forwardInput = Input.GetAxis(“Vertical”);***
3. Add the ***forwardInput*** variable to the **forward Translate method**, then test

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/0aef9c6a-3278-42f6-8f5f-22d83ea50016_1_4_3.png)</figure></div>### 4. Make vehicle rotate instead of slide

*There’s something weird about the vehicle’s movement… it’s slides left to right instead of turning. Let’s allow the vehicle to turn like a real car!*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342761255?app_id=122963" width="100%"></iframe></figure>1. In ***Update***, call ***transform.Rotate(Vector3.up****,* ***horizontalInput)***, then test
2. **Delete** the line of code that **translates Right**, then test
3. Add ***\* turnSpeed \* Time.deltaTime***, then test

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/7bd37c3e-a428-413d-b8d0-bf2596f05a76_1_4_4.png)</figure></div>### 5. Clean your code and hierarchy

*We added lots of new stuff in this lesson. Before moving on and to be more professional, we need to clean our scripts and hierarchy to make them more organized.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342761295?app_id=122963" width="100%"></iframe></figure>1. In the hierarchy, *Right-click &gt; Create Empty* and rename it “Obstacles”, then **drag** all the obstacles into it
2. **Initialize** variables with values in **PlayerController**, then make all variables **private** (except for the **player** variables)
3. Use ***//*** to add **comments** to each section of code

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190522/learn/images/fa67bba0-3463-46e0-900e-ba0964dd3df7_1_4_5.png)</figure></div>