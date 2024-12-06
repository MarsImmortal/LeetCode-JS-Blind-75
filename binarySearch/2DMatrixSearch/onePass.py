class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int)->bool:
        ROWS, COLS = len(matrix), len(matrix[0])
        l,r = 0, ROWS*COLS-1
        while l<=r:
            mid = l+ (r-l)//2
            row, col = mid//COLS, mid%COLS
            if (matrix[row][col]>target):
                row = mid-1
            elif (matrix[row][col]<target):
                col = mid+1
            else:
                return True
        return False
    
    # best approach one pass binary search
    # time and spacee complexity O(log(mn)) and O(1)
