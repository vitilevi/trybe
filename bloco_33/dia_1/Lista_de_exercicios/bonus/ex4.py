gasPrice = 2.5
ethanolPrice = 1.9

def getDiscountedPrice(price, percentage, qtd):
  return round((price - (price * (percentage/100))) * qtd, 2)

def calcGas(quantity, gasType):
  if gasType == 'A':
    if quantity <= 20:
      return getDiscountedPrice(gasPrice, 3, quantity)
    if quantity > 20:
      return getDiscountedPrice(gasPrice, 5, quantity)
  
  if quantity <= 20:
    return getDiscountedPrice(ethanolPrice, 4, quantity)
  if quantity > 20:
    return getDiscountedPrice(ethanolPrice, 6, quantity)
  
print(calcGas(200, 'B'))