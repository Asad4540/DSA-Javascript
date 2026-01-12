let arr = [1, 2, 3, 4, 5, 6, 7, 8]

class Treenode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function BuildBinaryTree(arr) {
    if (arr.length === 0) return null;

    let nodes = arr.map(val => new Treenode(val));

    for(let i=0;i<nodes.length;i++){
        let leftIndex = 2*i+1;
        let rightIndex = 2*i+2;

        if(leftIndex < nodes.length){
            nodes[i].left = nodes[leftIndex];
        }

        if(rightIndex < nodes.length){
            nodes[i].right = nodes[rightIndex];
        }
    }

    console.log(nodes[0]);
}

BuildBinaryTree(arr);