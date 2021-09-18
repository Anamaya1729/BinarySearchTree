class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.x= 0;
      this.y= 0;
      this.level = 0;
    }

    InsertNewNode(newNode)
    {
      newNode.level = this.level + 1
      let dx = width / pow(2, newNode.level + 1);
      if (this.data > newNode.data)
      {
        if (this.left === null)
        {
          this.left = newNode;
          this.left.x = this.x - dx;
          this.left.y = this.y + 50;
        }
        else
        {
          this.left.InsertNewNode(newNode)
        }
      }
      else
      {
        if (this.right === null)
        {
          this.right = newNode;
          this.right.x = this.x + dx;
          this.right.y = this.y + 50;
        }
        else
        {
          this.right.InsertNewNode(newNode)
        }
      }
    }

    Search(value)
    {
        if (this.data == null)
        {
            return null;
        }
        else
        {
            if(value < this.data)
            {
                return this.Search(this.left, value)
            }
            else if (value > this.data)
            {
                return this.Search(this.right, value)
            }
            else
            {
                return this;
            }
        }
    }

    Visit(parent)
    {
        if(this.left != null){
            this.left.Visit(this)
        }
        if (parent) {
            stroke(200);
            line(this.x, this.y, parent.x, parent.y);
          }

        console.log(this.data)
        stroke(0);
        fill(0);
        ellipse(this.x, this.y, 40, 40);
        fill(255);
        noStroke();
        textAlign(CENTER);
        text(this.data, this.x, this.y + 5);
        if(this.right != null){
            this.right.Visit(this)
        }
    }
  }
  
