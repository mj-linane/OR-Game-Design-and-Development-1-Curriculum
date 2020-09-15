---
title: 'Lesson 19: Player Control &#8212; Car Movement (Classes + Variables)'
date: '2019-10-25T13:40:40-04:00'
status: publish
permalink: /lessons/lesson-19-player-control-car-movement-classes-variables
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26319
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'March 3, 2020 @ 8:22 am'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
site-sidebar-layout:
    - default
site-content-layout:
    - default
theme-transparent-header-meta:
    - default
stick-header-meta:
    - default
ld_course_25474:
    - '25474'
---
New Project — Create With Code — Player Control
-----------------------------------------------

### New Functionality

- Project set up with assets imported
- Vehicle positioned at the start of the road
- Obstacle positioned in front of the vehicle
- Camera positioned behind vehicle

### New Concepts &amp; Skills

- Create a new project
- Import assets
- Add objects to the scene
- Game vs Scene view
- Project, Hierarchy, Inspector windows
- Navigate 3D space
- Move and Rotate tools
- Customize the layout

1. On your **desktop** (or somewhere else you will remember), *Right-click &gt; create* ***New Folder***, then name it “Create with Code”
2. Open **Unity Hub** and click **New**
3. Name the project “Prototype 1”, select the correct **version of Unity**, set the location to the new “**Create with Code**” folder, and select the **3D** template
4. Click **Create Project**, then wait for Unity to open

Part 1 Setting Up The Project
-----------------------------

### 1. Import assets and Open Prototype 1 

*Now that we have an empty project open, we need to import the assets for Prototype 1 and open the scene*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342103988?app_id=122963" width="100%"></iframe></figure>1. Add Prototype 1 project assets to your project from the[ Unity Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-prototype-1-driving-simulation-145891?_ga=2.115210371.561419606.1571926954-2125127897.1570533414).
2. In the **Project** window, in  *Assets &gt; Scenes &gt;* double-click on the **Prototype 1 scene** to open it
3. Delete the **Sample Scene** without saving
4. **Right-click + drag** to look around at the start of the road

### 2. Add your vehicle to the scene

*Since we’re making a driving simulator, we need to add our own vehicle to the scene.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342104027?app_id=122963" width="100%"></iframe></figure>1. In the **Project Window**, open *Assets &gt; Course Library &gt; Vehicles*, then drag a vehicle into the **Hierarchy**
2. **Hold** **right-click + WASD** to fly to the vehicle, then try to rotate around it
3. **Press F** in the Scene view to focus on it, then use the **scroll wheel** to zoom in and out and **hold the scroll wheel** to pan
4. Press F to focus on it, **hold alt+left-click** to rotate around it perfectly
5. If anything goes wrong, press **Ctrl/Cmd+Z** to Undo until it’s fixed

### 3. Add an obstacle and reposition it

*The next thing our game needs is an obstacle! We need to choose one and position it in front of the vehicle.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342104066?app_id=122963" width="100%"></iframe></figure>1. Go to *Course Library &gt; Obstacles* and **drag an obstacle** directly into **scene view**
2. In the Inspector for your obstacle, in the top-right of the Transform component, click the *Gear Icon &gt;* ***Reset Position***
3. In the **Inspector,** change the **XYZ Location** to **0,0,25**
4. In the hierarchy, *Right-click &gt;* ***Rename*** your two objects as “Player” and “Obstacle”

### 4. Locate your camera and run the game

*Now that we’ve set up our vehicle and obstacle, let’s try running the game and looking through the camera.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342104100?app_id=122963" width="100%"></iframe></figure>1. Select the **Camera** in the hierarchy, then **press F** to focus on it
2. Press the **Play button** to run your Game, then press Play again to **stop** it

### 5. Move the camera behind the vehicle

*In order for the player to properly view our game, we should position and angle the camera in a good spot behind the vehicle*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342104120?app_id=122963" width="100%"></iframe></figure>1. Use the **Move** and **Rotate tools** to move the camera behind the vehicle looking down on it
2. **Hold Ctrl/Cmd** to move the camera by whole units

### 6. Customize the interface layout

*Last but not least, we need to customize the Unity Editor layout so that it’s perfect for editing our project.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342104145?app_id=122963" width="100%"></iframe></figure>1. In the top-right corner, change the layout from “Default” to “**Tall**”,
2. Move **Game view** beneath Scene view
3. In the **Project** window, click on the little drop-down menu in the top-right and choose “**One-column layout”**
4. In the layout Dropdown, **save a new Layout** and call it “My Layout”

Part 2: Writing C# Movement Script
----------------------------------

### Introduction

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342775280?app_id=122963" width="100%"></iframe></figure>### New Functionality

- Vehicle moves down the road at a constant speed
- When the vehicle collides with obstacles, they fly into the air

### New Concepts &amp; Skills

- C# Scripts
- Start vs Update
- Comments
- Methods
- Pass parameters
- Time.deltaTime
- Multiply (\*) operator
- Components
- Collider and RigidBody

Writing The Script
------------------

