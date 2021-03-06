function getTreeCount(r, d, forestArray) {
  let treeCount = 0;
  for (i=0; i < forestArray.length; i+=d) {
      let toCheck = (r*i)/d % 31;
      if (forestArray[i].charAt(toCheck) === '#') {
        treeCount = treeCount + 1;
      }
  }
  return treeCount;
}

function mapForest(forestArray) {
  let product = getTreeCount(1, 1, forestArray)*getTreeCount(3, 1, forestArray)*getTreeCount(5, 1, forestArray)*getTreeCount(7, 1, forestArray)*getTreeCount(1, 2, forestArray);
  return (`You will hit ${product} trees.`)
};

let myForest = [
  '.#....#..##.#..####....#.......',
  '......#..#....#....###......#.#',
  '#..#.....#..............##.#.#.',
  '#.#...#....#...#......##..#..#.',
  '...#..#.##..#..#........###.#.#',
  '...#.#..........#.........##...',
  '...#.#....#.#....#..#......#...',
  '..##.#.....#.......#.###..#..##',
  '..#.......#.......#....##......',
  '....##........##.##...#.###.##.',
  '#.......#.......##..#......#...',
  '..##.............##.#......#...',
  '...#.####....#.....#...##......',
  '.............##.#......#.......',
  '..#...#....#......#....#.......',
  '..#....#..#............#.......',
  '##...#..#........##..#......#..',
  '##........##........#.#.......#',
  '#.......#........#.#..#....###.',
  '.....#..#.#..........##...#....',
  '..##...#......#.#...#..#...#...',
  '##.##...#......#....#....#...#.',
  '#.......#..#.#..#....#..###.#.#',
  '#.............#.#....#..#.#....',
  '...#.......###.#.##.##.#...#..#',
  '.##.......##..##...#..###......',
  '.......#.#.#.#..####..#..#..#..',
  '...##......#.#.##.###....#.###.',
  '###......###......#.#####..#...',
  '..#........##..#..##.##..#...#.',
  '.....##..#...#..#.##.....#.#...',
  '#......#.##....#..##.#....#.#..',
  '##.#.##..#................#....',
  '......#.#....#......##.....#...',
  '..#...##..#..#...#..#.#..#.....',
  '........#.#.#.##...#.#.....#.#.',
  '#.#......#.....##..#...#.......',
  '..#.#......#...........###.....',
  '......##....#....##..#..#.#.#.#',
  '##....#.###...#......#..#...#..',
  '#.#.##....###...####.......#..#',
  '##...........#.....#........#.#',
  '.##.#..#.....#......#.......#..',
  '##..##..###....#.........##....',
  '..#..#..#.##...#.#...#........#',
  '#.##.###...#.......#...........',
  '.........#.................#...',
  '#.##...#.....#..##........#....',
  '....#.#...##...#...........#...',
  '.#.....#.#..#...##..##.....#...',
  '.#.....####....#..##..#........',
  '...#..#......##.#..##.#.#.#..#.',
  '.##.#.....#.....#...#.......##.',
  '......#..#..#......#...####....',
  '.......#......##..#..##.....#..',
  '......#.#..#...#..#.#..........',
  '....##.........#...............',
  '.#....#..##.....#....##.##.....',
  '#.#.....#...#....####....#.#...',
  '#.....#....#.#...#.............',
  '...#..#.....#....##..#..#......',
  '...#.#............#...........#',
  '###.#..#.#......#.....##.....#.',
  '####....#....###.....#..#.#####',
  '.###..#...#.#..#......##.#.#.#.',
  '.....#.##.#....#..##....#..#..#',
  '...#....#...##.....#......#.#..',
  '....#...#....#...#....#.....#.#',
  '.#.....#.....#.#..#......#..#..',
  '..#..##....##.##....#.....##...',
  '#..##...#.##...#..#.#.#.....#..',
  '...#..##.#..#....#.#....######.',
  '..........#..#.....#....#...##.',
  '#.#####.#.###..#.....#.........',
  '#....#......#..#.#.##.##..###..',
  '..#...###.#.#....##.##...##....',
  '.......#....#..#...##......#...',
  '...#.#...#..#.....#..##.#......',
  '###..##...........#............',
  '..#....#.##....#.#..##...#.....',
  '##....#...#....#.....#.#..##...',
  '..............#.##.#..#..##.###',
  '......#..#..#..#.#....###...##.',
  '.#...#..#.#.#....#..........#..',
  '..#.#.....#..#...........#.##..',
  '...#.#......#......#..#..#.#...',
  '...#....#.#.#.....#...#.##..#..',
  '.#.#..#...#........##.......#..',
  '##..........#..#...#....###.#..',
  '#.....###......#..#.#.#....#.#.',
  '..###.......#.#...............#',
  '#....#.....#.#......#..##.##...',
  '#.##.#.#....#..#.#...#.#...#..#',
  '#....#..#...........#.......#..',
  '...#.####.....#.........###.##.',
  '......#..#.....#..........#..#.',
  '#...#.#..####...#...#.#.##...##',
  '.##.........#......#.#.#.......',
  '.......##...##.##....###...##..',
  '...#..#....#..#.#.#.....#.#....',
  '#....#.#.#.......##..###..##...',
  '......#............#.#...#..#..',
  '#.#.....#......#...#.......###.',
  '...#.#................#...#....',
  '.....#......#.#..#...##.#.#...#',
  '#....#.#..#..#..##..#.##..#....',
  '#.................#..#....#....',
  '..#....#.......####....###.....',
  '.#..#.#.#...###..#...#..###....',
  '..#..#.#......#.###..........#.',
  '.....#......#.......##....##.#.',
  '.#....#........#.#.##.#........',
  '#.#..##..#..#.#...####....##...',
  '...#....#.#..#...#..........#..',
  '.#.....#.##....#...##..........',
  '....##....#.....#.....#...#.###',
  '.#...##.#.#..##..#...#.#..#..#.',
  '..#.......#.##.....#.#........#',
  '...#...#.....##..#.#.#....#....',
  '...#.....#.......##.........#.#',
  '.##.....#..#.#...#.#...#.#...#.',
  '...........#...#.###..#...#..#.',
  '#.##........#..###.##...####...',
  '.#.....#.#...##...#..#..#...##.',
  '..#....#..#...#.....#.....##...',
  '..###..#.#.....##........#.##..',
  '.#.#..##........#.##....#..#.##',
  '.####.#..##..#.#..#....##....#.',
  '.##....##...#.#........#.......',
  '....#..#..#...#..#..#..#.#.....',
  '...#......................#....',
  '#.....#.#....#..#..#.#..#....#.',
  '##.....#.....##..........###...',
  '.#..#..............#...##.#.#.#',
  '...#...#.#.............#.#..#.#',
  '..#.....#.......#......#.#.....',
  '.###.#..#..#..#.#..#.....#.....',
  '.....##..##...##.......#....###',
  '.#........###...##..#....##....',
  '#....#.#......##..#....#.##..#.',
  '#....#.#...#........##...###...',
  '.#.....#...#.###....#.##.#.####',
  '###......#....#...#....##..#..#',
  '##....#..###......#...#.#.#....',
  '..........#......##.#..#.......',
  '.#..#......###.........##...#..',
  '....#......#....#.........#.#.#',
  '##.#.#...#.#...#...#..#......#.',
  '....#.##.........#..#.....##.#.',
  '........#...#..#.#.#.#.....##..',
  '..#......#.#.#..#.....##.......',
  '..............#....#....##.#..#',
  '....#.#.....#....#.#.###.#....#',
  '..#..........#..#......#.##..#.',
  '...#...#.#.............#..#....',
  '#.......#..#..##.........##..#.',
  '..##..#............#.....#.....',
  '....#.#..##...#.#..#.........#.',
  '........#.......#.##....#....#.',
  '...#.....#.#.....#.#....#......',
  '..#......##.#.............#.#.#',
  '#.#.............#.#.....#......',
  '.##....##.#.....#....#...##....',
  '.#.#....##....#.....##.........',
  '...#.....#.....#.....#..#.###..',
  '.......#....#...##.#...#...#..#',
  '..#.#.......#...###.#...#....#.',
  '.....###..##....###.#.##.......',
  '....#..................##.#.##.',
  '.#.......###.##...#.#.....#....',
  '....#....##...##.....#.#...#..#',
  '#..#.....#......##...#....#....',
  '#..##.........#.....#...#......',
  '...#..##.......##......#..#####',
  '.#..###.###.#.##........#......',
  '.#...#....#....#.#....#...##...',
  '##........#....#.........##..#.',
  '.#.....##............#.#.......',
  '....#....#...........###.....##',
  '.#......#.#.#..#....#.#.....##.',
  '......#.##.#..##....#.#.#..#...',
  '#....#......#...#..####........',
  '......#..#..##..#.......#.#..#.',
  '##....##.###.#...#.##.#..#.###.',
  '.#.........#...##...#.#......#.',
  '..#.#...........####.#....##.##',
  '.....#.#..##.#...###...#..#.#..',
  '...#..#..##.#...#.....#.##...##',
  '..##......##..........#..###...',
  '.#......##.....#.##....#.#.##.#',
  '...#.......##..##.....#....#...',
  '.##...#...#....#..#............',
  '#..#....#...........#..........',
  '......#...#.#.......#...#.##..#',
  '..#.###..#.....#.....#..#.....#',
  '....#....#..........##....#..#.',
  '.......##.#.#.#......#....#...#',
  '####..#.###........#..#......#.',
  '#........##.#.#.#.............#',
  '.#......#......#..#.##.....#...',
  '.....##.##......##.#.....#.#.#.',
  '.......##.#.....##.......#.#.#.',
  '.#.#..#.#..#.##...#.#....#.#..#',
  '.#..##....#..#...##.......#..#.',
  '.#.#..#.......#................',
  '#........#.#.#......#.#.#.#....',
  '##......#...#..##.#...##.##....',
  '##.#..#...........##...#..###..',
  '......#.####...#........#.#.#..',
  '...#........##..###.#.#...#...#',
  '.#.....##..#......##......###..',
  '..#.#...#......#..#..##.#.....#',
  '#....#..#.#..........#...#.....',
  '.#......#.##..###..#.#....#..##',
  '.......#.......#..#..#......#..',
  '..##.....##.#..#..#.....##.....',
  '........#.##...#.#.#..#..#..#..',
  '...#.######.........#.....#..##',
  '.#.#............#....#.........',
  '#...#....###.#......#.#........',
  '#.........#....#...##..........',
  '....#...........#.###.#...###..',
  '.........#........#.#.#..#...#.',
  '.#.......#.#.....#.#.....#.##..',
  '.....#.......#.....#.#.#.......',
  '#.##..#..##.......#...#......#.',
  '.###.....##...##.#...##.##.#.#.',
  '...#......##..##............#.#',
  '...#......................#..##',
  '#..#..#................#...#...',
  '#..#....#.#.#...##.......#..#..',
  '....#.#..###.##...#..#.###..#..',
  '..#...#....####.#............#.',
  '......#....#.#...#.#.#.........',
  '#...#........#.....##..###.#..#',
  '#....#...#...##...#..#....##...',
  '#..#...#..#.......#.#..##.#..#.',
  '#.#..........#...........##....',
  '.#...###...#......#.......#.#.#',
  '.........#.........#...#...##..',
  '##.#..###......##..#.....#..#..',
  '....##...............#.....#...',
  '.....#.....###.#.....#.#.......',
  '....#..#......###..#..##..#....',
  '......................#.....#..',
  '..#..#...##....##....#........#',
  '..#....#...#...#.......#.....#.',
  '...##.#.#.##......#.#.#.#.####.',
  '.###...#..#......#.#..#........',
  '#..#...##.#..#..##..##....#...#',
  '...#...#..#..#..#........#..##.',
  '.##....#.##.#....#...#.#.#....#',
  '#..#....#..#....#.......##..#.#',
  '...#.#....####...........#...#.',
  '#...#####...#.#..#......#...#.#',
  '.##....#.#.#..#......#..##.....',
  '..........#..#.#.#.....##......',
  '.....#....#..................#.',
  '.........#...#...#....#..###...',
  '.#.#.#....#....................',
  '......##............##.###..#..',
  '#.#...#........####.##..#.#.##.',
  '#........#.#.#.#..#.##.....#...',
  '......####..#.##.......#....#..',
  '.........#...#...#.....#.......',
  '..##.....#...#...#.....##.....#',
  '....#...##....#.....#..#..##.##',
  '..#.........##...##..###..#....',
  '#....#.#.........##.###.#...##.',
  '.##...#....#..#..#.#....##.....',
  '##..#..#..#...........#.##....#',
  '....#..........#...#..#.....#..',
  '........###..#..#.#.#.....##...',
  '#...#...#..###............###..',
  '..#.....#.#.#..#..#.#..#......#',
  '..#...##..#....#...#......#....',
  '#....#........##.....#..##....#',
  '#.....#.#.#..#.......##.#.#.##.',
  '..##...#...#.....#..........#..',
  '##.....#....#......#..........#',
  '......#..#..........#.#..####..',
  '......#...#............##...##.',
  '..#.......##.......#...###.###.',
  '.#..#.#.#...#..##.#......#.#...',
  '.##.....##.#.#...#.##.........#',
  '#.#.######...........#.#####.#.',
  '........#.##...##....##.#.##.#.',
  '....#......#.....#.....###...##',
  '#..............#.#....#.#....#.',
  '....#..###.#.........##.#.#....',
  '..#.#.#..##....####..........#.',
  '...#..#.......#................',
  '...#....#..............#....#..',
  '.....#...#...#....#.#.#..#...#.',
  '......##.............###.##..##',
  '.#...#.#..#......#..#.##.......',
  '##.....#.....#.##...#....#.....',
  '..#..#.#.#.#.#..........#..###.',
  '##..........#........#....#.#..',
  '.....#...#........#.#..###....#',
  '.###.#........#.##......#.#...#',
  '#...##....#....#....##.#.#.....',
  '.....#.#............#..........',
  '..#.##....................#....',
  '.....#..#..#.#..#.##.......#...',
  '.....###......#......##......##',
  '#.....#.#.......##.......#...#.',
  '.#.#...#......#..###...#.....#.',
  '#.#..#...#..##.....#...#.#..#..',
  '.....#.#..........#..#.........',
  '.###..##..##.....#...#...#..##.',
  '#...#.#....#.......##..#.......',
  '###...#.#.#..#.......#......#..',
  '....##........#..........##....',
  '............#....#...........#.',
  '#..#.#....##..#.#..#......##...',
  '.###....##...#....##..........#',
  '.###........#........###.....#.',
  '...#...#.#......#...#....#.....',
  '.###.......#.........#.........',
  '....##.#......#...###......##.#',
  '.###...#..##.....##.......#....',
  '.#.#...#..#.##....#........#...'
]

mapForest(myForest)
