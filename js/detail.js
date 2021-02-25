import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
	document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;
console.log(productUrl);

(async function () {
	try {
		const container = document.querySelector(".detail-container");

		const response = await fetch(productUrl);
		const details = await response.json();

		//throw "error"
		document.title = details.name;

		container.innerHTML = "";

		container.innerHTML += `<h1>${details.name}</h1>
                                         <p> ${details.name}</p>                                        
                                        `;
		console.log(details);
	} catch (error) {
		console.log(error);
		displayMessage("error", error, ".detail-container");
	}
})();
