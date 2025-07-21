const subscribe = document.getElementById("subBtn")
const visa = document.getElementById("visaBtn")
const msterCard = document.getElementById("masterCardBtn")
const payPal = document.getElementById("payPalBtn")
const submit = document.getElementById("submitBtn")
const subscribetxt = document.getElementById("subTxt")
const payment = document.getElementById("paymentTxt")
submit.onclick = function() {
    if (subscribe.checked) {
        subscribetxt.innerHTML = `you are the <button id="l">subscriber</button> of the channel!`
    } else {
        subscribetxt.innerHTML = `you are the not the <button id="l">subscriber</button> of the channel!`
    }
    if (visa.checked) {
        payment.innerHTML = `you are paying with visa`
    } else if (msterCard.checked) {
        payment.innerHTML = `you are paying with masteCcard`
    } else if (payPal.checked) {
        payment.innerHTML = `you are paying with paypal`
    } else {
        payment.innerHTML = `you have to  select paymet method`
    }


}