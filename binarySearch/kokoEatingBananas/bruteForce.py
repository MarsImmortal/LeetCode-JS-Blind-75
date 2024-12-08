import math
class Solution:
    # func def
    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        # declare the speed with least value
        speed = 1
        # while loop to experiment with the total time taken and
        # figuring out the right speed to fit in
        while True:
            # declare var named totalTime
            totalTime= 0
            # for loop to  iterate through the piles array (piles of ban)
            for pile in piles:
                # round to the upper value of time taken and store it in the dec var
                totalTime+= math.ceil(pile/speed)
            # if the time is less than desired time return
            # else increase speed
            if totalTime <=h:
                return speed
            speed+=1
        return speed
# highly inefficient for larger outputs might give time exceeded error
# time and space complexity : O(m*n) and O(1)