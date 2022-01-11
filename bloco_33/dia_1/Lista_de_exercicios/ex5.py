def calcNumberOfCans(sizeOfWall):
  numberOfLiters = sizeOfWall / 3
  numberOfCans = (numberOfLiters / 18) + 1
  return (round(numberOfCans), round(numberOfCans * 80, 2))

print(calcNumberOfCans(20))