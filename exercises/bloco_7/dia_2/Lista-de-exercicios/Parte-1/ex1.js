const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const customer = Object.values(order);
  const customerAddress = Object.values(order.address);
  const deliveryValues = Object.values(order.order.delivery);
  console.log(`Olá ${deliveryValues[0]}, entrega para ${customer[0]}, Telefone: ${customer[1]}, R.${customerAddress[0]}, N:${customerAddress[1]}, AP: ${customerAddress[2]}`)
}

customerInfo(order);

const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = 50;
  const drink = order.order.drinks.coke.type;
  const pizza = order.order.pizza;
  const copyPizzas = [pizza.muzzarella = pizza.margherita, pizza.calabresa = pizza.margherita];
  const pizzas = Object.keys(pizza);
  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[2]}, ${pizzas[3]} e ${drink} é R$ ${newTotal}.`);
}

orderModifier(order);