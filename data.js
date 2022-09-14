let main = document.getElementById("main")

async function fetchData(){
    const datas = await fetch("http://universities.hipolabs.com/search?country=United+States").then(response => {
        return response.json();
    })

    const finalData = datas.map(data => {
        return {
            name: data.name,
            country:data.country
        }
    })
    
    console.log(finalData)
    const divv = document.createElement("div");
   
        finalData.forEach( university => { 
            let ul = document.createElement("ul");
            let country = document.createElement("li")
            main.appendChild(ul).innerHTML = university.name
            ul.style.color = "red"
            country.style.color = "blue"
             ul.onclick = () => { 
                ul.appendChild(country).innerHTML = university.country
             };

        });
        


}

fetchData()





// example
// divv = document.createElement("div")
// main.innerHTML = "poxoooos"
// main.appendChild(divv).innerHTML = "pedros"