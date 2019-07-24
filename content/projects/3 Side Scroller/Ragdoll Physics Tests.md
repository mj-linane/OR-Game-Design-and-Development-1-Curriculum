# Unreal Engine Ragdoll Physics Tests

## Test #1 Player Character Physics

1. Change Player gravity, jump height, slope
    1. Open ThirdPersonCharacter blueprint
    2. Under Components > Click on Character Movement
    3. Details panel > Character Movement: Physics Interaction > Customize character movement

## Test #2 Ragdoll physics

1. Find 3rd person skeletal mesh > make copy > make physics actor
2. Can test by pressing *simulate* at the top, and CTRL Right click to drag around > click SAVE
3. In content browser > Get the skeltal actor "skeletal_actor" and drag it out into the level. Notice it does not move.
4. Open level blueprint > Get reference to skeletal actor > Add event "G" key press > Simulate Physics. Check the red check box.

    !["Enable Skeletal Mesh Physics in Blueprints"](/content/images/EnableSkeletalMeshPhysics.png)

5. Full Guide: [https://www.youtube.com/watch?v=T_gvrQjsAoQ](https://www.youtube.com/watch?v=T_gvrQjsAoQ)

## Test #3 Make Character Ragdoll Blueprint

1. Make copy of ThirdPersonCharacter blueprint
2. Rename blueprint to "BP_Ragdoll_Character"
3. Delete camera in "BP_Ragdoll Character"
4. In viewport > Click on mesh
5. In details panel > Physics > Change any options you would like under the Physics dropdown
6. In details panel > Collision > Collision Presets > Change to Ragdoll
7. Bonus: Tutorial on Ragdoll on Hit

    [UE4 Tutorial: Ragdoll Physics](https://www.youtube.com/watch?v=1OcGAGT2opU)

## Test #4 Make A SeeSaw With Physics Constraints

[https://www.youtube.com/watch?v=JGymDuq8nV0](https://www.youtube.com/watch?v=JGymDuq8nV0)

## Resources

- UE4 Physics Documentation: [https://docs.unrealengine.com/en-us/Engine/Physics/PhysicsBodies/Reference](https://docs.unrealengine.com/en-us/Engine/Physics/PhysicsBodies/Reference)
- All Physics Tutorials

    [UE4 Physics Based Tutorials - YouTube](https://www.youtube.com/playlist?list=PLEp7216xGGII6tRXPfxbPGPec1VWRWDSO)