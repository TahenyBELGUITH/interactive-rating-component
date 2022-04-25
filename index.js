const BtnOfRates = document.querySelectorAll('.btns')
const ratedSection = document.querySelector('.rateSectionHtml')
let ratesArray = [];
const submitBtn = document.querySelector('.submit')
let tmp;
const card = document.querySelector('.card')
function populateSection( selectedId) {
 console.log(selectedId)
ratedSection.innerHTML = ''
ratedSection.innerHTML+=`
    <div class="ratedContainer">
      <img src="./images/illustration-thank-you.svg" alt=" Thank you">
      <div class="header">
        <p>You selected out  ${selectedId}  of 5</p>
      </div>

      <h3>Thank you!</h3>
      <p>We appreciate you taking the time to give a rating. If you ever need more support,<br>
        don’t hesitate to get in touch!</p>
    </div>`
}

function rateUser(selectedId , item){
 ratesArray.push(selectedId)
 localStorage.setItem("rate", JSON.stringify( ratesArray));
  item.addEventListener('click',()=>{
   item.classList.add('selected')
  })
  tmp = selectedId
}

submitBtn.addEventListener('click', ()=> {
  card.style.display ='none'
  populateSection( tmp );
})
