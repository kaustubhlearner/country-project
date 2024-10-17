let countries = document.querySelector(".countries-about")
async function data() {
    let response = await fetch('https://restcountries.com/v3.1/all')
    let maindata = await response.json()
    maindata.forEach((country) => {
        console.log(country);
        
        let countr_info = document.createElement('a')
        countr_info.classList.add('ountr_info')

        countr_info.innerHTML = ` <a href="#" class="ountr_info">
        <div class="country-card">
            <img src="${country.flags.svg}" alt="Flag of Grenada">
            <div class="card-text">
                <h3>${country.name.common}</h3>
                <p><b>Population</b>: ${country.population}</p>
                <p><b>Region</b>: ${country.region}</p>
                <p><b>Capital</b>: ${country.capital}</p>
            </div>
        </div>
        </a>`
        countries.append(countr_info)
        
    });

}
data();
