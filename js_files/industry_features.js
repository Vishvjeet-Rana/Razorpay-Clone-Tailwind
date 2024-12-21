let ecomBtn = document.querySelector("#ecommerce");
let eduBtn = document.querySelector("#education");
let bfsiBtn = document.querySelector("#bfsi");
let saasBtn = document.querySelector("#saas");
let freelanceBtn = document.querySelector("#freelancer");
let featureDiv = document.querySelector("#featurediv");
let imageDiv = document.querySelector("#imagediv");

featureDiv.classList.add(
  "h-[90%]",
  "w-[48%]",
  "bg-featureBG",
  "shadow-lg",
  "rounded-xl",
  "p-3"
);

imageDiv.classList.add(
  "h-[90%]",
  "w-[48%]",
  "bg-featureBG",
  "shadow-lg",
  "rounded-xl"
);

// Event listener for E-commerce button
ecomBtn.addEventListener("click", () => {
  featureDiv.innerHTML = "";
  imageDiv.innerHTML = "";

  let h1 = document.createElement("h1");
  let para = document.createElement("p");
  let btn = document.createElement("button");
  let image = document.createElement("img");

  h1.innerHTML =
    'Empower your <span class="text-green-600">e-commerce business</span>';
  h1.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-black",
    "text-4xl",
    "mb-4",
    "mt-4"
  );

  para.innerText =
    "Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.";
  para.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-gray-600",
    "text-lg"
  );

  btn.innerHTML =
    'See Solutions <i class="fa-solid fa-arrow-right text-white ml-2"></i>';
  btn.classList.add(
    "rounded-xl",
    "font-mullish",
    "font-semibold",
    "p-3",
    "text-center",
    "cursor-pointer",
    "text-white",
    "bg-blue-600",
    "transition-all",
    "duration-500",
    "hover:bg-blue-700",
    "hover:text-white",
    "group",
    "mt-8",
    "text-base",
    "animate-slide-in-left"
  );

  image.classList.add(
    "overflow-hidden",
    "h-[100%]",
    "w-[100%]",
    "rounded-xl",
    "animate-slide-in-right"
  );

  image.src = "./images/ecommerce.png";

  featureDiv.appendChild(h1);
  featureDiv.appendChild(para);
  featureDiv.appendChild(btn);

  imageDiv.appendChild(image);
});

// Event listener for Education button
eduBtn.addEventListener("click", () => {
  featureDiv.innerHTML = "";
  imageDiv.innerHTML = "";

  let h1 = document.createElement("h1");
  let para = document.createElement("p");
  let btn = document.createElement("button");
  let image = document.createElement("img");

  h1.innerHTML =
    'Payments for your <span class="text-green-600">education business.</span>';
  h1.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-black",
    "text-4xl",
    "mb-4",
    "mt-4"
  );

  para.innerText =
    "Effortlessly establish and monitor fee payments and vendor payouts for educational institutions, tutorials, or online courses, whether you have a website or not.";
  para.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-gray-600",
    "text-lg"
  );

  btn.innerHTML =
    'See Solutions <i class="fa-solid fa-arrow-right text-white ml-2"></i>';
  btn.classList.add(
    "rounded-xl",
    "font-mullish",
    "font-semibold",
    "p-3",
    "text-center",
    "cursor-pointer",
    "text-white",
    "bg-blue-600",
    "transition-all",
    "duration-500",
    "hover:bg-blue-700",
    "hover:text-white",
    "group",
    "mt-8",
    "text-base",
    "animate-slide-in-left"
  );

  image.classList.add(
    "overflow-hidden",
    "h-[100%]",
    "w-[100%]",
    "rounded-xl",
    "animate-slide-in-right"
  );

  image.src = "./images/education.png";

  featureDiv.appendChild(h1);
  featureDiv.appendChild(para);
  featureDiv.appendChild(btn);

  imageDiv.appendChild(image);
});

