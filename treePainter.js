const height = Math.round(Math.abs(process.argv[2])) || 5;

const treePainter = (treeHeight) => {
    const symbol = '*';
    const tree = new Array(treeHeight).fill(" ");
    for (let i = 0; i < treeHeight; i++) {
        tree[treeHeight - i] = symbol;
        tree[treeHeight + i] = symbol;
        console.log(tree.join(''));
    }
}

treePainter(height);




