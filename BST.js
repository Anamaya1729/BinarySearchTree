class BST{
    constructor()
    {
      this.root = null;
    }
  
    Insert(data)
    {
      let newNode = new Node(data);
      if (this.root === null)
      {
        this.root = newNode;
      }
      else
      {
        this.root.InsertNewNode(newNode)
      }
    }
  
    Print()
    {
      this.root.Visit(this.root)
    }

    Search(value)
    {
      let found = this.root.Search(value)
      return found
    }
  }