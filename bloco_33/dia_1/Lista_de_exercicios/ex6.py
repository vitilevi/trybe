def getTypeOfTriangle(angle1, angle2, angle3):
  if angle1 + angle2 + angle3 != 180:
    return "Não é triângulo"

  if angle1 == angle2 == angle3:
    return "Triângulo equilátero"
  
  if angle1 == angle2 or angle2 == angle3:
    return "Triângulo isósceles"
  
  return "Triângulo escaleno"

print(getTypeOfTriangle(40, 60, 80))