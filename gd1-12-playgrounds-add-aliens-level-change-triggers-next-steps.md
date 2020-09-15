---
title: 'GD1 12: Playgrounds &#8211; Add Aliens, Level Change Triggers, Next Steps'
date: '2019-10-04T08:13:36-04:00'
status: publish
permalink: /courses/game-design-and-development-1/lessons/gd1-12-playgrounds-add-aliens-level-change-triggers-next-steps
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 26152
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'March 5, 2020 @ 9:47 am'
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
course_id:
    - '25474'
---
Need Help? Read-Search-Ask
--------------------------

When you get stuck, remember: **Read-Search-Ask**.

1. **Read** the documentation or error
2. **Search** Google
3. **Ask** your friends for help
4. **Ask** the teacher

Do those steps in order. This is the most time-efficient way to handle being stuck, and it’s the most respectful of other people’s time, too.

Most of the time, you’ll solve your problem after doing a quick Google search or by trying to complete one or two steps of the problem.

Add Aliens That Need Rescuing
-----------------------------

<figure class=""><iframe allowfullscreen="" height="100%" src="https://player.vimeo.com/video/353572156?app_id=122963" width="100%"></iframe></figure><div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/a6b074ae-5c20-48e9-ab89-558f6b1a732c_image.png)</figure></div>*You’ll finish the game by turning it into a rescue mission*

1. Go to Project &gt; Assets &gt; Images &gt; Creatures and drag and drop an alien onto the Hierarchy
2. In the Inspector, add the Polygon Collider 2D and tick off the Trigger option. Also add the Auto Rotate script
3. In the Rigidbody 2D that is automatically added, make Gravity 0, make Friction 1, and Angular Friction 0.5
4. Add the Collectable Attribute (Script) so that when the player touches the alien, the player receives one point and the alien is removed from the screen
5. Press play and check that when the player touches the alien, the alien is removed and the player receives one point

### Definitions

- **Auto Rotate script**: automatically rotates a GameObject
- **Collectable Attribute script**: allows an object to be picked up for score

Add Levels To The Game
----------------------

<div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/dbd68220-e48e-4e1e-a8f0-28bdef0ac749_image.png)</figure></div><div class="wp-block-image"><figure class="aligncenter">![](https://connect-prd-cdn.unity.com/20190618/learn/images/450d56be-e6cf-4bf8-b355-7ca756380841_image.png)</figure></div>*You’ll add levels to the game*

1. From the Hierarchy, drag the alien and the asteroid into the Prefab folder (Project &gt; Prefab)
2. Now, duplicate the objects and place them around the game scene to make your game more exciting and challenging

Next Steps
----------

**Challenge Ideas:**

Now that you have gotten started with Unity Playground, use the scripts and assets to prototype different game ideas you may want to develop as part of the final Playgrounds Game Design.

- <span style="font-size: 1rem;">Dog fight game between two players</span>
- Spaceship precision flying game
- Space racing game
- Try different Unity scripts built it, such as adding an Point Effector 2D to an object. (Change Force Magnitude to a negative value to cause objects to get closer to it)