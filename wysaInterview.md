## My solution to the assessment REST apis 
### https://github.com/mitul013/wysaClone/blob/main/README.md

## My leetcode challenge 

'''

    class Solution {
      public boolean validate(TreeNode rootNode, Integer low, Integer high) {

        if (rootNode == null) {
            return true;
        }
        
        if ((low != null && rooNode.val <= low) || (high != null && rootNode.val >= high)) {
            return false;
        }

        return validate(rootNode.right, rootNode.val, high) && validate(rootNode.left, low, rootNode.val);
    }

      public boolean isValidBST(TreeNode root) {
        return validate(root, null, null);
     }
  }

'''

## I will be attempting the bonus challenge 
### yes

[If you attempt bonus points]

## I attempted these bonus points - 
### Live project url - 
https://wysaclone.herokuapp.com/

### Database connection url - 
mongodb+srv://<username>:<password>@cluster0.u6o94.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

### Code (github or other) repository - 
https://github.com/mitul013/wysaClone
