const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});



function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  if(range.value >= 4000) {
    bubble.innerHTML =  `<p>Unlimited</p><p>Invocations/month</p>`; 
  } else {
    bubble.innerHTML =  `<p>${val}</p><p>Invocations/month</p>`;
  }
 


  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

//Change plans

const range = document.querySelector('.range');
const planTitle = document.querySelector('.plantitle');
const planPrice = document.querySelector(".planpricejs");

//tags
const freeTag = document.querySelector(".free");
const StarterTag = document.querySelector(".starter");
const ProTag = document.querySelector(".pro");
const EnterpriseTag = document.querySelector(".enterprise");
const extraMoney = document.querySelector(".extraMoney");

//Additional info
const invocations = document.querySelector("#invocations");
const developers = document.querySelector("#developers");
const support = document.querySelector("#support");
const additional = document.querySelector("#additional");

range.addEventListener('input', ()=>{

    let extra = 0;

    if(range.value < 200) {
      //Calculation extra payment
        exta = 0;
        extraMoney.textContent = ``;
        planTitle.textContent = "Free";
        planPrice.textContent = "$0/month";
        freeTag.classList.add("active");
        StarterTag.classList.remove("active");
        ProTag.classList.remove('active');
        EnterpriseTag.classList.remove('active');
        invocations.textContent = "200 / month";
        developers.textContent = "Unlimited users";
        support.textContent = "Community";
        additional.textContent = "-";
    } else if(range.value >= 200 && range.value < 500 )  {
      //Calculation extra payment
        extra = Math.floor((range.value - 500)/100 * 30);
        if(extra ==  0) {
            extraMoney.textContent = ``;   
        } else {
            extraMoney.textContent = ``;
        }
        
        planTitle.textContent = "Starter";
        planPrice.textContent = "$99/month";
        freeTag.classList.remove("active");
        StarterTag.classList.add("active");
        ProTag.classList.remove('active');
        EnterpriseTag.classList.remove('active');
        //additional info
        invocations.textContent = "500 / month";
        developers.textContent = "Unlimited users";
        support.textContent = "Email";
        additional.textContent = "$30 per additional 100 invocations";
    } else if(range.value >= 500 && range.value < 3001 ) {
      //Calculation extra payment
        extra = Math.floor((range.value - 3000)/100 * 25);
        if(extra ==  0) {
            extraMoney.textContent = ``;   
        } else {
            extraMoney.textContent = ``;
        }
        planTitle.textContent = "Pro";
        planPrice.textContent = "$799/month";
        freeTag.classList.remove("active");
        StarterTag.classList.remove("active");
        ProTag.classList.add('active');
        EnterpriseTag.classList.remove('active');
        //addtional info
        invocations.textContent = "3000 / month";
        developers.textContent = "Unlimited users";
        support.textContent = "Chat & Email";
        additional.textContent = "$25 per additional 100 invocations";

    } else if(range.value >= 3001 ) {
      //Calculation extra payment
        extra = 0;
        extraMoney.textContent = ``;
        planTitle.textContent = "Enterprise";
        planPrice.textContent = "Let's talk!";
        freeTag.classList.remove("active");
        StarterTag.classList.remove("active");
        ProTag.classList.remove('active');
        EnterpriseTag.classList.add('active');
        //addtional info
        invocations.textContent = "Custom scans";
        developers.textContent = "Unlimited users";
        support.textContent = "Dedicated";
        additional.textContent = "-";
    }
});