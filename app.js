const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
})

// Setting up the GET request for the products API (all products)
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    // console.log(req.params);
    // console.log(req.params.productID);
    const { productID } = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );
    if(!singleProduct){
        return res.status(404).send('Product does not exist'); 
    } 
    return res.status(200).json(singleProduct);
})


app.listen(5000, () => {
    console.log('Server is running on port 5000....');
})
