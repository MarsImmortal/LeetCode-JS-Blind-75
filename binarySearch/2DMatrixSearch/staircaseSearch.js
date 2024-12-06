class Solution{
    searchMatrix(matrix, target){
        let r= 0, c= matrix[0].length-1;
        while (r< matrix.length && c>0){
            if (matrix[r][c]>target) c--;
            else if (matrix[r][c]<target) r++;
            else return true;
        }
        return false;
    } 
}

//easy to code not efficient though
//time and space complexity O(m*n) O(1)