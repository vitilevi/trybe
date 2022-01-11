ratings = [6, 8, 5, 9, 10]

for i in range(len(ratings)):
  if(ratings[i] % 3 == 0):
    print('{} é Múltiplo de 3' .format(ratings[i]))