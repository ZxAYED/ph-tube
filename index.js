const catchApi = async () => {
  const res = await fetch(
    " https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();

  const tabContainer = document.getElementById("tab");
  data.data.forEach((numbers) => {
    const div = document.createElement("div");
    div.innerHTML = `<button  class="p-2 color  rounded bg-gray-200  mx-2 hover:bg-red-400  cursor-pointer"    onclick="clickHandler(${numbers.category_id})"> ${numbers.category}</button>`;

    tabContainer.appendChild(div);
    const cardsContainer = document.getElementById("cards");
  });
};
const clickHandler = async (category_id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${category_id}`
  );

  const data = await res.json();

  const cardsContainer = document.getElementById("cards");

  const qna = document.getElementById("qna");
  qna.innerHTML = "";
  cardsContainer.innerHTML = "";
  const hiddenClass = document.getElementById("hidden");

  if (data.data.length === 0) {
    hiddenClass.classList.remove("hidden");
  } else {
    hiddenClass.classList.add("hidden", true);
    data.data.forEach((properties) => {
      const viewsInSeconds = properties.others.posted_date;
      const hours = Math.floor(viewsInSeconds / 3600);
      const minutes = Math.floor((viewsInSeconds % 3600) / 60);
      const seconds = viewsInSeconds % 60;
      let time = `${hours}h ${minutes}m ${seconds}s`;

      if (viewsInSeconds.length === 0) {
        time = "";
      }

      const div = document.createElement("div");
      div.innerHTML = `
       <div class="m-5 -mb-3  box-border ">
    
        <figure class="card relative -mb-2 card-compact  object-cover  shadow-2xl "><img class="rounded h-[200px]" src="${
          properties.thumbnail
        }" alt="images" />
        <p class="absolute right-3 bottom-2 text-white text-sm px-1 bg-black p-0.5 ">${time}</p>
        </figure>
        <div class="card-body  box-border   pl-0">
       
        <div class="flex  box-border items-start">
        <div class="pt-0 mt-0 -mb-2">
        <img  class="object-cover w-10 h-10 rounded-full" src="${
          properties.authors[0].profile_picture
        }" />
        </div>
        <h2 class="card-title pl-4   text-base">${properties.title}</h2>
        </div>
        <div class="pt-0   ml-14 text-amber-900 ">
        <div class="flex gap-4"> 
                <h3 class="text-sm pb-2">${properties.authors[0].profile_name}</h3>
                ${properties?.authors[0].verified
                  ? `<img class="h-5 "  src="./images/veriy.png"/>`
                  : ""}
                  </div>  
       <div/>
       <div/>
        <p  class="text-sm -mb-3  views" >${properties.others.views} </p>
       
        </div>`;
      cardsContainer.appendChild(div);
     
    });
   
  }
  const sorted= sorting(data);


}




const sorting = (data) => {
  const newArray = [];
  data.data.forEach((view) => {
    newArray.push(parseFloat(view.others.views));
  });

   const araay=newArray.sort((a, b) => {
     return b - a;
    ;}
  
  );
 return araay;
 
};

const sortView =(para)=>{
}


document.getElementById("blog").addEventListener("click", function () {
  const cardsContainer = document.getElementById("cards");
  const hiddenClass = document.getElementById("hidden");
  hiddenClass.classList.add("hidden");
  const qna = document.getElementById("qna");
  qna.innerHTML = "";
  cardsContainer.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `

  <div class="flex flex-col gap-4 max-w-4xl mx-auto mb-10 ">
        <h1 class="text-5xl text-bold text-center pb-5"> Q&A Session:</h1>
       
        <h1 class="text-3xl text-bold"> Here's a summary of the scope of var, let, and const in JavaScript:</h1>

        <p class="px-2">1. **var Scope:**
            - var has function-level scope, which means it's accessible throughout the entire function where it's
            defined.
            - It can be hoisted to the top of the function, potentially leading to unexpected behavior.</p>

        <p class="px-2">2. **let and const Scope:**
            - Both let and const have block-level scope, confined to the block (e.g., inside loops, if statements) where
            they are defined.
            - They are not hoisted to the top of the block, which prevents variable "bleeding" and results in more
            predictable scoping behavior.</p>

        <p class="px-2">3. **Additional Note:**
            - let and const are generally preferred over var in modern JavaScript due to their block scoping, which
            helps prevent scope-related bugs and makes code easier to reason about.</p>

        <p class="px-2 text-lg">In summary, prefer using let and const for block-level scoping and avoid using var in
            modern JavaScript code to ensure more predictable scoping behavior.</p>

        <h1 class="text-3xl">Null:</h1>
        <p class="px-2"> - Represents the intentional absence of any object or value.</p>
            <p class="px-2">- Used to indicate that a variable or property has no assigned value or that an object has no reference.</p>

        <h1 class="text-3xl">Undefined:</h1>
        <p class="px-2">- Indicates that a variable has been declared but not assigned any value.</p>
        <p class="px-2">- Typically represents an uninitialized or missing property in an object.</p>
        <p class="px-2">- Returned by functions that do not explicitly return a value.</p>

        <p class="px-2">Note: These descriptions are intentionally symbol-free, as requested.</p>

        <h1 class="text-3xl">Rest API-</h1>
        <p class="px-2">REST API is a style of software architecture for designing networked applications. It relies on a set of principles and constraints to enable communication between different software systems over the internet.
            <br>REST API, which stands for Representational State Transfer Application Programming Interface, employs a stateless client-server model where communication occurs via HTTP methods. It emphasizes simplicity, scalability, and the use of standard HTTP status codes. RESTful APIs use resources as the fundamental unit of data exchange, with each resource identified by a unique URL, and interactions with these resources are performed using standard HTTP operations like GET, POST, PUT, and DELETE. This architectural approach facilitates interoperability and ease of integration among various software components and services.
        </p>
    </div>
  
  `;

  qna.appendChild(div);
});
catchApi();
clickHandler("1000");
