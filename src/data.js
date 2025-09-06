const products = [
   {
        "reviews": [],
        "_id": "68ab1920f402d03d92bd215a",
        "categoryId": "68ab17aaf402d03d92bd2155",
        "name": "Adidas Mens Shoes",
        "color": "68ad853b1ee7f95281e4d192",
        "price": 100,
        "image": "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:937,cw:2409,ch:2409,q:80,w:2409/CQHiUwBDFpz37fibh6rRUQ.jpg",
        "stock": 10
    },
    {
        "reviews": [],
        "_id": "68ab1a2bf402d03d92bd215b",
        "categoryId": "68ab17c1f402d03d92bd2156",
        "name": "Mens Tshirt",
        "color": "68ad85bd1ee7f95281e4d19c",
        "price": 10,
        "image": "https://tshirtrepublic.lk/wp-content/uploads/2020/01/premium-crew-neck-tshirt-men-raspberry-red-tshirt-republic-sri-lanka.jpg",
        "stock": 20
    },
    {
        "reviews": [],
        "_id": "68ab3775084fd16ae387939b",
        "categoryId": "68ab1854f402d03d92bd2157",
        "name": "Nike Shorts",
        "color": "68ad85871ee7f95281e4d196",
        "price": 10,
        "image": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e73494b7-a635-49e6-b9e9-e5e216d83e58/AS+M+NK+DF+CHALLENGER+9UL+SH.png",
        "stock": 20
    },
    {
        "reviews": [],
        "_id": "68ab38c4084fd16ae387939c",
        "categoryId": "68ab1875f402d03d92bd2158",
        "name": "Adidas Pants",
        "color": "68ad835e1ee7f95281e4d190",
        "price": 21,
        "image": "https://cdn-images.farfetch-contents.com/21/44/30/97/21443097_51405092_600.jpg",
        "stock": 8
    },
    {
        "reviews": [],
        "_id": "68ab3942084fd16ae387939d",
        "categoryId": "68ab18caf402d03d92bd2159",
        "name": "Nike Socks for Men",
        "color": "68ad853b1ee7f95281e4d192",
        "price": 4,
        "image": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b3a467fb-4c84-44b0-9be9-589391fa2065/U+NK+EVERYDAY+LTWT+CREW+3PR.png",
        "stock": 10
    },
    {
        "_id": "68b45e09520fa4d672212399",
        "categoryId": "68ab17aaf402d03d92bd2155",
        "name": "Nike Red shoes",
        "color": "68ad853b1ee7f95281e4d192",
        "price": 23,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/16e37ab0-54f3-44fa-9f0a-911f3561a3c0",
        "stock": 3,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcb82e8d102656c1b3862",
        "categoryId": "68ab17aaf402d03d92bd2155",
        "name": "Nike air Zoom",
        "color": "68ad85871ee7f95281e4d196",
        "price": 50,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/5bec0e70-8a7e-49ab-b244-b231ba7de519",
        "stock": 20,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcbf1e8d102656c1b3864",
        "categoryId": "68ab17aaf402d03d92bd2155",
        "name": "Nike Sport Shoe",
        "color": "68ad853b1ee7f95281e4d192",
        "price": 110,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/41ee4ff6-c954-4e4a-b91c-6ec8bfd0b9d5",
        "stock": 5,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcc67e8d102656c1b3866",
        "categoryId": "68ab17aaf402d03d92bd2155",
        "name": "Puma smart shoes",
        "color": "68ad85521ee7f95281e4d194",
        "price": 45,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/b9f22552-b50c-4ff3-9fca-73c9a2a52c44",
        "stock": 6,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcd38e8d102656c1b3868",
        "categoryId": "68ab17c1f402d03d92bd2156",
        "name": "Adidas cotton T",
        "color": "68ad835e1ee7f95281e4d190",
        "price": 25,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/8a51d00c-6166-4ad9-96c0-24e6e09efd86",
        "stock": 5,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcd68e8d102656c1b386a",
        "categoryId": "68ab17c1f402d03d92bd2156",
        "name": "Adidas Default Red",
        "color": "68ad85521ee7f95281e4d194",
        "price": 28,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/ca91f172-19dd-4ca1-9fd5-585c57388417",
        "stock": 3,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcdc7e8d102656c1b386c",
        "categoryId": "68ab17c1f402d03d92bd2156",
        "name": "Adidas camo ",
        "color": "68ad861c1ee7f95281e4d1a5",
        "price": 30,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/7b9c77aa-4ec1-4c56-8c8e-b97f684e4bab",
        "stock": 11,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcdffe8d102656c1b386e",
        "categoryId": "68ab17c1f402d03d92bd2156",
        "name": "Nike Legends men",
        "color": "68ad85f11ee7f95281e4d1a2",
        "price": 20,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/01b71d8c-2d41-487d-81c2-dee9fe2a59ac",
        "stock": 20,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbce7fe8d102656c1b3870",
        "categoryId": "68ab1854f402d03d92bd2157",
        "name": "Nike Club short",
        "color": "68ad861c1ee7f95281e4d1a5",
        "price": 18,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/7acd5415-def5-4d1b-bf00-1652fa45ab26",
        "stock": 15,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbceb5e8d102656c1b3872",
        "categoryId": "68ab1854f402d03d92bd2157",
        "name": "Nike Womens sport short",
        "color": "68ad85521ee7f95281e4d194",
        "price": 12,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/e8b87f36-d177-4c8f-ba6d-a6302668e069",
        "stock": 6,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcf06e8d102656c1b3874",
        "categoryId": "68ab18caf402d03d92bd2159",
        "name": "Adidas Classic Socks",
        "color": "68ad853b1ee7f95281e4d192",
        "price": 4,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/59903651-f5e3-4a01-a593-18e25eac46fe",
        "stock": 30,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcf3ee8d102656c1b3876",
        "categoryId": "68ab18caf402d03d92bd2159",
        "name": "Adidas Classic Half Socks",
        "color": "68ad853b1ee7f95281e4d192",
        "price": 6,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/8ece9f0a-7d93-4209-b9ee-5872cf724745",
        "stock": 35,
        "reviews": [],
        "__v": 0
    },
    {
        "_id": "68bbcf69e8d102656c1b3878",
        "categoryId": "68ab18caf402d03d92bd2159",
        "name": "Adidas arctic socks",
        "color": "68ad85871ee7f95281e4d196",
        "price": 8,
        "image": "https://pub-e27ce3aeb84f4962aba3b1ef90fcf2ba.r2.dev/efbc244a-9fcf-4683-8b62-1c8b0a5df35f",
        "stock": 35,
        "reviews": [],
        "__v": 0
    }
];

const categories = [
    {
        "_id": "68ab17aaf402d03d92bd2155",
        "name": "Shoes",
        "slug": "shoes"
    },
    {
        "_id": "68ab17c1f402d03d92bd2156",
        "name": "T-Shirts",
        "slug": "tshirts"
    },
    {
        "_id": "68ab1854f402d03d92bd2157",
        "name": "Shorts",
        "slug": "shorts"
    },
    {
        "_id": "68ab1875f402d03d92bd2158",
        "name": "Pants",
        "slug": "pants"
    },
    {
        "_id": "68ab18caf402d03d92bd2159",
        "name": "Socks",
        "slug": "socks"
    }
]

export { products, categories };
