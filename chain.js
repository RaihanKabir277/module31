
const data = [{
    id: 1,
    name: 'abul',
    address: 'kochu khet'
}]

// console.log(data);
// console.log(data[0]);
console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop',price: 65000 },
        { id: 2, name: 'macbook',price: 165000 },

    ]
}

// console.log(products);
// console.log(products.data[1]);
// console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
      first: '54/1 uttor side',
      second: 'poribag er goli',
      third: 'no dorai'
        },

        city: 'Dhaka'
    }
}

// console.log(user);
// console.log(user.address);
// console.log(user.address.street);
console.log(user.address.street.second);

// jodi amon hoi je street namer kono object nai tahole error message theke bachar jonno ? mark use korbo

console.log(user.address.street?.second);


