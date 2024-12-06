class Solution:
    def searchMatrix (self, matrix: list[list[int]], target: int)->bool:
        ROWS = len(matrix)
        COLS = len(matrix[0])
        top = 0
        bot = ROWS -1
        # find the potential row
        while top<=bot:
            row = (top+bot)//2
            if matrix[row][0]>target:
                bot = row -1
            elif matrix[row][-1]<target:
                top = row+1
            else:
                break
        if top>bot:
            return False
        # selected row
        row = (top+bot)//2
        l = 0
        r = COLS-1
        # normal bin search
        while l<=r:
            mid = (l+r)//2
            if matrix[row][mid]>target:
                r = mid-1
            elif matrix[row][mid]<target:
                l = mid +1
            else:
                return True
        return False

# lengthy but most efficient
# time and space complexity O(log(m*n)) and O(1)