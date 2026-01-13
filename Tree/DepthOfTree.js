function Treenode(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
}

var MaxDepth = function (root){
    if(root == null) return 0;

    let leftDepth = MaxDepth(root.left);
    let rightDepth = MaxDepth(root.right);

    return 1+ Math.max(leftDepth,rightDepth);
}

let root = new Treenode(1);
root.left = new Treenode(2);
root.right = new Treenode(3);
root.left.left = new Treenode(4);
root.left.right = new Treenode(5);


console.log(MaxDepth(root));