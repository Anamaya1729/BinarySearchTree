let tree;

function setup() {
  createCanvas(windowWidth,windowHeight)
  tree = new BST()
  background(30);
  translate(width/2, 16);
  for (let i = 0; i < 10; i++)
  {
    tree.Insert(Math.floor(random(1,100)))
  }
  console.log(tree)
  tree.Print()
}
