import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
const productsUrl = baseUrl + "products";

createMenu();

(async function () {
	const container = document.querySelector(".product-container");

	try {
		const response = await fetch(productsUrl);
		const json = await response.json();

		container.innerHTML = "";

		// throw "custom message";

		json.forEach(function (product) {
			container.innerHTML += `<a class="product" href="edit.html?id=${product.id}">
                                        <h4> ${product.name}</h4>
                                        <p>Price: ${product.price}</p>
                                    </a>`;
		});
	} catch (error) {
		console.log(error);
		displayMessage("error", error, ".product-container");
	}
})();
