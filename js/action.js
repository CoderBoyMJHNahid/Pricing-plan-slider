
// make array for store data to make plan details

const data = [
      {
        level: "Plan 1",
        desc:"Pay it in 2 installments!",
        amount:"S/. 10,000.00",
        installments:"2 installments",
        mensual:"S/.5,262.47",
        tea:"75.78%",
        tcea:"82.20%",
        total_interest:"160.85%",
        total_pay:"S/. 11,129.88",
        insurances:["Multiriesgo","Desgravamen","Vida Caja"],
        backgroundColor:"rgb(216, 255, 255)",
        borderColor:"rgb(3, 173, 174)",

      },
      {
        level: "Plan 2",
        desc:"Pay it in 3 installments!",
        amount:"S/. 10,000.00",
        installments:"3 installments",
        mensual:"S/.3,400.20",
        tea:"83.23%",
        tcea:"85.10%",
        total_interest:"168.33%",
        total_pay:"S/. 12,980.20",
        insurances:["Multiriesgo","Desgravamen",],
        backgroundColor:"rgb(173, 236, 189)",
        borderColor:"rgb(67, 154, 89)",

      },
      {
        level: "Plan 3",
        desc:"Pay it in 4 installments!",
        amount:"S/. 10,000.00",
        installments:"4 installments",
        mensual:"S/.2,500.20",
        tea:"94.23%",
        tcea:"85.10%",
        total_interest:"180.33%",
        total_pay:"S/. 13,988.20",
        insurances:["Multiriesgo","Desgravamen",],
        backgroundColor:"rgb(253 201 158)",
        borderColor:"rgb(229 110 13)",

      },
      {
        level: "Plan 4",
        desc:"Pay it in 6 installments!",
        amount:"S/. 10,000.00",
        installments:"4 installments",
        mensual:"S/.2,500.20",
        tea:"98.23%",
        tcea:"88.10%",
        total_interest:"192.33%",
        total_pay:"S/. 14,000.82",
        insurances:["Multiriesgo"],
        backgroundColor:"rgb(255, 187, 182)",
        borderColor:"rgb(227 18 1)",

      },
      {
        level: "Plan 3",
        desc:"Pay it in 4 installments!",
        amount:"S/. 10,000.00",
        installments:"4 installments",
        mensual:"S/.2,500.20",
        tea:"94.23%",
        tcea:"85.10%",
        total_interest:"180.33%",
        total_pay:"S/. 13,988.20",
        insurances:["Multiriesgo","Desgravamen",],
        backgroundColor:"rgb(253 201 158)",
        borderColor:"rgb(229 110 13)",

      },
      {
        level: "Plan 4",
        desc:"Pay it in 6 installments!",
        amount:"S/. 10,000.00",
        installments:"4 installments",
        mensual:"S/.2,500.20",
        tea:"98.23%",
        tcea:"88.10%",
        total_interest:"192.33%",
        total_pay:"S/. 14,000.82",
        insurances:["Multiriesgo"],
        backgroundColor:"rgb(255, 187, 182)",
        borderColor:"rgb(227 18 1)",

      },

  ];


const loadPlanCard = ()=>{
  let html = "";
  

  data.forEach(elem =>{

    let listHtml = "";

    for (let i = 0; i < elem.insurances.length; i++) {
      
      listHtml += `<li>
                      <i class="fa-solid fa-check"></i>
                      ${elem.insurances[i]}
                  </li>`
    };

    html += `
            <div class="planSliderCard swiper-slide" style="background-color:${elem.backgroundColor};color: ${elem.borderColor};">

                <div class="plan_name" style="border-bottom: 1px solid ${elem.borderColor};">
                    <h3>${elem.level}</h3>
                    <p>${elem.desc}</p>
                </div>
                <div class="plan_details" style="border-bottom: 1px solid ${elem.borderColor};">
                    <p class="d-flex align-items-center justify-content-between">
                      <span class="hidden-info">Amount:</span>
                      <span><b>${elem.amount}</b></span>
                    </p>
                    <p class="d-flex align-items-center justify-content-between">
                      <span class="hidden-info" >No. installments:</span>
                      <span>${elem.installments}</span>
                    </p>
                    <p class="d-flex align-items-center justify-content-between">
                      <span class="hidden-info">C. mensual:</span>
                      <span>${elem.mensual}</span>
                    </p>
                    <p class="d-flex align-items-center justify-content-between">
                      <span class="hidden-info">T.E.A:</span>
                      <span>${elem.tea}</span>
                    </p>
                    <p class="d-flex align-items-center justify-content-between">
                      <span class="hidden-info">T.C.E.A:</span>
                      <span>${elem.tcea}</span>
                    </p>
                    <p class="d-flex align-items-center justify-content-between">
                      <span class="hidden-info">Total interest:</span>
                      <span>${elem.total_interest}</span>
                    </p>
                    <p class="d-flex align-items-center justify-content-between">
                      <span class="hidden-info">Total to pay:</span>
                      <span><b>${elem.total_pay}</b></span>
                    </p>
                </div>
                <div class="plan_following" style="border-bottom: 1px solid ${elem.borderColor};">
                    <span class="hidden-info">
                      <p class="d-flex gap-2 mt-3">
                          <span><i class="fa-solid fa-star"></i></span>
                          This plan has the following insurances:
                      </p>
                    </span>
                    <ul>${listHtml}</ul>
                </div>
                <div class="plan_btn_wrapper">
                    <button class="btn" style="border: 3px solid ${elem.borderColor};color:${elem.borderColor};">Choose</button>
                </div>
            </div>

        `;
  });

  document.querySelector(".swiper-wrapper").innerHTML = html;


}

loadPlanCard();

var swiper = new Swiper(".planSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pagination-next",
      prevEl: ".pagination-prev"
    },
    breakpoints: {
      
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }
  });
