---
title: 'GD1 11: Designing Core Game Mechanics + Coding Obstacles, Health, Lasers, Winning Conditions'

---
Defining Core Game Mechanics &amp; Meaningful Play
==================================================

**What are players** ***actually doing?*** Designing a game is designing an *activity* – something that fills up the time your players spend for seconds, minutes, hours, days, even years. While some may think about games in terms of their visual aesthetics or narrative content, the fact that a game is a dynamic system with which players interact defines what is unique about games as an expressive form. Game designers have to create an activity with which players engage, from moment to moment, over time. A question designers need to ask themselves is: what are your players *actually doing* to fill their time as they play?

**A repeated activity.** For most games, the activity of play boils down to a fairly repetitive activity or set of activities – the ***core mechanics*** of a game. The core mechanic of the sport of Sculling is rowing a boat. The core mechanics of Poker are drawing cards, playing cards, and betting. The core mechanic of Starcraft is using the mouse and keyboard to issue commands to your units.

**Making activity meaningful.** An important part of game design is to make the core mechanic of your particular game meaningful. Whether it is reading text and clicking on links, moving through a 3D space, or moving pawns on a gameboard grid – how can you make *that* activity meaningful? Giving a player meaningful choice means providing a context for players to know what their choices are, to be able to choose one option out of several, and to understand how their choice has affected the state of the game.

**Action and Outcome.** As players play a game, they make many small decisions – whether the decisions are made in real-time, as in a sport or action videogame, or whether they are happening discretely, as in a strategy game where play happens in turns. Each ***action*** a player takes has some kind of ***outcome*** in the game. These action/outcome moments are the molecules of meaningful play. Gameplay is the moment-to-moment experience of these small pearls of decisions, strung together to extend across longer periods of play.

**Designing a context of meaning.** A game design should provide a context in which every player choice is meaningful. If a Chess set is sitting on a coffee table as merely a conversation piece, moving one of the pieces on the grid doesn’t really change that much. But if a game is in session, it suddenly matters very much exactly which piece you move, and when, and where. What does an action *mean* in the game – how does its outcome ramify over time? A player’s action becomes meaningful in the context of the game. The game is the context that helps to provide meaning for the action.

**Breakdowns in meaning.** Meaningful play is often most evident when it doesn’t work. You have a hand of cards and it seems like it doesn’t matter which one you play; you raise taxes on your virtual city and you never really understand the outcome of that choice; your character died and you don’t know why – all of these moments represent breakdowns when a game fails to provide meaningful play.

**A space of possibility.** When it does work, the meaningful play gives players expansive spaces of possibility – sets of choices and outcomes that represent interesting possible ways to play the game. This is what makes players want to try a game again – to see how their choices might play out differently if they attempt new approaches. A game design should give players spaces of possibility that they can explore in their own individual ways.

Examples of Game Mechanics
==========================

- **Territorial Acquisition**. These games are often zero-sum games, where the players fight over a limited amount of territory or resources. Think about Risk, for example.
- **Prediction**. Often you find this core in party games or gambling games and luck is involved in making a prediction. Roulette is an example of this.
- **Spatial Reasoning**. Often you need to consider how your game pieces work together to create a successful winning strategy. An example of this core is Tetris.
- **Survival**. This core banks on our natural instincts to survive and is found in many action games. An example is Dark Souls.
- **Destruction**. A game with this core allows players to wreck havoc on most things in the game. It is very common in first-person shooters.
- **Building**. The building and use of structures is a core of many games. Good examples are Sim City and Minecraft.
- **Collection**. The need to collect, own and match things is deeply ingrained in humans. This is a popular core mechanic in many board games and casual games (Match 3).
- **Chasing or Evading**. This appeals to our fight-or-flight response and often works as a driving core in games. An example is Pac-Man.
- **Trading**. This a very cooperative game core. Sometimes, players want to exchange resources and negotiate the values with one another. The most common example is the board game Settlers of Catan.
- **Race-to-the-end**. This core dynamic is very simple to implement and you have already created a Race-to-the-end game in your first homework assignment. It is very common in children’s games.

Identify Core Game Mechanics
----------------------------

### Examples

1. Chess: moving pieces
2. Tag: running and chasing
3. MarioKart (Or any racing game): it is driving and crashing
4. Pokemon: it is collecting and battling

### You try: Identify the core mechanics

- Musical Chairs
- Monopoly
- Modern Warfare (Or any first-person shooter)
- Beat Saber
- Madden (Pick a year)
- Skyrim (Or any open-world RPG)

Add Core Game Mechanics To Our Space Game
-----------------------------------------

### Add Obstacles

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/c5f7bba7-5dde-4859-ad46-5ff3c60aad0b_image.png)</figure></div>*Have fun with physics and collisions and add obstacles into your game*

1. Go to Project &gt; Images &gt; Asteroids and select any asteroid and drag it onto Hierarchy
2. In the Inspector, click on Add Component and add a RigidBody 2D and set the Gravity to 0 and the Linear Drag to 1 to ensure that the asteroid will stop moving after a short distance
3. To allow the spaceship and the asteroid to be able to push each other, add the Polygon Collider 2D to *both* the asteroid and the spaceship

