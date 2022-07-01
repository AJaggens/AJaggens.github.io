//input args
let currSubNum = prompt("give number")
let docBody = document.getElementById('outputBody')

//generate sub list from args

//loop over sub list

//fetch sequence
let postUrl = `https://oneapi.infobip.com/1/networks/resolve/${currSubNum}`

fetch(postUrl, {
	method: 'POST',
	headers: {'Content-Type': 'application/json'}
	})

   .then(response => response.json())
   .then(json => {
      let outputPara = document.createElement('p')
      console.log(json)
      outputPara.textContent = json
      docBody.appendChild(outputPara)
   })

   //do something with json
