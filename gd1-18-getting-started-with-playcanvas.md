---
title: 'GD1 DL 18: Getting Started With PlayCanvas'
date: '2020-04-06T10:49:41-04:00'
status: publish
permalink: /courses/game-design-and-development-1/lessons/gd1-dl-18-getting-started-with-playcanvas
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 28239
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'April 9, 2020 @ 1:29 pm'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
course_id:
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

To continue building your game design skillset, we are going to be using an online game engine called PlayCanvas. It works in the browser and can produce HTML5 games. The language we will be using is JavaScript. This is different than Unity’s C# but looks similar and once you understand one programming language, it is easy to transfer knowledge to another.

Getting Started
---------------

In order to learn the basics of PlayCanvas Platform, let’s build the following simple 3D web app:

<figure><iframe allowfullscreen="" src="https://playcanv.as/b/fPYP6Swg/"></iframe></figure>Your Profile
------------

Once you’ve signed in you will be greeted with your profile page. Your profile page shows you all the projects you have access to, this includes all projects you have created and any that you have been given permission to access.

<div class="wp-block-image"><figure class="aligncenter">![Project List](https://developer.playcanvas.com/images/platform/project_list.jpg "Project List")</figure></div>A Project is a collection of:

- **Scenes** – A hierarchy of [Entities](https://developer.playcanvas.com/en/user-manual/glossary/#entity) used to build up your game. A Scene could be a single level or your entire game. It depends.
- **Assets** – 3D Models, textures, images, sound files and anything other assets you use in your game.
- **Scripts** – Your source code. You can either write code using the PlayCanvas built-in script editor, or you can sync to your project using code-hosting services like Github or Bitbucket.
- **Published Apps** – Your applications can be exported to archives ready to be deployed, or published directly to PlayCanvas servers.

Creating a New Project
----------------------

On your profile page, click on the PROJECTS tab and click on ‘Create a Project’. This takes you to a page where you set the details of your new project:

- **Project Name** – The name is used to build the URL for your project. For example, if user ‘joebloggs’ created a project called ‘spacewar’, the project can be found at <https://playcanvas.com/joebloggs/spacewar>
- **Description** – A short description of your project that is displayed when you share a published build to social media.
- **Visibility** – By default, new projects are public allowing other community members read access to your work. Selecting PRIVATE will allow you to work in private but note that you will need a [Pro account](https://playcanvas.com/plans) to use this feature.

Set a name and description for your project. Then click the CREATE button and you are taken to the project home page.

A Simple Example: Spinning Cube
-------------------------------

Now we’re ready to build a simple 3D web app: a spinning box!

The first thing to do is create a new scene. A scene represents the data required to start up the PlayCanvas engine. It could represent an entire game or perhaps a single level of a game. It’s up to you, but you will require at least one scene. Therefore, on the project home page, select the EDITOR button in the header. This opens a the Scene Selection dialog.

<div class="wp-block-image"><figure class="aligncenter">![Scene Selection](https://developer.playcanvas.com/images/getting_started/scene_selection.png "Scene Selection")</figure></div>A new project automatically contains a single scene named ‘Untitled’. Select the ‘Untitled’ link to open the scene in the PlayCanvas Editor.

<div class="wp-block-image"><figure class="aligncenter">![Editor](https://developer.playcanvas.com/images/getting_started/editor.png "Editor")</figure></div>### Scenes, Entities and Components

A PlayCanvas Scene is effectively a collection of ‘things’ that make up your app. We call these things Entities and they represent the functional objects in your app: a vehicle, a character, a light, a camera, etc. Entities are shown in the HIERARCHY panel in the Editor’s interface.

<div class="wp-block-image"><figure class="aligncenter">![Hierarchy](https://developer.playcanvas.com/images/getting_started/hierarchy.png "Hierarchy")</figure></div>It’s represented by a tree control because entities are hierarchical. You can parent one to another and if the parent moves, the children move with it.

Entities are built from Components. A Component powers an Entity with a particular piece of functionality. For example, a Component can add a graphical model to an Entity, it can animate the model, it can add a light source to an Entity, it can add an audio source, and so the list goes on.

Let’s begin by naming our new Scene:

- Select the cog icon in the bottom left of the Editor toolbar.
- In the INSPECTOR panel, set the Scene Name property to something like ‘Spinning Cube’ and hit Enter.

Now, for our spinning box experiment, we will need 3 Entities:

- A box.
- A camera (to view the box).
- A light (to give some definition to the box).

Fortunately, the Editor automatically creates a directional light and a camera for you when a new scene is created. So here are the steps to create the box:

- Right click on the Root node in the HIERARCHY panel to bring up the context menu and select ‘New Entity’ -&gt; ‘Box’. This creates a new child box entity of ‘Root’ in the HIERARCHY.

<div class="wp-block-image"><figure class="aligncenter">![New Box](https://developer.playcanvas.com/images/getting_started/new_box.png "New Box")</figure></div>You should now have someone similar to the following in the 3D View:

<div class="wp-block-image"><figure class="aligncenter">![Box In Editor](https://developer.playcanvas.com/images/getting_started/box_in_editor.png "Box In Editor")</figure></div>### Save your work?

Now would seem to be a good time to save your work, right? In actual fact, the PlayCanvas Editor continually updates your project on the server and therefore there is no need for a save button. Your work is preserved should you decide to close the Editor tab at any point. You can also use the ‘Fork’ button at the top-right of a project dashboard page to create a copy of the whole project.

### Previewing Your Work

From the Editor, you can quickly preview your work at any time. To do this, press either the ‘Launch’ button on the toolbar.

<div class="wp-block-image"><figure class="aligncenter">![Launch Buttons](https://developer.playcanvas.com/images/getting_started/launch_buttons.png "Launch Buttons")</figure></div>This will open a new tab and fire up your web app. Based on the steps above, you should see something similar to what is shown below:

<div class="wp-block-image"><figure class="aligncenter">![Box Launched](https://developer.playcanvas.com/images/getting_started/box_launched.png "Box Launched")</figure></div>Once you are done with previewing your Scene, you can either close the Launch tab or simply switch back to the Editor tab. Note that if you leave the Launch tab open, a live link persists between the Editor and the running app. One method of working it to tear off the Launch tab and place it side by side with the Editor tab which makes previewing any live updates much easier.

### Scripting Entities

So far, we’ve managed to render a box. Now, let’s animate it.

The real power and versatility of PlayCanvas comes from the ability to assign scripted behaviour to individual entities. This is done by assigning a script component to an entity and then specifying the JavaScript file that executes in relation to that entity. In order to get the box to spin, we need to write some code that executes every frame, rotating the box on its vertical axis by a small amount at a time.

#### Hosted or Local code?

There are two main ways of writing code for PlayCanvas. The first and simplest is to use the PlayCanvas built-in script editor, which saves directly to the PlayCanvas servers. The second is to edit code in your favorite text editor and run a local web-server.

For this tutorial we’re going to stick to editing code using PlayCanvas, but for more details see our [Scripting Workflow](https://developer.playcanvas.com/en/user-manual/scripting/workflow/) page.

First, we need to create a script component and create a new script to edit.

- Right click the entity called ‘Box’ in the HIERARCHY panel and select the following menu item: ‘Add Component’ -&gt; ‘Script’.

<div class="wp-block-image"><figure class="aligncenter">![Add Script](https://developer.playcanvas.com/images/getting_started/add_script.png "Add Script")</figure></div>- In the Script section in INSPECTOR, click the top line of the URLs field to edit the filename. Set the Add attribute of the script component to ‘spinner.js’ and hit Enter.
- Click on the name of the script ‘spinner.js’ and the PlayCanvas script editor will open in a new tab.

In the code editor update the script template to match the code below (you just need to fill in the body of the update function):

<div class="wp-block-image">![](../../../../../uploads/2020/04/spinner.png)</div>Once you’ve edited the code, press the “Save” button in the code editor and switch back to the Editor tab. Note that the script editor actually does require you to explicitly save, unlike the main Editor application.

With that done, you can select the Launch button again. This time, you should see your box rotating on the spot. Congratulations, you have built your first PlayCanvas app!