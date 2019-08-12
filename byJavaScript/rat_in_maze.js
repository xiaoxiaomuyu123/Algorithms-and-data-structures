function rat_in_maze(maze, pos = [0, 0], path = [...pos], transerver = []) {
    const [x, y] = pos;
    if(maze[x][y] === 2) {
        return path;
    }
    transerver[x * maze.length + y] = 1;
    const choices = [
        [x + 1][y], [x - 1][y],
        [x][y + 1], [x][y - 1]
    ]
        .filter((x, y) => {
            return x > 0 && y > 0 && x < maze.length && y < maze[0].length
                && (maze[x][y] !== 1) && (!transerver[x * maze.length + y])
        });
    for(let [x, y] of choices) {
        const p = rat_in_maze(maze, [x, y],
            path.concat([[x, y]], transerver))
        if(p) return p
    }
}
