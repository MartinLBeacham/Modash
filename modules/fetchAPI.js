function fetchAPI() {
  if (typeof baseUrl !== string) {
    console.log("Please enter a string for baseUrl.");
    return undefined;
  }
  if (typeof endpoint !== string) {
    console.log("Please enter a string for endpoint.");
    return undefined;
  }
  if (typeof requestParams !== string) {
    console.log("Please enter a string for requestParams.");
    return undefined;
  }

  if (typeof method !== string) {
    console.log("Please enter a string for method.");
    return undefined;
  }
  if (typeof headers !== object) {
    console.log("Please enter a object for headers.");
    return undefined;
  }
  return base_fetchAPI(baseUrl, endpoint, requestParams, method, headers);
}

async function base_fetchAPI(
  baseUrl,
  endpoint,
  requestParams,
  method,
  headers,
) {
  const urlToFetch = baseUrl + endpoint + requestParams;
  console.log(urlToFetch);
  try {
    const response = await fetch(urlToFetch, {
      method: "GET", // "POST" does not work
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchAPI;
