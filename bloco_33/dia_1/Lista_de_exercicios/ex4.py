def returnBiggerName(list):
  biggerName=list[0]
  for item in list:
    if len(item) > len(biggerName):
      biggerName = item
  return biggerName

print(returnBiggerName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))