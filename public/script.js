fetch("https://discord.com/api/v6/invite/y8XHJHAZ5C?with_counts=1")
	.then(data => data.json())
	.then(json => {
		document.querySelector("#online").textContent = json.approximate_presence_count;
		document.querySelector("#members").textContent = json.approximate_member_count;
	})
	.catch(console.error);
