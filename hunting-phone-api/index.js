// to load or fetch the data dynamicaly
const phoneHunt = async (phone = "13", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phone}`
  );
  const data = await res.json();
  // console.log(data);
  const phones = data.data;
  // console.log(phones);
  displayPhone(phones, isShowAll);
};
// to display every single card we use displayPhone function
const displayPhone = (phone, isShowAll) => {
  const containerDiv = document.getElementById("phone-container");
  const showMoreBtn = document.getElementById("btnMore");
  // use condition to show when the showmore button display or not
  if (phone.length > 12 && !isShowAll) {
    showMoreBtn.classList.remove("hidden");
  } else {
    showMoreBtn.classList.add("hidden");
  }
  // console.log("is show all", isShowAll);
  // slice for a limited item to show in phone card if the card greater then 12
  if (!isShowAll) {
    phone = phone.slice(0, 12);
  }
  containerDiv.textContent = "";
  // to find each of product we set for each loop
  phone.forEach((element) => {
    // console.log(element);
    const phoneCard = document.createElement("div");
    // to set class item to the phone card div
    phoneCard.classList = `card bg-base-100 shadow-xl`;
    // set inner html to design product card
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
    <img
      src="${element.image}"
    />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${element.brand}</h2>
    <p>${element.phone_name}</p>
    <div class="card-actions">
      <button onclick="handleShowDetails('${element.slug}')" class="btn btn-primary">Show details</button>
    </div>
  </div>
    `;
    containerDiv.appendChild(phoneCard);
  });
  // after loading data then togglespinner will false
  toggleLoadingSpinner(false);
};

// event handler adding
const searchPhone = (isShowAll) => {
  // when data loading before loading data spinner will be true
  // handleShowMore(isShowAll);
  toggleLoadingSpinner(true);
  const inpuFileld = document.getElementById("searchField");
  const getValue = inpuFileld.value;
  // console.log(getValue);
  phoneHunt(getValue, isShowAll);
  // inpuFileld.value = "";
};

// show details button setup
const handleShowDetails = async (id) => {
  // console.log("show detail btn clicked", id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data1 = await res.json();
  const phone = data1.data;
  showModalDetails(phone);
};

const showModalDetails = (details) => {
  console.log(details);
  show_modal_details.showModal();
  const detailsCotainer = document.getElementById("show-details-container");
  detailsCotainer.innerHTML = `
  <img class="h-36 mx-auto bg-gray-500" src="${details.image}" alt="image" />
  <h3 class="text-center text-3xl font-semibold">${details.name}</h3>
  <h5><span class='font-semibold'>Storage: </span>${
    details?.mainFeatures?.storage
  }</h5>
  <h5><span class='font-semibold'>DisplaySize: </span>${
    details?.mainFeatures?.displaySize
  }</h5>
  <h5><span class='font-semibold'>ChipSet: </span>${
    details?.mainFeatures?.chipSet
  }</h5>
  <h5><span class='font-semi-bold'>Memory: </span>${
    details?.mainFeatures?.memory
  }</h5>
  <h5><span class='font-semibold'>Sensors: </span>${
    details?.mainFeatures?.sensors
  }</h5>
  <h5><span class='font-semibold'>ReleaseDate: </span>${
    details?.releaseDate
  }</h5>
  /*
  <h5><span class='font-semibold'>GPS: </span>${
    details?.others?.GPS || "no GPS system are present"
  }</h5>
  */
  <h5><span class='font-semibold'>GPS: </span>${
    details?.others?.GPS
      ? details.others.GPS
      : "no GPS system are present in this device"
  }</h5>
  `;
};

// set loading spinner
const toggleLoadingSpinner = (isLoading) => {
  const getSpinner = document.getElementById("loading-Spinner");
  if (isLoading) {
    getSpinner.classList.remove("hidden");
  } else {
    getSpinner.classList.add("hidden");
  }
};

// Show more event handler
const handleShowMore = (isShowAll) => {
  searchPhone(true);
};

phoneHunt();