### 1. Create and apply your first script

*We will start this lesson by creating our very first C# script that will control the vehicle’s movement.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760013?app_id=122963" width="100%"></iframe></figure>1. In the Project window, *Right-click &gt;* *Create* ***&gt; Folder*** named “Scripts”
2. In the “Scripts” folder, *Right-click &gt; Create &gt;* ***C# Script*** named “PlayerController”
3. **Drag** the new script onto the **Vehicle object**
4. **Click** on the Vehicle object to make sure it was added as a **Component** in the Inspector

### 2. Add a comment in the Update() method

*In order to make the vehicle move forward, we have to first open our new script and get familiar with the development environment.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760039?app_id=122963" width="100%"></iframe></figure>1. **Double-click** on the script to open it in **Visual Studio** **Code**
2. In the ***Update()*** method, add a comment that you will: ***// Move the vehicle forward***

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="csharp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">void Update()
{
  // Move the vehicle forward
}
```

#### How is Update() and FPS related?

*Any code in Update() gets called once per frame. The number of times this code is called is affected by your Frames Per Second (FPS). FPS is affected by your computer processing speed. 15 FPS is bad. 120 FPS is good! But this means that any slowdown of your computer == drop in FPS == drop in calculations.*

<div class="wp-block-image"><figure class="aligncenter is-resized">![FPS animation.](https://i.imgur.com/kENeuYp.gif)</figure></div><figure class="wp-block-embed-youtube aligncenter wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><div class="ast-oembed-container"><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="281" src="https://www.youtube.com/embed/O-hlXNeZyJs?feature=oembed" title="Why Are Frames Per Second Important In Video Games" width="500"></iframe></div></div></figure>### 3. Give the vehicle a forward motion

*Now that we have the comment saying what we WILL program – we have to write a line of code that will actually move the vehicle forward.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760053?app_id=122963" width="100%"></iframe></figure>1. Under your new comment, type ***transform.tr***, then select **Translate** from the autocomplete menu
2. Type **(**, add **0, 0, 1** between the parentheses, and complete the line with a semicolon (**;**)
3. Press **Ctrl/Cmd + S** to save your script, then run your game to test it

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="csharp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">void Update()
{
  // Move the vehicle forward
  transform.Translate(0, 0, 1);
}
```

### 4. Use a Vector3 to move forward

*We’ve programmed the vehicle to move along the Z axis, but there’s actually a cleaner way to code this.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760070?app_id=122963" width="100%"></iframe></figure>1. **Delete** the 0, 0, 1 you typed and use auto-complete to **replace it** with ***Vector3.forward***

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="csharp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">void Update()
{
  // Move the vehicle forward
  transform.Translate(Vector3.forward);
}
```

### 5. Customize the vehicle’s speed

*Right now, the speed of the vehicle is out of control! We need to change the code in order to adjust this.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760091?app_id=122963" width="100%"></iframe></figure>1. Add ***\* Time.deltaTime*** and run your game
2. Add ***\* 20*** and run your game

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="csharp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">void Update()
{
  // Move the vehicle forward
  transform.Translate(Vector3.forward * Time.deltaTime * 20);
}
```

### 6. Add RigidBody components to objects

Right now, the vehicle goes right through the box! If we want it to be more realistic, we need to add physics.

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760200?app_id=122963" width="100%"></iframe></figure>1. Select the **Vehicle**, then in the hierarchy click **Add Component** and select **RigidBody**
2. Select the **Obstacle**, then in the hierarchy click **Add Component** and select **RigidBody**
3. In the RigidBody component properties, increase the **mass** of vehicle and obstacle to be about what they would be in **kilograms** and test again

### 7. Duplicate and position the obstacles

*Last but not least, we should duplicate the obstacle and make the road more treacherous for the vehicle.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760229?app_id=122963" width="100%"></iframe></figure>1. Click and drag your obstacle to the **bottom of the list** in the hierarchy
2. Press **Ctrl/Cmd+D** to duplicate the obstacle and move it down the **Z axis**
3. Repeat this a few more times to create more obstacles
4. After making a few duplicates, select one in the hierarchy and **hold ctrl** **+ click** to select multiple obstacles, then **duplicate** those.

Part 3: Variables
-----------------

### New Functionality

- Camera follows the vehicle down the road at a set offset distance

### New Concepts &amp; Skills

- Variables
- Data types
- Access Modifiers
- Declare and initialize variables

###  1. Add a speed variable for your vehicle

*We need an easier way to change the vehicle’s speed and allow it to be accessed from the inspector. In order to do so what we need is something called a variable.*

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/342760471?app_id=122963" width="100%"></iframe></figure>1. In PlayerController.cs, add ***public float speed = 5.0f;*** at the top of the **class**
2. Replace the **speed** **value** in the Translate method with the **speed** **variable**, then test
3. **Save** the script, then edit the speed value in the **inspector** to get the speed you want

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="csharp" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">public float speed = 20;

void Update()
{
  transform.Translate(Vector3.forward * Time.deltaTime * speed);
}
```