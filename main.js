let data;
function getData() {
    fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
    .then(res => res.json())
    .then(item => {
        data = item
        console.log(data);
        printCards()
        randCardFnk()
        
    })
}
getData()

const cardsCountry = document.getElementById('cardsCountry')
const showBtn = document.getElementById('showBtn')
let cardsNum = 60

function  printCards() {
    
    randCardFnk()
    document.querySelectorAll(".items-stretch a").forEach(a => {
        a.classList.remove("border-b-2", "dark:border-violet-600", "dark:text-violet-600");
        a.classList.add("border-b-2"); 
    });
    haveLook.style.display = "flex"
    cardsCountry.innerHTML = ""
    data
    .slice(0, cardsNum)
    .forEach(item => {
        cardsCountry.innerHTML += `<div onclick="showDet('${item.alpha3Code}')" class="max-w-[290px] group cursor-pointer   shadow-md dark:bg-white dark:text-gray-900">
                                        <img src="${item.flag}" alt="" class="object-cover object-center w-full  h-52 dark:bg-gray-500">
                                        <div class="mt-6 mb-2 px-4 pt-5">
                                            <span class="block text-xs font-medium tracking-widest uppercase ">${item.region}</span>
                                            <h2 class="text-xl font-semibold tracking-wide group-hover:underline">${item.name}</h2>
                                        </div>
                                        <div class=" px-4 flex justify-between text-xs pb-8">
                                            <p>Population: ${item.population}</p>
                                            <p> ${item.area} km <sup>2</sup></p>
                                        </div>
                                
                                    </div>`
    });
}


function showDet(alpha3Code) {
    // window.location.href = `http://127.0.0.1:5500/details.htm?id=${alpha3Code}`
    window.location.href = `https://country-app-mu-sage.vercel.app/details.htm?id=${alpha3Code}`;

}


const haveLook = document.getElementById('haveLook')
const randCard = document.getElementById('randCard')
function regionFilt(r, a) {
    randCard.innerHTML = ""
    haveLook.style.display = "none"
    showBtn.style.display = "none"
    const filtregData = data.filter(region => region.region.toUpperCase() === r.toUpperCase());
    console.log(filtregData);
    cardsCountry.innerHTML = ""
    filtregData.forEach(item =>{
        cardsCountry.innerHTML += `<div onclick="showDet('${item.alpha3Code}')"  class="max-w-[290px] cursor-pointer   shadow-md dark:bg-white dark:text-gray-900">
                                        <img src="${item.flag}" alt="" class="object-cover object-center w-full  h-52 dark:bg-gray-500">
                                        <div class="mt-6 mb-2 px-4 pt-5">
                                            <span class="block text-xs font-medium tracking-widest uppercase ">${item.region}</span>
                                            <h2 class="text-xl font-semibold tracking-wide">${item.name}</h2>
                                        </div>
                                        <div class=" px-4 flex justify-between text-xs pb-8">
                                            <p>Population: ${item.population}</p>
                                            <p> ${item.area} km <sup>2</sup></p>
                                        </div>

                                    </div>`
    })
    console.log(a);
    document.querySelectorAll(".items-stretch a").forEach(a => {
        a.classList.remove("border-b-2", "dark:border-violet-600", "dark:text-violet-600");
        a.classList.add("border-b-2"); 
    });

    document.querySelectorAll(".items-center a").forEach(a => {
        a.classList.remove("border-b-2", "dark:border-violet-600", "dark:text-violet-600");
        a.classList.add("border-transparent"); 
    });

    a.classList.remove("border-transparent"); 
    a.classList.add("border-b-2", "dark:border-violet-600", "dark:text-violet-600");
}
const mobNav = document.getElementById('mobNav')

let flag = true

function navtogFnk() {
    flag = !flag
    
    mobNav.style.display = flag ? 'none' : 'initial'
}
function scrollFnk() {
    window.scrollBy({ top: 550, behavior: "smooth" });
 
}

 function randCardFnk() {
    const randomobj = data[Math.floor(Math.random() * data.length)]
    randCard.innerHTML = `  <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12  ">
                                <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group  hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-[#E5E7EB]">
                                    <img src="${randomobj.flag}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
                                    <div class="p-6 space-y-2 lg:col-span-5 shadow-md ">
                                        <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${randomobj.name}</h3>
                                        <span class="text-md dark:text-[#8B5CF6] underline">${randomobj.region}</span>
                                        <p>Captial: ${randomobj.capital}</p>
                                        <p>Area: ${randomobj.area}  km <sup>2</sup></p>
                                        <p>Population: ${randomobj.population}</p>
                                    </div>
                                </a>
                            </div>`
    
 }

const searchDiv = document.getElementById('searchDiv')
const searchInp = document.getElementById('searchInp')
function searchFilt() {
    randCard.innerHTML = ""
    cardsCountry.innerHTML = ""
    const searchFiltArr = data.filter(item =>item.name.toLocaleLowerCase().includes(searchInp.value.toLocaleLowerCase()))
    searchFiltArr.map(item =>{

        cardsCountry.innerHTML += `<div onclick="showDet('${item.alpha3Code}')"  class="cursor-pointer shadow-md dark:bg-white dark:text-gray-900">
                                        <img src="${item.flag}" alt="" class="object-cover object-center w-full  h-52 dark:bg-gray-500">
                                        <div class="mt-6 mb-2 px-4 pt-5">
                                            <span class="block text-xs font-medium tracking-widest uppercase ">${item.region}</span>
                                            <h2 class="text-xl font-semibold tracking-wide">${item.name}</h2>
                                        </div>
                                        <div class=" px-4 flex justify-between text-xs pb-8">
                                            <p>Population: ${item.population}</p>
                                            <p> ${item.area} km <sup>2</sup></p>
                                        </div>

                                    </div>  `
    })
    
}

function showSearch() {
    
    flag = !flag
    
    searchDiv.style.display = flag ? 'none' : 'initial'
    showBtn.style.display = flag ? 'initial' :  'none'
    if(flag) printCards()
}
function showMore() {
    cardsNum += 60
    showBtn.style.display = cardsNum > data.length ? 'none' : 'block'
    printCards()
}