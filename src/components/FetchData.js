const API_KEY = "4d87bd002fee42a7b8b125360fc8f93b";
async function FetchData(category) {
  let res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
  ).then((data) => {
    return data.json();
  });
  console.log(res);
}

FetchData("entertainment")