def calcAverageInList(list):
  sum = 0
  for item in list:
    sum += item
  return sum / len(list)

print(calcAverageInList([1, 2, 3, 4, 5, 6]))