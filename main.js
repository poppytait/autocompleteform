const listOfCountries = document.getElementById('list-of-countries');

const keyUpHandler = (value) => {
    if (value.length === 0) {
        listOfCountries.innerHTML = '';
    }

    if (value.length >= 2) {
        const countries = searchCountries(value);
        renderCountriesList(countries);
    }
}

const searchCountries = (input) => {
    const upperCaseInput = input.toUpperCase();
    const filteredCountries = countries.filter(country => country.toUpperCase().startsWith(upperCaseInput));
    return filteredCountries;
}

const renderCountriesList = (countries) => {
    listOfCountries.innerHTML = countries.map(country => `<li>${country}</li>`);
}




