const Brand = require("./model/Brand");
const Product = require("./model/Product");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://jimmy:1234@cluster0.giyuijy.mongodb.net/EcomDemo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
    (error, client) => {
        if (error) console.log(error);
        else console.log("Connected to Jimmy's DB.");
    }
);


let product1 = new Product({
    id: 1,
    name: "Google Nest Hub Max",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://i5.walmartimages.com/asr/173a8c84-8814-4ba5-b20f-340a4a11ac5a_6.bc4ae44b11d51cb8da4fb0902cda5b18.png"
});

let product2 = new Product({
    id: 2,
    name: "Google Nest Hello Smart",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://i5.walmartimages.com/asr/76246acc-1b9e-4836-aff4-bf96ec4bd13e.34fe74678e196b204ed89e19914e7788.jpeg"
});

let product3 = new Product({
    id: 3,
    name: "Chromecast with Google TV",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://i5.walmartimages.com/asr/7c0fb539-899a-41d6-818f-d9a1d87be519.8d62cff6374d563146bc040aafc1a985.jpeg"
});

let product4 = new Product({
    id: 4,
    name: "Google Pixel 6",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://m.media-amazon.com/images/I/71QQZr2pNSL._AC_SL1500_.jpg"
});

let product5 = new Product({
    id: 5,
    name: "Google Nest Wifi",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://m.media-amazon.com/images/I/61IzhD+qy+L._AC_SY300_SX300_.jpg"
});

let product6 = new Product({
    id: 6,
    name: "Google Nest Audio",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://i5.walmartimages.com/asr/f56c7bd7-46d5-4cfe-87a9-24329a26f571.f6b8c6b088dd5fe8c4fdbaee35474820.jpeg"
});


let product7 = new Product({
    id: 7,
    name: "Google Nest Learning Thermostat",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://images-na.ssl-images-amazon.com/images/I/71GIRQHecXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
});

let product8 = new Product({
    id: 8,
    name: "Google Pixelbook Go",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://m.media-amazon.com/images/I/81sDDc7rKqL._AC_SL1500_.jpg"
});

let product9 = new Product({
    id: 9,
    name: "Pixel Buds A-Series",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461035cv13d.jpg"
});

let product10 = new Product({
    id: 10,
    name: "Titan Security Key",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://cdn.vox-cdn.com/thumbor/5VWHzJk3xMxWYd6G-aK8V36nFEc=/0x0:1600x672/1520x1013/filters:focal(672x208:928x464):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69701270/Copy_of_0204_0099__Titan_Main_KEY_v07_SIMP.0.png"
});


let brand1 = new Brand({
    name: "Google",
    url: "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg",
});

let product11 = new Product({
    id: 11,
    name: "Airtags",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/7/7a/AirTag_front_back.png"
});

let product12 = new Product({
    id: 12,
    name: "AppleTV 4K",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/8/8b/Apple_TV_4K_1st_front_Siri-black.png"
});

let product13 = new Product({
    id: 13,
    name: "Apple Watch",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/c/ce/Series_4.PNG"
});

let product14 = new Product({
    id: 14,
    name: "Homepod Mini",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/f/fd/HomePod_mini_white.png"
});

let product15 = new Product({
    id: 15,
    name: "iMac",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/c/c5/IMac_Early_2021.jpeg"
});

let product16 = new Product({
    id: 16,
    name: "IPad Mini",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/8/84/IPad_mini_white_and_black.png"
});


let product17 = new Product({
    id: 17,
    name: "iPhone",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/4/41/Iphone-11-and-11-pro-release-date.jpg"
});

let product18 = new Product({
    id: 18,
    name: "AirPods Pro",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/2/2e/Apple_AirPods_Pro_and_wireless_charging_case.jpg"
});

let product19 = new Product({
    id: 19,
    name: "Apple Remote",
    price: 150,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/2/2e/Apple_Remotes_white_aluminum.png"
});

let product20 = new Product({
    id: 20,
    name: "Magic Mouse 2",
    price: 200,
    quantity: 20,
    category: "Electronics",
    url: "https://static.wikia.nocookie.net/ipod/images/a/a6/Mouse.PNG"
});


let brand2 = new Brand({
    name: "Apple",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png"
});

// brand1.save().then((res) => {
//     let brandId = res._id;
//     product1.brand = brandId;
//     product2.brand = brandId;
//     product3.brand = brandId;
//     product4.brand = brandId;
//     product5.brand = brandId;
//     product6.brand = brandId;
//     product7.brand = brandId;
//     product8.brand = brandId;
//     product9.brand = brandId;
//     product10.brand = brandId;

//     product1.save();
//     product2.save();
//     product3.save();
//     product4.save();
//     product5.save();
//     product6.save();
//     product7.save();
//     product8.save();
//     product9.save();
//     product10.save();

//     brand1.products.push(product1);
//     brand1.products.push(product2);
//     brand1.products.push(product3);
//     brand1.products.push(product4);
//     brand1.products.push(product5);
//     brand1.products.push(product6);
//     brand1.products.push(product7);
//     brand1.products.push(product8);
//     brand1.products.push(product9);
//     brand1.products.push(product10);

//     brand1.save();
// })


// brand2.save().then((res) => {
//     let brandId = res._id;
//     product11.brand = brandId;
//     product12.brand = brandId;
//     product13.brand = brandId;
//     product14.brand = brandId;
//     product15.brand = brandId;
//     product16.brand = brandId;
//     product17.brand = brandId;
//     product18.brand = brandId;
//     product19.brand = brandId;
//     product20.brand = brandId;

//     product11.save();
//     product12.save();
//     product13.save();
//     product14.save();
//     product15.save();
//     product16.save();
//     product17.save();
//     product18.save();
//     product19.save();
//     product20.save();

//     brand2.products.push(product11);
//     brand2.products.push(product12);
//     brand2.products.push(product13);
//     brand2.products.push(product14);
//     brand2.products.push(product15);
//     brand2.products.push(product16);
//     brand2.products.push(product17);
//     brand2.products.push(product18);
//     brand2.products.push(product19);
//     brand2.products.push(product20);

//     brand2.save();
// })

