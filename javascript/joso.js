const navbar = document.getElementById("navbar");

window.onscroll = () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    const valuescroll = 120;

    if(window.scrollY > valuescroll){
        navbar.style.backgroundColor = " #353935";
        navbar.style.transition = "0.5s";

    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.transition = "0.5s";
    }
};
const condos = [
    {
      "id": 1,
      "title": "Small Condo in Downtown",
      "price": "75000$",
      "bedrooms": "bed1",
      "location": "Downtown City",
      "image": "img/bed1.jpg",
    },
    {
      "id": 2,
      "title": "Cozy Studio Condo",
      "price": "85000$",
      "bedrooms": "bed1",
      "location": "Suburban Area",
      "image": "img/bed2.jpg"
    },
    {
      "id": 3,
      "title": "Compact City Condo",
      "price": "69000$",
      "bedrooms": "bed1",
      "location": "City Center",
      "image": "img/bed3.jpg"
    },
    {
      "id": 4,
      "title": "Modern Condo with City View",
      "price": "90000$",
      "bedrooms": "bed1",
      "location": "Uptown District",
      "image": "img/bed4.jpg"
    },
    {
      "id": 5,
      "title": "Affordable Condo in the Suburbs",
      "price": "80000$",
      "bedrooms": "bed1",
      "location": "Suburban",
      "image": "img/bed5.jpg"
    }
  ];

const rowcard = document.getElementById("rowcard");

condos.forEach(condo => {
    const condoElment = 
    `   
        <div data-aos="fade-up" data-aos-duration="300" class="col-6 col-md-4 col-lg-3 my-3">
                        <div class="card overflow-hidden">
                            <div class="image bg-body-secondary">
                                <img src="${condo.image}" alt="" class="w-100 h-100 object-fit-cover">
                            </div>
                            <h2 class="text-center py-2">
                                ${condo.price}
                            </h2>
                            <div class="border-top text-center pt-2 py-2"></div>
                             <div class="text-center">
                                <p class="m-0 text-secondary">
                                    <i class="fa-solid fa-location-dot"></i>
                                    ${condo.location}
                                </p>
                                <p class="m-0 text-secondary pb-3">
                                    <i class="fa-solid fa-bed"></i>
                                    ${condo.bedrooms}
                                </p>
                            </div>
                           </div>
                     </div>
                   </div>
    `
    rowcard.innerHTML += condoElment;
})
const condos1 = [
  {
    "id": 1,
    "title": "Small Condo in Downtown",
    "price": "75000$",
    "bedrooms": "bed2",
    "location": "Downtown City",
    "image": "img/bed9.jpg",
  },
  {
    "id": 2,
    "title": "Cozy Studio Condo",
    "price": "85000$",
    "bedrooms": "bed2",
    "location": "Suburban Area",
    "image": "img/bed8.jpeg"
  },
  {
    "id": 3,
    "title": "Compact City Condo",
    "price": "69000$",
    "bedrooms": "bed2",
    "location": "City Center",
    "image": "img/bed6.jpg"
  },
  {
    "id": 4,
    "title": "Modern Condo with City View",
    "price": "90000$",
    "bedrooms": "bed1",
    "location": "Uptown District",
    "image": "img/bed7.jpg"
  },
  {
    "id": 5,
    "title": "Affordable Condo in the Suburbs",
    "price": "80000$",
    "bedrooms": "bed",
    "location": "Suburban",
    "image": "img/bed5.jpg"
  }
];

const rowcard1 = document.getElementById("rowcard1");
const rowcard2 = document.getElementById("rowcard2");
condos1.forEach(condo => {
  const condoElment = 
  `   
      <div data-aos="fade-up" data-aos-duration="300" class="col-6 col-md-4 col-lg-3 my-3">
                      <div class="card overflow-hidden">
                          <div class="image bg-body-secondary">
                              <img src="${condo.image}" alt="" class="w-100 h-100 object-fit-cover">
                          </div>
                          <h2 class="text-center py-2">
                              ${condo.price}
                          </h2>
                          <div class="border-top text-center pt-2 py-2"></div>
                           <div class="text-center">
                              <p class="m-0 text-secondary">
                                  <i class="fa-solid fa-location-dot"></i>
                                  ${condo.location}
                              </p>
                              <p class="m-0 text-secondary pb-3">
                                  <i class="fa-solid fa-bed"></i>
                                  ${condo.bedrooms}
                              </p>
                          </div>
                         </div>
                   </div>
                 </div>
  `
  rowcard1.innerHTML += condoElment;
  rowcard2.innerHTML += condoElment;
})
