window.addEventListener("load", () => {
	const nav = document.querySelector("nav")
	const btn = nav.querySelector(".open-btn")
	btn.addEventListener("click", () => {
		nav.classList.toggle("open")
	})
	document.addEventListener("click", ({ path: composed_path, composedPath }) => {
		if (!nav.classList.contains("open")) return
		const path = composed_path ?? composedPath()

		if (!path.includes(nav)) {
			nav.classList.remove("open")
		}
	})
})