### **Introduce Health**

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/55b1482d-0ce9-46b6-987c-bec6a6b0520d_image.png)</figure></div>*You’ll introduce health so that objects can damage each other on collision*

1. While clicking on the SpaceshipRed in the Hierarchy, go to the Inspector window and add the Health System Attribute script to keep track of the health of the player.
2. Go to Hierarchy and click on the asteroid. Now, in this Inspector window, add the Modify Health Attribute script
3. When the red spaceship hits the asteroid, the health of the red spaceship will decrease by -1. You can change this value by adjusting the value of Modify Health Attribute (Script) &gt; Health Change

Did you know?

- If you changed the Health Change value to a positive number, you could introduce objects that facilitate healing/recovery into the game

### **Define the Winning Conditions**

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/353572106?app_id=122963" width="100%"></iframe></figure><div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/12a1de93-e999-4309-87f4-72365fd5a776_image.png)</figure></div>*You’ll define and program the winning conditions of the game*

1. Display the changes in the player’s health, by adding a pre-made design by going to Project &gt; Prefabs &gt; UserInterface and drag that into the Hierarchy
2. By default, the player wins the game if she/he manages to get 5 points. If you want to change that, you can go to Inspector &gt; UI Script (Script) &gt; and change the value of Score To Win
3. Now, go to Hierarchy &gt; select SpaceshipRed. Go to Inspector and change the Tag from Untagged to Player
4. Test the game by clicking play. When the player hits the asteroid, you will see that health drops by one point. When the points reach zero, the Game Over text appears

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/e011529c-ed12-4bf6-b866-2783e32bb6ab_image.png)</figure></div>#### **Definitions**

- **Tagging GameObjects**: allows scripts to classify, identify, and differentiate GameObjects

###  Create a Laser Prefab

<figure class=""><iframe allowfullscreen="" height="1000px" src="https://player.vimeo.com/video/353572127?app_id=122963" width="100%"></iframe></figure><div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/9d8b588e-845c-445f-9c51-7496c0ffc13d_image.png)</figure></div><div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/126f0d35-34ff-429e-a51a-320c374f4443_image.png)</figure></div>*You’ll introduce health so that objects can damage each other on collision*

1. Go to Project &gt; Assets &gt; Images &gt; Projectiles and drag LasersMid into the Hierarchy
2. In the Inspector of LasersMid, click on Add Component and add Capsule Collider 2D and change the Direction to Vertical. Tweak the Size until it just covers the projectile. Now, tick off the check mark next to Is Trigger
3. Also add Rigidbody 2D to allow the projectile to move and make the Gravity 0 as you did for the other Rigidbody 2D components
4. Now add the Bullet Attribute script to keep track of who shoots the laser so that the game knows to whom to assign points to
5. Now that all of the necessary components have been added to the laser, you will make it a prefab by dragging LasersMid from the Hierarchy into Project &gt; Assets &gt; Prefabs. Once you’ve checked that LasersMid has been transformed into a prefab, delete LasersMid from the Hierarchy

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/ce9b060e-f616-4401-bf6b-e26757f0a7cf_image.png)</figure></div>#### Definitions

- **Bullet Attribute script**: holds a reference to which player initially shot it
- **Prefab**: a “master copy” to generate GameObjects from

Did you know?

- Trigger colliders are used when you need to detect when two objects touch or intersect each other without the components applying a push or resistance

### Create a Laser Shooter

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/7cead858-cea2-4f57-8371-42849f1967d0_image.png)</figure></div><div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/72884fac-f4b5-4f15-86a3-044f5f4033a6_image.png)<figcaption>*You’ll introduce health so that objects can damage each other on collision* </figcaption></figure></div>1. Click on SpaceshipRed in the Hierarchy and then right click and click on Create Empty to create an empty GameObject. Right click on it and rename it LaserShooter
2. While clicking LaserShooter in the Hierarchy, go to the Inspector &gt; Add Component &gt; add Object Shooter script. Next, drag and drop the LasersMid Prefab that you created in Step 1.1 and into Prefab to Spawn. Feel free to change Key to Press (the key that will be pressed to trigger the laser) to something else
3. After the script has been added, you will notice a green arrow and circle appears in the game window. Move this to the front tip of the ship
4. Now, click on the asteroid in the Hierarchy. In its Inspector window add the Destroy for Points script so that the asteroid will be destroyed on collision with the laser. Change the value of Points Worth from 1 to 0 because the purpose of this game is not to gain points for destroying the asteroids
5. Press play to test the game and notice that you can destroy the asteroids

<div class="wp-block-image"><figure class="aligncenter is-resized">![](https://connect-prd-cdn.unity.com/20190618/learn/images/08851c30-cd49-42cc-b293-fa008fed5bcc_image.png)</figure></div>#### Definitions

- **Object Shooter script:** creates copies of a Prefab and shoots them out
- **Destroy for Points script:** removes an object on collision and awards the Player points

### Advanced Challenge: Add A GameObject That *Gives* Players Health Points