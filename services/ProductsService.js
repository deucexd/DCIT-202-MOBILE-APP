const PRODUCTS = [
    {
        id: 100,
        name: 'Silver Cuban Link',
        price: 350,
        image: require('../assets/products/silver cuban link.jpg'),
        description: 'Start your chain collection with our silver 5mm Cuban Link Chain. Our best-selling chain boasts the perfect weight and shine for the piece you’ll wear day after day.'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        image: require('../assets/products/car-101.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/cake-102.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}