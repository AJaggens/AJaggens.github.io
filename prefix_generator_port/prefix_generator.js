//input args

//generate sub list from args

//loop over sub list

//fetch sequence
let postUrl = `https://oneapi.infobip.com/1/networks/resolve/${currSubNum}`

fetch(postUrl, {
	method: 'POST',
	headers: {'Content-Type': 'application/json'}
	})

   .then(response => response.json())
   .then(json => console.log(json))

   //do something with json