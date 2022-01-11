def findLowerElement(list):
  lower = list[0]
  for i in range(len(list)):
    if list[i] < lower:
      lower = list[i]
  return lower

print(findLowerElement([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))