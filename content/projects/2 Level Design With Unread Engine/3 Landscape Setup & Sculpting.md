# 15 Unreal — Level Landscape Setup and Sculpting

Date: Mar 12, 2019
Lesson Number: 15
Unit Tags: Game: Woodland Basecamp

## Steps to Good Game Level Design in UE4

1. Research examples.
2. Design Landscape.
3. Add in foliage.
4. Block out the level using geometry in Unreal
5. Build to the grid always.
6. Playtest to get a feel for how the level or game plays. Does it feel too big or too small?
7. Add in static meshes to replace geometry.
8. Blend static meshes into the environment. Match materials as best you can.
9. Add lighting, sound, post processing.

## Landscape Sculpt

1. Fact: Unreal has a built in continuous LOD as player moves around
2. Landscape Tool
    1. Don't change anything about the scale
    2. Create Landscape - change section size to 31 x 31 (more aggressive at applying LOD), smaller sections have a higher impact on the CPU, vast, sprawling landscape needs a larger Section size
    3. Component is smallest unit - default 
3. Sculpt Tool
    1. Tip: Change Sculpt Tool Strength from 0.3 → .1
    2. Shift and Click will drop the terrain
    3. Action: Create hills and valleys
4. Smooth Tool
5. Flatten Tool (To create a castle)
    1. Starts from the height of wherever I clicked first
6. Ramp Tool
7. Thermal Erosion (Simulates dirt and rocks)
    1. Tips: Gives it a "sandy look" for a little more natural
8. Hydro Erosion
9. Noise Tool
    1. Tips: To add variation to land really quickly
    2. A little harsh so not fun to run over, go over with smooth afterwards
10. Retopologize
    1. Evens out the landscape so that the textures fit over it better (less texture stretching)
11. Visibility Tool
    1. To create holes
12. DELETE LANDSCAPE to move on from practice
    1. Place Mode
    2. Select landscape actor and landscape under Outliner on left, and select and delete