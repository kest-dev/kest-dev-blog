<template>
  <div>
    <i>
      <h1>Procedural Grid Map Generation: The Path Way</h1>
    </i>
    <hr />
  </div>

  <div class="p-3">
    <p
      class="text-start"
      style="text-indent: 5%; padding-left: 20px; padding-right: 15px"
    >
      Randomness in games are practically a requirement in making sure each
      interaction is unique to the player. Simple implementations of randomness
      like enemy placement to random dialogue can provide life by having those
      characters express themselves in an rather unpredictable way. However, one
      of the biggest ways to provide randomness and give unique encounters is
      having a map generate procedurally. Providing the user a different way to
      explore your world snowballs other interesting features/encounters. Lethal
      Company for example uses premade maps for the outside areas, but inside is
      generated with seeds, so enemies, loot, and other forms of player
      interactions can be set by the map itself rather than making those areas
      by hand.
    </p>
    <p
      class="text-start"
      style="text-indent: 5%; padding-left: 20px; padding-right: 15px"
    >
      Map generation takes on many forms. Survival games tend to create maps
      with unique geometry and different methods like generating noise. But if
      your game takes place in an indoor environment, your best bet is to use
      grid-like algorithms. Wave Function Collapse is one of the newest kids on
      the block, but also the most powerful, however that experiment will be a
      later topic. The method we are showcasing is a way that uses premade rooms
      and generates paths to those rooms. This is achieved by using a
      pathfinding algorithm, such as A*, but other methods should yield similar
      results
    </p>
    <p
      class="text-start"
      style="text-indent: 5%; padding-left: 20px; padding-right: 15px"
    >
      To begin, we first have to create the grid size and how many required
      rooms are needed.
      <pre>
        <code class="language-plaintext">
        grid_size_x = 18
        grid_size_y = 18
        required_rooms = 10
        </code>
    </pre>
    </p>
    <p
      class="text-start"
      style="text-indent: 5%; padding-left: 20px; padding-right: 15px"
    >
      These definitions will be the back bone of the map generation. Next comes the pathfinding algorithm, for my projects I use A*, however any one of them will do if you have a preference. While I will no provide code for A* implementation, there are youtube tutorials and blogs on how to implement it yourself. There's a great tutorial for a <a href="https://medium.com/@nicholas.w.swift/easy-a-star-pathfinding-7e6689c7f7b2">Python implementation.</a> However, you want your paths to be returned in either an array or vector depending on the language. I used C++, so vectors were very nice to keep track of each node of the grid. However, one issue with A* is that it creates zig-zag patterns when it finishes its journey. If you're creating a lab or facility, this can become very ugly. A solution I use is the Manhattan Distance formula, which can be expressed as:
      <pre>
        <code class="language-plaintext">
        //d is Distance
        d = abs(start.x - end.x) - abs(start.y - end.y)
        </code>
      </pre>
    </p>
    <img src="../assets/manhattan1.webp" />
    <div>
        <a href="https://algorithmsinsight.wordpress.com/graph-theory-2/a-star-in-general/implementing-astar-for-pathfinding/">Source: Algorithms Insight</a>
    </div>
    <p
      class="text-start"
      style="text-indent: 5%; padding-left: 20px; padding-right: 15px"
    >
    This will create sharp turns and make it more natural for a building to be constructed.
    </p>
    <p
      class="text-start"
      style="text-indent: 5%; padding-left: 20px; padding-right: 15px"
    >
    Once you have your grid and pathfinder implemented, its time for generating your map using those tools. First, we place the random rooms on the grid. Then we create a start area, I usually set a room to (0, 0). Then amongst the rooms, randomly pick one of the rooms positions and run your pathfinder to go towards it. Once it completes, run another pathfinder, however have the start position begin in the path of the previous pathfinder. I typically avoid having it the new path use the start or end nodes so the amount of dead ends are somewhat common.
    </p>
  </div>
</template>

<script lang="ts">
import * as hljs from "highlight.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogTwo",
});

hljs.highlightAll();
</script>
