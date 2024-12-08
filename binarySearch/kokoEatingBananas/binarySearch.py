class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        #have two pointers l and r 
        # r stores the max val in given array
        # l stores the least val possible : 1
        l, r = 1, max(piles)
        # declare result and give the max speed
        res = r
        # iterative loop to experiment with speed
        while (l<=r):
            # midpoint declared and stored in k
            k = (l+r) //2
            # initialise time var
            totalTime = 0
            for p in piles:
                # round it up to the smallest integer greater than the res
                totalTime+= math.ceil(float(p)/k)
            # if the time is suitable store it in res 
            # and try reducing the speed 
            if totalTime<=h:
                res =k
                r = k-1
            # else increase the speed
            else:
                l = k+1
        return res