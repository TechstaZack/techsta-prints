function clearcart(){
  localStorage.removeItem('cart-amount')
  localStorage.removeItem('cart-price')
  localStorage.removeItem('cart-quantity')
  window.location.reload()
}

function clearcartfinal(){
  localStorage.removeItem('cart-amount')
  localStorage.removeItem('cart-price')
  localStorage.removeItem('cart-quantity')
}

function sessionCreate(){
  const pricecodes = localStorage.getItem('cart-price')
  const quantities = localStorage.getItem('cart-quantity')
  fetch(`http://localhost:8080/create-session?prices=${pricecodes}&quantities=${quantities}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        const website = data.sessionURL;
        window.location.href = website;

    })
}

function enter(){
    const value = document.getElementById('email').value
    if(value.length == 0 || value.includes('@')){
        document.getElementById('nope').innerHTML = 'please enter a valid email'
    }else{
        localStorage.setItem("email", `${value}@kilvington.vic.edu.au`)
        window.location.href = '/shop.html'
    }
}


function logout(){
    localStorage.removeItem('email')
    localStorage.removeItem('cart-price')
    localStorage.removeItem('cart-quantity')
    localStorage.removeItem('cart-amount')
    window.location.href = 'index.html'
}
//Product

//price update
function fidTriUpdated(){
  console.log('ran')
  const value1 = document.getElementById('option1').value;
  const value2 = document.getElementById('option2').value;
  const value3 = document.getElementById('option3').value;
  document.getElementById('dynamic-price').innerHTML = ''
  fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let price = data.aud;
      price = price * value3
      if(price < 100){
          price = `¢${price}`
      }else{
        price = price / 100
        price = `$${price}`
        if(price.includes('.') && !price.endsWith('0') && price.length < 5) {
            price = `${price}0`
        }else if(price.length < 5){
            price = `${price}.00`
        }

      }
      document.getElementById('dynamic-price').innerHTML = price;
  })
}

function fidRecUpdated(){
  console.log('ran')
  const value1 = document.getElementById('option1').value;
  const value2 = document.getElementById('option2').value;
  const value3 = document.getElementById('option3').value;
  document.getElementById('dynamic-price').innerHTML = ''
  fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=rec-${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let price = data.aud;
      price = price * value3
      if(price < 100){
          price = `¢${price}`
      }else{
        price = price / 100
        price = `$${price}`
        if(price.includes('.') && !price.endsWith('0') && price.length < 5) {
            price = `${price}0`
        }else if(price.length < 5){
            price = `${price}.00`
        }

      }
      document.getElementById('dynamic-price').innerHTML = price;
  })
}

function fidCirUpdated(){
  console.log('ran')
  const value1 = document.getElementById('option1').value;
  const value2 = document.getElementById('option2').value;
  const value3 = document.getElementById('option3').value;
  document.getElementById('dynamic-price').innerHTML = ''
  fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=cir-${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let price = data.aud;
      price = price * value3
      if(price < 100){
          price = `¢${price}`
      }else{
          price = price / 100
          price = `$${price}`
          if(price.includes('.') && !price.endsWith('0') && price.length < 5) {
              price = `${price}0`
          }else if(price.length < 5){
              price = `${price}.00`
          }

      }
      document.getElementById('dynamic-price').innerHTML = price;
  })
}
function rocktopusUpdated(){
  console.log('ran')
  const value1 = document.getElementById('option1').value;
  const value2 = document.getElementById('option2').value;
  const value3 = document.getElementById('option3').value;
  document.getElementById('dynamic-price').innerHTML = ''
  fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=rocktopus-${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let price = data.aud;
      price = price * value3
      if(price < 100){
          price = `¢${price}`
      }else{
          price = price / 100
          price = `$${price}`
          if(price.includes('.') && !price.endsWith('0') && price.length < 5) {
              price = `${price}0`
          }else if(price.length < 5){
              price = `${price}.00`
          }

      }
      document.getElementById('dynamic-price').innerHTML = price;
  })
}
function cubeUpdated(){
  console.log('ran')
  const value1 = document.getElementById('option1').value;
  const value3 = document.getElementById('option3').value;
  document.getElementById('dynamic-price').innerHTML = ''
  fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=cube-${value1}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let price = data.aud;
      price = price * value3
      if(price < 100){
          price = `¢${price}`
      }else{
          price = price / 100
          price = `$${price}`
          if(price.includes('.') && !price.endsWith('0') && price.length < 5) {
              price = `${price}0`
          }else if(price.length < 5){
              price = `${price}.00`
          }

      }
      document.getElementById('dynamic-price').innerHTML = price;
  })
}


//add to cart

function triaddtocart(){
  const value1 = document.getElementById('option1').value;
  const value2 = document.getElementById('option2').value;
  const value3 = document.getElementById('option3').value;
  const cartprices = localStorage.getItem('cart-price')
  const quantities = localStorage.getItem('cart-quantity')
  const amount = localStorage.getItem('cart-amount')

  if(cartprices == null || cartprices == ''){
      fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      localStorage.setItem('cart-price', data.priceid)
      localStorage.setItem('cart-quantity', value3)
      localStorage.setItem('cart-amount', '1')
      document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> 1`
  })
  }else{
      fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let alreadyin = false
      let alreadyinno = null
      let priceid = data.priceid;
      console.log(priceid)
      const priceArray = cartprices.split(',');
      const length = priceArray.length - 1;
        for (let i = 0; i <= length; i++){
          if(priceArray[i].includes(priceid)){
              alreadyin = true
              alreadyinno = i
          }
      if(alreadyin == true){
          const quantityArray = quantities.split(',')
          quantityArray[alreadyinno] = value3
          let updatedquantities = null
          updatedquantities = quantityArray[0]
          if(quantityArray[1] != undefined){
          for (let i = 1; i <= quantityArray.length; i++){
              let toadd = quantityArray[i]
              updatedquantities = `${updatedquantities},${toadd}`
              i++
          }}
          localStorage.setItem('cart-quantity',updatedquantities)
      }else{
          const newPriceList = `${cartprices},${data.priceid}`
          const newQuantitiesList = `${quantities},${value3}`
          const newAmount = parseInt(amount) + 1
          localStorage.setItem('cart-price', newPriceList)
          localStorage.setItem('cart-quantity', newQuantitiesList)
          document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> ${newAmount}`
          localStorage.setItem('cart-amount',newAmount)
      }
      }
  })
  }
  $('#modal').modal('hide')
}
function recaddtocart(){
const value1 = document.getElementById('option1').value;
const value2 = document.getElementById('option2').value;
const value3 = document.getElementById('option3').value;
const cartprices = localStorage.getItem('cart-price')
const quantities = localStorage.getItem('cart-quantity')
const amount = localStorage.getItem('cart-amount')

if(cartprices == null || cartprices == ''){
    fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=rec-${value1}-${value2}`)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    localStorage.setItem('cart-price', data.priceid)
    localStorage.setItem('cart-quantity', value3)
    localStorage.setItem('cart-amount', '1')
    document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg> 1`
})
}else{
    fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=rec-${value1}-${value2}`)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    let alreadyin = false
    let alreadyinno = null
    let priceid = data.priceid;
    console.log(priceid)
    const priceArray = cartprices.split(',');
    const length = priceArray.length - 1;
        for (let i = 0; i <= length; i++){
        if(priceArray[i].includes(priceid)){
            alreadyin = true
            alreadyinno = i
        }
    if(alreadyin == true){
        const quantityArray = quantities.split(',')
        quantityArray[alreadyinno] = value3
        let updatedquantities = null
        updatedquantities = quantityArray[0]
        if(quantityArray[1] != undefined){
        for (let i = 1; i <= quantityArray.length; i++){
            let toadd = quantityArray[i]
            updatedquantities = `${updatedquantities},${toadd}`
            i++
        }}
        localStorage.setItem('cart-quantity',updatedquantities)
    }else{
        const newPriceList = `${cartprices},${data.priceid}`
        const newQuantitiesList = `${quantities},${value3}`
        const newAmount = parseInt(amount) + 1
        localStorage.setItem('cart-price', newPriceList)
        localStorage.setItem('cart-quantity', newQuantitiesList)
        document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg> ${newAmount}`
        localStorage.setItem('cart-amount',newAmount)
    }
    }
})
}
$('#modal').modal('hide')
}
function ciraddtocart(){
  const value1 = document.getElementById('option1').value;
  const value2 = document.getElementById('option2').value;
  const value3 = document.getElementById('option3').value;
  const cartprices = localStorage.getItem('cart-price')
  const quantities = localStorage.getItem('cart-quantity')
  const amount = localStorage.getItem('cart-amount')
  
  if(cartprices == null || cartprices == ''){
      fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=cir-${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      localStorage.setItem('cart-price', data.priceid)
      localStorage.setItem('cart-quantity', value3)
      localStorage.setItem('cart-amount', '1')
      document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> 1`
  })
  }else{
      fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=cir-${value1}-${value2}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let alreadyin = false
      let alreadyinno = null
      let priceid = data.priceid;
      console.log(priceid)
      const priceArray = cartprices.split(',');
      const length = priceArray.length - 1;
        for (let i = 0; i <= length; i++){
          if(priceArray[i].includes(priceid)){
              alreadyin = true
              alreadyinno = i
          }
      if(alreadyin == true){
          const quantityArray = quantities.split(',')
          quantityArray[alreadyinno] = value3
          let updatedquantities = null
          updatedquantities = quantityArray[0]
          if(quantityArray[1] != undefined){
          for (let i = 1; i <= quantityArray.length; i++){
              let toadd = quantityArray[i]
              updatedquantities = `${updatedquantities},${toadd}`
              i++
          }}
          localStorage.setItem('cart-quantity',updatedquantities)
      }else{
          const newPriceList = `${cartprices},${data.priceid}`
          const newQuantitiesList = `${quantities},${value3}`
          const newAmount = parseInt(amount) + 1
          localStorage.setItem('cart-price', newPriceList)
          localStorage.setItem('cart-quantity', newQuantitiesList)
          document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> ${newAmount}`
          localStorage.setItem('cart-amount',newAmount)
      }
      }
  })
  }
  $('#modal').modal('hide')
}
function rocktopusaddtocart(){
    const value1 = document.getElementById('option1').value;
    const value2 = document.getElementById('option2').value;
    const value3 = document.getElementById('option3').value;
    const cartprices = localStorage.getItem('cart-price')
    const quantities = localStorage.getItem('cart-quantity')
    const amount = localStorage.getItem('cart-amount')
    
    if(cartprices == null || cartprices == ''){
        fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=rocktopus-${value1}-${value2}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        localStorage.setItem('cart-price', data.priceid)
        localStorage.setItem('cart-quantity', value3)
        localStorage.setItem('cart-amount', '1')
        document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg> 1`
    })
    }else{
        fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=rocktopus-${value1}-${value2}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        let alreadyin = false
        let alreadyinno = null
        let priceid = data.priceid;
        const priceArray = cartprices.split(',');
        const length = priceArray.length - 1;
        for (let i = 0; i <= length; i++){
            if(priceArray[i].includes(priceid)){
                alreadyin = true
                alreadyinno = i
            }
        if(alreadyin == true){
            const quantityArray = quantities.split(',')
            quantityArray[alreadyinno] = value3
            let updatedquantities = null
            updatedquantities = quantityArray[0]
            if(quantityArray[1] != undefined){
            for (let i = 1; i <= quantityArray.length; i++){
                let toadd = quantityArray[i]
                updatedquantities = `${updatedquantities},${toadd}`
                i++
            }}
            localStorage.setItem('cart-quantity',updatedquantities)
        }else{
            const newPriceList = `${cartprices},${data.priceid}`
            const newQuantitiesList = `${quantities},${value3}`
            const newAmount = parseInt(amount) + 1
            localStorage.setItem('cart-price', newPriceList)
            localStorage.setItem('cart-quantity', newQuantitiesList)
            document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg> ${newAmount}`
            localStorage.setItem('cart-amount',newAmount)
        }
        }
    })
    }
    $('#modal').modal('hide')
}
function cubeaddtocart(){
  const value1 = document.getElementById('option1').value;
  const value3 = document.getElementById('option3').value;
  const cartprices = localStorage.getItem('cart-price')
  const quantities = localStorage.getItem('cart-quantity')
  const amount = localStorage.getItem('cart-amount')
  
  if(cartprices == null || cartprices == ''){
      fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=cube-${value1}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      localStorage.setItem('cart-price', data.priceid)
      localStorage.setItem('cart-quantity', value3)
      localStorage.setItem('cart-amount', '1')
      document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> 1`
  })
  }else{
      fetch(`https://kilvington-prints-api-ahf6ft7xlq-uc.a.run.app/priceid?lookup=cube-${value1}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      let alreadyin = false
      let alreadyinno = null
      let priceid = data.priceid;
      console.log(priceid)
      const priceArray = cartprices.split(',');
      const length = priceArray.length - 1;
        for (let i = 0; i <= length; i++){
          if(priceArray[i].includes(priceid)){
              alreadyin = true
              alreadyinno = i
          }
      if(alreadyin == true){
          const quantityArray = quantities.split(',')
          quantityArray[alreadyinno] = value3
          let updatedquantities = null
          updatedquantities = quantityArray[0]
          if(quantityArray[1] != undefined){
          for (let i = 1; i <= quantityArray.length; i++){
              let toadd = quantityArray[i]
              updatedquantities = `${updatedquantities},${toadd}`
              i++
          }}
          localStorage.setItem('cart-quantity',updatedquantities)
      }else{
          const newPriceList = `${cartprices},${data.priceid}`
          const newQuantitiesList = `${quantities},${value3}`
          const newAmount = parseInt(amount) + 1
          localStorage.setItem('cart-price', newPriceList)
          localStorage.setItem('cart-quantity', newQuantitiesList)
          document.getElementById('cart').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> ${newAmount}`
          localStorage.setItem('cart-amount',newAmount)
      }
      }
  })
  }
  $('#modal').modal('hide')
}

