import { getCountries, getCountry } from "../utils/fetchCountries";

export async function loaderDetail({ params }) {
  const country = await getCountry(params.name);

  return { country };
}

export async function loaderHome({ params }) {
  const countries = await getCountries();
  return { countries };
}
