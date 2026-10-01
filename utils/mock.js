const PRODUCTS = [
    {
        name: "Irish coffee",
        src: "../img/coffee-1.png",
        description:
            "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        price: "7.00",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Kahlua coffee",
        src: "../img/coffee-2.png",
        description:
            "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
        price: "7.00",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Honey raf",
        src: "../img/coffee-3.png",
        description: "Espresso with frothed milk, cream and aromatic honey",
        price: "5.50",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Ice cappuccino",
        src: "../img/coffee-4.png",
        description:
            "Cappuccino with soft thick foam in summer version with ice",
        price: "5.00",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Espresso",
        src: "../img/coffee-5.png",
        description: "Classic black coffee",
        price: "4.50",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Latte",
        src: "../img/coffee-6.png",
        description:
            "Espresso coffee with the addition of steamed milk and dense milk foam",
        price: "5.50",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Latte macchiato",
        src: "../img/coffee-7.png",
        description: "Espresso with frothed milk and chocolate",
        price: "5.50",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Coffee with cognac",
        src: "../img/coffee-8.png",
        description: "Fragrant black coffee with cognac and whipped cream",
        price: "6.50",
        category: "coffee",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Cinnamon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Moroccan",
        src: "../img/tea-1.png",
        description:
            "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
        price: "4.50",
        category: "tea",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Lemon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Ginger",
        src: "../img/tea-2.png",
        description: "Original black tea with fresh ginger, lemon and honey",
        price: "5.00",
        category: "tea",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Lemon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Cranberry",
        src: "../img/tea-3.png",
        description: "Invigorating black tea with cranberry and honey",
        price: "5.00",
        category: "tea",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Lemon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Sea buckthorn",
        src: "../img/tea-4.png",
        description:
            "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
        price: "5.50",
        category: "tea",
        sizes: {
            s: {
                size: "200 ml",
                "add-price": "0.00",
            },
            m: {
                size: "300 ml",
                "add-price": "0.50",
            },
            l: {
                size: "400 ml",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Sugar",
                "add-price": "0.50",
            },
            {
                name: "Lemon",
                "add-price": "0.50",
            },
            {
                name: "Syrup",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Marble cheesecake",
        src: "../img/dessert-1.png",
        description:
            "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
        price: "3.50",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Red velvet",
        src: "../img/dessert-2.png",
        description: "Layer cake with cream cheese frosting",
        price: "4.00",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Cheesecakes",
        src: "../img/dessert-3.png",
        description:
            "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
        price: "4.50",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Creme brulee",
        src: "../img/dessert-4.png",
        description:
            "Delicate creamy dessert in a caramel basket with wild berries",
        price: "4.00",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Pancakes",
        src: "../img/dessert-5.png",
        description:
            "Tender pancakes with strawberry jam and fresh strawberries",
        price: "4.50",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Honey cake",
        src: "../img/dessert-6.png",
        description: "Classic honey cake with delicate custard",
        price: "4.50",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Chocolate cake",
        src: "../img/dessert-7.png",
        description:
            "Cake with hot chocolate filling and nuts with dried apricots",
        price: "5.50",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },

    {
        name: "Black forest",
        src: "../img/dessert-8.png",
        description:
            "A combination of thin sponge cake with cherry jam and light chocolate mousse",
        price: "6.50",
        category: "dessert",
        sizes: {
            s: {
                size: "50 g",
                "add-price": "0.00",
            },
            m: {
                size: "100 g",
                "add-price": "0.50",
            },
            l: {
                size: "200 g",
                "add-price": "1.00",
            },
        },
        additives: [
            {
                name: "Berries",
                "add-price": "0.50",
            },
            {
                name: "Nuts",
                "add-price": "0.50",
            },
            {
                name: "Jam",
                "add-price": "0.50",
            },
        ],
    },
];
