let data;
function getData() {
    fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
        .then(res => res.json())
        .then(item => {
            data = item
            console.log(data);
            sjsj()
            
        })
}
getData()

function regionFilt(r, a) {

    const filtregData = data.filter(region => region.region.toUpperCase() === r.toUpperCase());

    cardsCountry.innerHTML = ""
    filtregData.forEach(item => {
        cardsCountry.innerHTML += `<div onclick="showDet('${item.alpha3Code}')" class="max-w-[290px]  cursor-pointer  shadow-md dark:bg-white dark:text-gray-900">
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
function sjsj() {
    const detCard = document.getElementById('detCard')
    const query = window.location.search
    const params = new URLSearchParams(query)
    console.log(params);

    const id = params.get("id")
    const obj = data.find(item => item.alpha3Code == id)
    console.log(obj);


    detCard.innerHTML += `<div class=" container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12  ">
                                <a rel="noopener noreferrer " href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group  hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white cursor-default">
                                <div class="p-6 space-y-2 lg:col-span-5 shadow-md ">
                                <h2 class="text-md font-semibold sm:text-lg  ">${obj.alpha3Code}</h2>
                                <h3 class="text-2xl font-semibold sm:text-4xl  ">${obj.name}</h3>
                                <span class="text-md dark:text-[#8B5CF6] underline"></span>
                                <p>Captial: ${obj.capital} </p>
                                <p>Region: ${obj.region}</p>
                                <p>Alternative names:${obj.altSpellings[1]} </p>
                               <div class="flex flex-wrap">
                                    ${obj.borders.map(item => `<div onclick="showDet('${item}')" class="cursor-pointer border px-2 py-1 mx-1">${item}</div>`).join("")}
                                </div>
                                
                                <div class="flex justify-between pt-8">
                                    <p>Population: ${obj.population}</p>
                                    <p> ${obj.area} km <sup>2</sup></p>
                                </div>

                                </div>
                                <img src="${obj.flag}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
                                </a>
                            </div>`
}

function showDet(item) {
    // window.location.href = `http://127.0.0.1:5500/details.htm?id=${item}`
    window.location.href = `https://country-app-mu-sage.vercel.app/details.htm?id=${item}`;

}

