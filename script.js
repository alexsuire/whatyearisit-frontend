fetch('https://whatyearisit-backend-iota-six.vercel.app/year'
  )
	.then(response => response.json())
	.then(data => {
		document.querySelector("#year").textContent = ` 
        ${data.year}
        `
	});