const getCountry = async () => {
    const resp = await fetch("https://api.ipregistry.co/?key=ogg11epxr23zr784");
    const countryRes = await resp.json();

    const country = countryRes;

    return {
      country: country.location.country.name,
      city: country.location.city
    };
  };

export default getCountry;