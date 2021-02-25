import { getUsername } from "../../utils/storage.js";

export default function createMenu() {
	const container = document.querySelector(".menu-container");

	const { pathname } = document.location;
	const username = getUsername();

	let authLink = `<a href="login.html" class="${
		pathname === "/moises-magalhaes-js2-ma3/login.html" ? "active" : ""
	}"></a>`;

	if (username) {
		authLink = ` <a href="add.html" class= "${
			pathname === "/moises-magalhaes-js2-ma3/add.html" ? "active" : ""
		}">Add Product</a>

		<span>Hi ${username}</span>`;
	}

	//console.log(username);
	console.log(pathname);

	container.innerHTML = `<div class="menu">
                                <a href="index.html" class= "${
																	pathname === "/" ||
																	"/moises-magalhaes-js2-ma3/index.html"
																		? "active"
																		: ""
																}">Home</a>

                                                                ${authLink}

                               <!-------<a href="login.html" class= "${
																	pathname ===
																	"/moises-magalhaes-js2-ma3/login.html"
																		? "active"
																		: ""
																}">Login</a>------->
                            </div>`;
}
