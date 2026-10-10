const products = {
    "hot": [
        {name: "Americano", price: 3.50, image: "americano.jpg", flavor: null},
        {name: "Cappuccino", price: 3.00, image: "hotcappuccino.jpg", flavor: null},
        {name: "Caramel Macchiato", price: 4.50, image: "Caramel-Macchiato.jpg", flavor: null},
        {name: "Cortado", price: 4.50, image: "cortado.jpg", flavor: null},                   
        {name: "Espresso", price: 3.00, image: "espresso.jpg", flavor: null},
        {name: "Café Hot Macchiato", price: 3.50, image: "macchiato.jpg", flavor: null},
        {name: "Café Hot Latte", price: 3.50, image: "latte.jpg", flavor: null, syrups: true},
        {name: "Hot Chocolate", price: 3.00, image: "hotchoc.jpg", flavor: "Classic, Nutella, Peppermint"},
        {name: "Hot Matcha Latte", price: 3.50, image: "matchalattes.jpg", flavor: null},
        {name: "Hot Mocha", price: 3.00, image: "hotmocha.jpg", flavor: null},
        {name: "Hot Tea", price: 2.75, image: "hottea.jpg", flavor: null},
        {name: "Masala Tea", price: 3.00, image: "hotmktea.jpg", flavor: null},
    ],
    "cold": [
        {name: "Cold Brew", price: 4.00, image: "cold-brew.jpg", flavor: null},
        {name: "Frappuccino", price: 4.50, image: "frappe.jpg", flavor: "Matcha, Toffee, Mocha, Oreo"},
        {name: "Iced Coffee", price: 3.50, image: "icedcoffees.jpg", flavor: null},
        {name: "Iced Latte", price: 4.00, image: "icedlatte.jpg", flavor: null, syrups: true},
        {name: "Iced Matcha Latte", price: 3.75, image: "strawmatcha.jpg", flavor: "Strawberry, Coconut, Espresso, White Chocolate"},
        {name: "Iced Mocha", price: 3.75, image: "icedmocha.jpg", flavor: null},
        {name: "Iced Milk Tea", price: 3.25, image: "icedchai.jpg", flavor: "Masala, Chai"},
        {name: "Iced Spanish Latte", price: 4.25, image: "iced-spanish-latte.jpg", flavor: null},
        {name: "Iced Tea", price: 3.00, image: "icedtea.jpg", flavor: "Plain, Green, Oolong, Hibiscus"},
        {name: "Oreo Iced Coffee", price: 3.50, image: "oreoicecof.jpg", flavor: null}
    ],
    "refreshers": [
        {name: "Lemonade", price: 3.50, image: "lemonade.jpg", flavor: null},
        {name: "Flavored Lemonade", price: 4.50, image: "Strawberry-Lemonade.jpg", flavor: "Strawberry, Blueberry, Matcha"},
        {name: "Smoothies", price: 3.50, image: "berry-smoothie.jpg", flavor: "Strawberry+Banana, Mixed Berry"},
        {name: "Milkshakes", price: 4.00, image: "chocolate-mkshake.jpg", flavor: "Vanilla, Strawberry, Chocolate, Oreo, Nutella"},
    ],
    "pastries": [
        {name: "Croissant", price: 3.00, image: "croissant.jpg", flavor: "Plain, Almond, Chocolate"},
        {name: "Danishes", price: 3.25, image: "danish.jpg", flavor: "Strawberry-Cheese, Chocolate, Custard, Blueberry"},
        {name: "Muffins", price: 3.25, image: "muffin.jpg", flavor: "Banana, Chocolate Chip, Blueberry"},
        {name: "Tarts", price: 3.75, image: "tarts.jpg", flavor: "Strawberry, Custard, Chocolate, Fruit"}
    ],
    "desserts": [
        {name: "Affogato", price: 5.00, image: "affogato.jpg", flavor: "Any Ice Cream In Store"},
        {name: "Brownies", price: 2.75, image: "brownies.jpg", flavor: null},
        {name: "Cheesecake", price: 4.50, image: "cheesecake.jpg", flavor: "Plain, NY Style, Oreo"},
        {name: "Chocolate Mousse", price: 4.25, image: "choc-mousse.jpg", flavor: null},
        {name: "Cookies", price: 3.00, image: "cookies.jpg", flavor: "Chocolate Chip, Peanut Butter, Red Velvet, Chocolate"},
        {name: "Pie Slice", price: 4.00, image: "pumpkinpie.jpg", flavor: "Pumpkin, Chocolate Cream, Key Lime, Apple"}
    ],
    "specials": [
        {name: "Red Velvet Latte", price: 4.50, image: "red-velvet.jpg", flavor: null, desc: "Iced or Hot, Relish this Red Velvety Latte"},
        {name: "PB&Nutella Shake", price: 4.50, image: "nutella-shake.jpg", flavor: null, desc: "A creamy Peanut Butter and Nutella shake, a childhood favorite"},
        {name: "Matcha Crunch", price: 4.50, image: "matcha-wc.jpg", flavor: null, desc: "White Chocolate-Matcha Shake with Chocolate Cookie Crumbs "},
        {name: "Grimace Shake", price: 4.50, image: "grimace-shake.jpg", flavor: null, desc: "A creamy, trendy, fruit, perhaps evil milkshake"}
    ]
};

const syrups = [
    "Vanilla",
    "Caramel",
    "Hazelnut",
    "Toffee",
    "Brown Sugar",
    "Rose",
    "Coconut",
    "Mocha",
    "Tiramisu",
    "Cookie Butter",
    "Oreo",
    "Blueberry",
    "Banana",
    "Strawberry"
];

const container = document.querySelector(".featured-container");
const buttons = document.querySelectorAll(".menubtn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");

        container.innerHTML = "";

        if (products[category]) {
            products[category].forEach(item => {
                container.innerHTML += `
                    <div class="item fade-in ${category === "specials" ? "special-item" : ""}">
                        <img src="assets/Images/${item.image}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        ${item.flavor ? `<p>Flavor: ${item.flavor}</p>` : ""}
                        ${item.desc ? `<p>Desc: ${item.desc}</p>` : ""}
                        ${item.syrups ? `<p>Syrups: ${syrups.join(", ")}</p>` : ""}
                    </div>
                `;
            });
        } else {
            container.innerHTML = "<p>No Products Available.</p>";
        }
    });
});