//modals

function triModal(){
    document.getElementById('productModal').innerHTML = `<div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">Product Details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h1 style='color:grey;'>Triangle Fidget</h1>
          <hr>
          <img src="images/triangle.jpg" width="225px", height="300px">
          <br><br>
          <h5 style='color: grey;' id="dynamic-price">$1.00</h5>
          <hr>

          <h5>Outer Colour</h5>

          <select name="outercolour" id="option1" class="btn btn-outline-secondary" onchange="fidTriUpdated()">
            <option value="bla">Black</option>
            <option value="sk">Sky Blue</option>
            <option value="br">Pink</option>
            <option value="go">Gold</option>
            <option value="or">Orange</option>
            <option value="gr">Green</option>
            <option value="bl">Blue</option>
            <option value="si">Silver</option>
            <option value="wh">White</option>
            <option value="re">Red</option>
          </select>
          <h5>Inner Colour</h5>

          <select name="outercolour" id="option2" class="btn btn-outline-secondary" onchange="fidTriUpdated()">
            <option value="bla">Black</option>
            <option value="sk">Sky Blue</option>
            <option value="br">Pink</option>
            <option value="go">Gold</option>
            <option value="or">Orange</option>
            <option value="gr">Green</option>
            <option value="bl">Blue</option>
            <option value="si">Silver</option>
            <option value="wh">White</option>
            <option value="re">Red</option>
          </select>
          <h5>Quantity</h5>

          <select name="outercolour" id="option3" class="btn btn-outline-secondary" onchange="fidTriUpdated()">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <hr>
          <h5 class="credit">Fulfilled by Zac Cooper • <a href='https://www.printables.com/model/534358' target="_blank">3D model download Here</a></h5>
        </div>
        <div class="modal-footer" style='object-position: center;'>
            <button data-dismiss="modal" class="btn btn-outline-secondary" id="addtocart" onclick="triaddtocart()">Add To Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg></button>
        </div>
      </div>
    </div>`
}
function recModal(){
  document.getElementById('productModal').innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="productModalLabel">Product Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1 style='color:grey;'>Rectangle Fidget</h1>
        <hr>
        <img src="images/rectangle.jpg" width="225px", height="300px">
        <br><br>
        <h5 style='color: grey;' id="dynamic-price">$1.00</h5>
        <hr>

        <h5>Outer Colour</h5>

        <select name="outercolour" id="option1" class="btn btn-outline-secondary" onchange="fidRecUpdated()">
          <option value="bla">Black</option>
          <option value="sk">Sky Blue</option>
          <option value="br">Pink</option>
          <option value="go">Gold</option>
          <option value="or">Orange</option>
          <option value="gr">Green</option>
          <option value="bl">Blue</option>
          <option value="si">Silver</option>
          <option value="wh">White</option>
          <option value="re">Red</option>
        </select>
        <h5>Inner Colour</h5>

        <select name="outercolour" id="option2" class="btn btn-outline-secondary" onchange="fidRecUpdated()">
          <option value="bla">Black</option>
          <option value="sk">Sky Blue</option>
          <option value="br">Pink</option>
          <option value="go">Gold</option>
          <option value="or">Orange</option>
          <option value="gr">Green</option>
          <option value="bl">Blue</option>
          <option value="si">Silver</option>
          <option value="wh">White</option>
          <option value="re">Red</option>
        </select>
        <h5>Quantity</h5>

        <select name="outercolour" id="option3" class="btn btn-outline-secondary" onchange="fidRecUpdated()">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <hr>
        <h5 class="credit">Fulfilled by Zac Cooper • <a href='https://www.printables.com/model/534358' target="_blank">3D model download Here</a></h5>
      </div>
      <div class="modal-footer" style='object-position: center;'>
          <button data-dismiss="modal" class="btn btn-outline-secondary" id="addtocart" onclick="recaddtocart()">Add To Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg></button>
      </div>
    </div>
  </div>`
}
function cirModal(){
  document.getElementById('productModal').innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="productModalLabel">Product Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1 style='color:grey;'>Circle Fidget</h1>
        <hr>
        <img src="images/circle.jpg" width="225px", height="300px">
        <br><br>
        <h5 style='color: grey;' id="dynamic-price">¢75</h5>
        <hr>

        <h5>Outer Colour</h5>

        <select name="outercolour" id="option1" class="btn btn-outline-secondary" onchange="fidCirUpdated()">
          <option value="bla">Black</option>
          <option value="sk">Sky Blue</option>
          <option value="br">Pink</option>
          <option value="go">Gold</option>
          <option value="or">Orange</option>
          <option value="gr">Green</option>
          <option value="bl">Blue</option>
          <option value="si">Silver</option>
          <option value="wh">White</option>
          <option value="re">Red</option>
        </select>
        <h5>Inner Colour</h5>

        <select name="outercolour" id="option2" class="btn btn-outline-secondary" onchange="fidCirUpdated()">
          <option value="bla">Black</option>
          <option value="sk">Sky Blue</option>
          <option value="br">Pink</option>
          <option value="go">Gold</option>
          <option value="or">Orange</option>
          <option value="gr">Green</option>
          <option value="bl">Blue</option>
          <option value="si">Silver</option>
          <option value="wh">White</option>
          <option value="re">Red</option>
        </select>
        <h5>Quantity</h5>

        <select name="outercolour" id="option3" class="btn btn-outline-secondary" onchange="fidCirUpdated()">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <hr>
        <h5 class="credit">Fulfilled by Zac Cooper • <a href='https://www.printables.com/model/534358' target="_blank">3D model download Here</a></h5>
      </div>
      <div class="modal-footer" style='object-position: center;'>
          <button data-dismiss="modal" class="btn btn-outline-secondary" id="addtocart" onclick="ciraddtocart()">Add To Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg></button>
      </div>
    </div>
  </div>`
}
function rocktopusModal(){
  document.getElementById('productModal').innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="productModalLabel">Product Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1 style='color:grey;'>Rocktopus</h1>
        <hr>
        <img src="images/rocktopus.jpg" width="225px", height="300px">
        <br><br>
        <h5 style='color: grey;' id="dynamic-price">$1</h5>
        <hr>

        <h5>Top Colour</h5>

        <select name="outercolour" id="option1" class="btn btn-outline-secondary" onchange="rocktopusUpdated()">
          <option value="bla">Black</option>
          <option value="sk">Sky Blue</option>
          <option value="br">Pink</option>
          <option value="go">Gold</option>
          <option value="or">Orange</option>
          <option value="gr">Green</option>
          <option value="bl">Blue</option>
          <option value="si">Silver</option>
          <option value="wh">White</option>
          <option value="re">Red</option>
        </select>
        <h5>Bottom Colour</h5>

        <select name="outercolour" id="option2" class="btn btn-outline-secondary" onchange="rocktopusUpdated()">
          <option value="bla">Black</option>
          <option value="sk">Sky Blue</option>
          <option value="br">Pink</option>
          <option value="go">Gold</option>
          <option value="or">Orange</option>
          <option value="gr">Green</option>
          <option value="bl">Blue</option>
          <option value="si">Silver</option>
          <option value="wh">White</option>
          <option value="re">Red</option>
        </select>
        <h5>Quantity</h5>

        <select name="outercolour" id="option3" class="btn btn-outline-secondary" onchange="rocktopusUpdated()">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <hr>
        <h5 class="credit">Fulfilled by Zac Cooper • <a href='https://www.printables.com/model/237713-rocktopus/files' target="_blank">3D model download Here</a></h5>
      </div>
      <div class="modal-footer" style='object-position: center;'>
          <button data-dismiss="modal" class="btn btn-outline-secondary" id="addtocart" onclick="rocktopusaddtocart()">Add To Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg></button>
      </div>
    </div>
  </div>`
}
function cubeModal(){
  document.getElementById('productModal').innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="productModalLabel">Product Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1 style='color:grey;'>Fidget Cube</h1>
        <hr>
        <img src="images/fidget-cube.jpg" width="225px", height="300px">
        <br><br>
        <h5 style='color: grey;' id="dynamic-price">$2</h5>
        <hr>

        <h5>Colour</h5>

        <select name="outercolour" id="option1" class="btn btn-outline-secondary" onchange="cubeUpdated()">
          <option value="bla">Black</option>
          <option value="sk">Sky Blue</option>
          <option value="br">Pink</option>
          <option value="go">Gold</option>
          <option value="or">Orange</option>
          <option value="gr">Green</option>
          <option value="bl">Blue</option>
          <option value="si">Silver</option>
          <option value="wh">White</option>
          <option value="re">Red</option>
        </select>
        <h5>Quantity</h5>

        <select name="outercolour" id="option3" class="btn btn-outline-secondary" onchange="cubeUpdated()">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <hr>
        <h5 class="credit">Fulfilled by Zac Cooper • <a href='https://www.printables.com/model/928-yet-another-fidget-infinity-cube-v2' target="_blank">3D model download Here</a></h5>
      </div>
      <div class="modal-footer" style='object-position: center;'>
          <button data-dismiss="modal" class="btn btn-outline-secondary" id="addtocart" onclick="cubeaddtocart()">Add To Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg></button>
      </div>
    </div>
  </div>`
}
