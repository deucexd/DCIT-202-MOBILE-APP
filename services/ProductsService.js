const PRODUCTS = [
    {
        id: 100,
        name: 'Silver Cuban Link Chain',
        price: 350,
        image: require('../assets/products/silvercuban.webp'),
        description: 'Start your chain collection with our silver 5mm Cuban Link Chain. Our best-selling chain boasts the perfect weight and shine for the piece you’ll wear day after day.'
    },
    {
        id: 101,
        name: 'Gold Cuban Link Chain',
        price: 600,
        image: require('../assets/products/cubanlinkgold.jpg'),
        description: 'We’ve created a truly timeless set for you, featuring our gold 5mm Cuban Link + 2.5mm Franco Chains. The V-shaped links on the Franco Chain offer subtle variation from the bold, round links on the Cuban, creating understated details and variety.'
    },
    {
        id: 102,
        name: 'Gold Cuban Link Bracelet',
        price: 2,
        image: require('../assets/products/cubanlinkbraceletgold.webp'),
        description: 'Roll up your sleeves, because our most requested piece is finally here. The 10mm gold Cuban Link Bracelet features the same expertly crafted links as our best-selling Cuban Link Chains. Make a statement by pairing this with one of our chains or layer with our other bracelets.'
    },
    {
        id: 103,
        name: 'Silver Cuban Link Bracelet',
        price: 200,
        image: require('../assets/products/cubanlinkbraceletsilver.webp'),
        description: 'Roll up your sleeves, because our most requested piece is finally here. The 10mm silver Cuban Link Bracelet features the same expertly crafted links as our best-selling Cuban Link Chains. Make a statement by pairing this with one of our chains or layer with our other bracelets.'
    },
    {
        id: 104,
        name: 'Wilshire Set',
        price: 200,
        image: require('../assets/products/wilshireset.webp'),
        description: 'Say hello to our beloved Wilshire Set, including our best-selling Wilshire cuff and ring in gold. Complete with an Italian fine brush finish to create velvety texture and sheen, this mens modern bracelet + ring set will complement any style you choose. Create a combo tailored just for you.'
    },
    {
        id: 105,
        name: 'Wilshire Set',
        price: 200,
        image: require('../assets/products/wilshiresetsilver.webp'),
        description: 'Say hello to our beloved Wilshire Set, including our best-selling Wilshire cuff and ring in silver. Complete with an Italian fine brush finish to create velvety texture and sheen, this mens modern bracelet + ring set will complement any style you choose. Create a combo tailored just for you.'
    }




];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}