// Event listener for BFSI button
bfsiBtn.addEventListener("click", () => {
  featureDiv.innerHTML = "";
  imageDiv.innerHTML = "";

  let h1 = document.createElement("h1");
  let para = document.createElement("p");
  let btn = document.createElement("button");
  let image = document.createElement("img");

  h1.innerHTML =
    'Payments ecosystem for <span class="text-green-600">financial services</span>';
  h1.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-black",
    "text-4xl",
    "mb-4",
    "mt-4"
  );

  para.innerText =
    "Streamline collection management, automate recurring payments, and expedite loan disbursement for a comprehensive financial solution.";
  para.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-gray-600",
    "text-lg"
  );

  btn.innerHTML =
    'See Solutions <i class="fa-solid fa-arrow-right text-white ml-2"></i>';
  btn.classList.add(
    "rounded-xl",
    "font-mullish",
    "font-semibold",
    "p-3",
    "text-center",
    "cursor-pointer",
    "text-white",
    "bg-blue-600",
    "transition-all",
    "duration-500",
    "hover:bg-blue-700",
    "hover:text-white",
    "group",
    "mt-8",
    "text-base",
    "animate-slide-in-left"
  );

  image.classList.add(
    "overflow-hidden",
    "h-[100%]",
    "w-[100%]",
    "rounded-xl",
    "animate-slide-in-right"
  );

  image.src = "./images/bfsi.png";

  featureDiv.appendChild(h1);
  featureDiv.appendChild(para);
  featureDiv.appendChild(btn);

  imageDiv.appendChild(image);
});

// Event listener for SaaS button
saasBtn.addEventListener("click", () => {
  featureDiv.innerHTML = "";
  imageDiv.innerHTML = "";

  let h1 = document.createElement("h1");
  let para = document.createElement("p");
  let btn = document.createElement("button");
  let image = document.createElement("img");

  h1.innerHTML =
    'Global Payment Solutions for <span class="text-green-600">IT & SaaS</span> Providers';
  h1.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-black",
    "text-4xl",
    "mb-4",
    "mt-4"
  );

  para.innerText =
    "Seamlessly accept payments in over 100 currencies, facilitate customizable subscription payments, and efficiently execute vendor payouts.";
  para.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-gray-600",
    "text-lg"
  );

  btn.innerHTML =
    'See Solutions <i class="fa-solid fa-arrow-right text-white ml-2"></i>';
  btn.classList.add(
    "rounded-xl",
    "font-mullish",
    "font-semibold",
    "p-3",
    "text-center",
    "cursor-pointer",
    "text-white",
    "bg-blue-600",
    "transition-all",
    "duration-500",
    "hover:bg-blue-700",
    "hover:text-white",
    "group",
    "mt-8",
    "text-base",
    "animate-slide-in-left"
  );

  image.classList.add(
    "overflow-hidden",
    "h-[100%]",
    "w-[100%]",
    "rounded-xl",
    "animate-slide-in-right"
  );

  image.src = "./images/saas.png";

  featureDiv.appendChild(h1);
  featureDiv.appendChild(para);
  featureDiv.appendChild(btn);

  imageDiv.appendChild(image);
});

// Event listener for Freelancer button
freelanceBtn.addEventListener("click", () => {
  featureDiv.innerHTML = "";
  imageDiv.innerHTML = "";

  let h1 = document.createElement("h1");
  let para = document.createElement("p");
  let btn = document.createElement("button");
  let image = document.createElement("img");

  h1.innerHTML =
    'The personalized payment solution for <span class="text-green-600">freelancers</span>';
  h1.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-black",
    "text-4xl",
    "mb-4",
    "mt-4"
  );

  para.innerText =
    "Easily accept payments, even without a website and without any coding expertise, while also enabling the creation of your personalized, branded online store.";
  para.classList.add(
    "font-mullish",
    "animate-slide-in-left",
    "font-semibold",
    "text-gray-600",
    "text-lg"
  );

  btn.innerHTML =
    'See Solutions <i class="fa-solid fa-arrow-right text-white ml-2"></i>';
  btn.classList.add(
    "rounded-xl",
    "font-mullish",
    "font-semibold",
    "p-3",
    "text-center",
    "cursor-pointer",
    "text-white",
    "bg-blue-600",
    "transition-all",
    "duration-500",
    "hover:bg-blue-700",
    "hover:text-white",
    "group",
    "mt-8",
    "text-base",
    "animate-slide-in-left"
  );

  image.classList.add(
    "overflow-hidden",
    "h-[100%]",
    "w-[100%]",
    "rounded-xl",
    "animate-slide-in-right"
  );

  image.src = "./images/freelancer.png";

  featureDiv.appendChild(h1);
  featureDiv.appendChild(para);
  featureDiv.appendChild(btn);

  imageDiv.appendChild(image);
});
