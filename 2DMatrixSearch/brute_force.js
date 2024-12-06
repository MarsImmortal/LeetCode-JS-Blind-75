class Solution {
    searchMatrix(matrix, target){
        for (let i = 0; i<matrix.length; i++){
            for (let j = 0; j<matrix[i].length; j++) 
                if (matrix[i][j] === target) 
                    return true;
        }
        return false; 
    }
}

//worst time and space complexity at O(m*n) O(1)