def arithmeticProgression(num):
  r = 1
  sum = num
  while r != num:
    sum += r
    r += 1
  return sum

print(arithmeticProgression(100))