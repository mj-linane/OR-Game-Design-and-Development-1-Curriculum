---
title: 'Playgrounds: Set Up Project, Player Object, and Particle Effects''
author: 'MJ Linane'
date: '10-01-2020'
course: 'G:\My Drive\.work-code\or-game-design-1-unity-lesson-plans\lesson-plans\3-playgrounds'
lesson number: ''
---

## Vocabulary

- **Parenting GameObjects**: Child GameObjects inherit movements from the parent GameObjects

## When you get stuck

When you get stuck, remember: **Read-Search-Ask**.

1. **Read** the documentation or error
2. **Search** Google
3. **Ask** your friends for help
4. **Ask** the teacher

Do those steps in order. This is the most time-efficient way to handle being stuck, and it’s the most respectful of other people’s time, too.

Most of the time, you’ll solve your problem after doing a quick Google search or by trying to complete one or two steps of the problem.

## Activities

### 1. Setup The Playground Game from the Unity Store

1. Start a new game from the Unity Hub > New > 3D (Using Engine 2019.4.11f)
2. Name the game: `Playgrounds - Space Shooter`
3. Location: H://
4. Once game loads go to the [Playgrounds Package in the Unity Store](https://assetstore.unity.com/packages/essentials/tutorial-projects/unity-playground-109917)
5. Login, click on Add to My Assets, Click on "Open In Unity"
6. That will now bring you to the Unity Package Manager in Your Project, click on "Import" in the bottom right.

Review all of the new asset files that you now have access to.

### 2. Setting Up The Level and Character

You’ll set the scene by creating a background for your game.

1. Create a new scene by going to File > Create a New Scene
2. In the Project View, navigate to Images > Backgrounds > `BG_Space` and drag it into the Hierarchy
3. Go to the Inspector window and change the Draw Mode from `Simple` to `Tiled`.
4. Change the `Width` to 500 and the `Height` to 500.
5. Expand the Visibility Options and set the Sorting Layer to Background to ensure that this element will always be behind other game elements
6. Resize `BG_Space` to fit the whole screen by making sure that the image covers the grey rectangle that represents the camera

### 3. Create and Add Interactivity to the Player

1. Go to Project > Images > Spaceships > `SpaceshipRed`
2. Go to Inspector > Add Component > Search for `Push` and add it
3. When you add the Push script, you will notice that a Rigidbody 2D was also automatically added to the Inspector. This is because physics is required to make the game object move
4. Make adjustments:
   1. On Rigidbody 2D component:
      1. change the `Gravity` value to 0
      2. change `Linear Drag` to 2
      3. you many change the `Angular Drag` to a value higher to slow down the rotation speed but this is optional.
   2. Push Script Component > change the `Push strength` from 5 to 8
5. Test the game by clicking the Play button and use the arrow keys to turn the spaceship and spacebar to push it forward.

#### Push Script

- Push script applies a push in a direction when pressing a key

#### WARNING: Don't make changes in play mode

- Changes made in the Play mode are not saved! Get out of the Play mode and make the changes again if you want them to be reflected in the game

### 4. Add the Rotate script to the Player

1. Go to Inspector > Add Component > Search for `Rotate` and add it to allow steering
2. Change the Input keys (Type of Central) from Arrow Keys to `WASD`
3. Test the changes by going to Play mode. In the Rotate Script Component, you may change the `Speed` variable to something that seems fun to fly around.

### 5. Add a Flame to the Spaceship

Now for the finishing touches: you’ll add a particle to your player to make it look more animated.

1. Go to Project > Prefab > Particles > `P_Flame` and drag it on the Hierarchy
2. Parent the `P_Flame` under `SpaceshipRed`. Now, the flame will move in unison with the red spaceship
3. Change the initial position of the flame on the back of the vehicle.
   1. While selecting `P_Flame` in the Hierarchy, go to Inspector > Transform
   2. Change the Position, Rotation, and Scale values to your preference. You can also do this by using the Position, Rotate, and Scale tools on the top left hand part of the screen

### 6. Save The Scene

Save the scene by going to File > Save As > Level 1 and save it in the Scenes folder

### 7. Setup Camera

You’ll change the view frame and make the camera follow an object by adding the `Camera Follow` script

1. Select the Main Camera in the Hierarchy and in the Inspector window
2. Change the Frame Size value until you’re happy with how it appears on the screen
3. While still selecting the Main Camera on the Hierarchy, Go to Inspector > Click `Add Camera Follow` Script
4. Drag and drop the `SpaceshipRed` from the Hierarchy into the Inspector. Add it to the empty box called `Object to Follow` in the `Camera Follow` Script
5. Press play and notice how the camera now follows the red spaceship when you move it

### Toggling Playground Mode

When you use Playground, the Unity Interface is simplified and made easier to read for beginners. If you ever want to use the original Unity interface:

1. Go to the top menu
2. click `Playground` > `Turn Playground Off`

### 8: Take Screenshots

To submit evidence of your game progress, you will submit screenshots/recording of your different mods. The best time to do this is in play mode.

### How To Take Screenshots

#### Windows 10

1. Click on Start
2. Go to "Snip and Sketch"
3. Click on New
4. Select the area of the screen you want to save.
5. Once the image is clipped, click on the Save button in the top right.
6. Select save location.
7. Upload to Google Classroom assignment.

#### Mac

[Mac Instructions](https://support.apple.co/HT201361)

### 9: Save Your Game and Version

1. Save Your Game
2. Click on "Collab" in the top right. Type in a comment that describes the changes you made to your game. For this first time install, we can just type "Setup Project".
3. Click "Publish Now"
4. You can now close your project.
