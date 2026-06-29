
            const products = {
                "hot": [
                    {name: "Café Macchiato", price: 3.50, image: "macchiato.jpg", flavor: null},
                    {name: "Café Latte", price: 3.75, image: "latte.jpg", flavor: null},
                    {name: "Americano", price: 3.50, image: "americano.jpg", flavor: null},
                    {name: "Espresso", price: 2.00, image: "espresso.jpg", flavor: null},
                    {name: "Hot Chocolate", price: 3.00, image: "hotchoc.jpg", flavor: "Classic, White, Nutella, Peppermint"},
                    {name: "Hot Tea", price: 2.75, image: "hottea.jpg", flavor: null},
                    {name: "Masala Tea", price: 3.00, image: "hotmktea.jpg", flavor: null},
                    {name: "Cappuccino", price: 4.50, image: "cappuccino.jpg", flavor: null}
                ],
                "cold": [
                    {name: "Cold Brew", price: 4.00, image: "cold-brew.jpg", flavor: null},
                    {name: "Iced Latte", price: 4.00, image: "icedlatte.jpg", flavor: null},
                    {name: "Frappuccino", price: 4.50, image: "frapp.jpg", flavor: "Vanilla, Strawberry, Mocha, Oreo"},
                    {name: "Iced Coffee", price: 3.50, image: "icedcoffees.jpg", flavor: null},
                    {name: "Iced Mocha", price: 3.75, image: "icedmocha.jpg", flavor: null},
                    {name: "Iced Tea", price: 3.00, image: "icedtea.jpg", flavor: "Plain, Green, Oolong"},
                    {name: "Iced Milk Tea", price: 3.00, image: "icedchai.jpg", flavor: "Masala, Chai"},
                ],
                "pastries": [
                    {name: "Croissant", price: 3.25, image: "croissant.jpg", flavor: null},
                    {name: "Tarts", price: 3.75, image: "tarts.jpg", flavor: "Strawberry, Custard, Chocolate, Fruit"},
                    {name: "Muffins", price: 4.00, image: "muffin.jpg", flavor: "Banana, Chocolate Chip, Blueberry"}
                ],
                "desserts": [
                    {name: "Cake Slice", price: 3.00, image: "choccake.jpg", flavor: "Funfetti, Chocolate, Red Velvet, Marble, Coffee"},
                    {name: "Cheesecake", price: 4.50, image: "cheesecake.jpg", flavor: "Plain, NY Style, Oreo"},
                    {name: "Pie Slice", price: 4.00, image: "pumpkinpie.jpg", flavor: "Pumpkin, Chocolate Cream, Key Lime, Apple"},
                    {name: "Brownies", price: 2.50, image: "brownies.jpg", flavor: null},
                    {name: "Cookies", price: 2.00, image: "cookies.jpg", flavor: "Chocolate Chip, Peanut Butter, Red Velvet, Chocolate"}
                ]
            };

            const container = document.querySelector(".featured-container");
            const buttons = document.querySelectorAll(".menubtn");

            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const category = btn.getAttribute("data-category");

                    container.innerHTML = "";

                    if (products[category]) {
                        products[category].forEach(item => {
                            container.innerHTML += `
                                <div class="item">
                                    <img src="assets/Images/${item.image}" alt="${item.name}" width="160px">
                                    <h3>${item.name}</h3>
                                    <p>$${item.price.toFixed(2)}</p>
                                    ${item.flavor ? `<p>Flavor: ${item.flavor}</p>` : ""}
                                </div>
                            `;
                        });
                    } else {
                        container.innerHTML = "<p>No Products Available.</p>";
                    }
                });
            });
