import { useEffect, useState } from "react";
const API_KEY = "4d87bd002fee42a7b8b125360fc8f93b";

function FetchData(pageSize,page){
let [article, setArticle] = useState([]);

useEffect(() => {
  console.log("working");
  FetchData(5,1);
},[]);
async function FetchData(pageSize, page) {
  let res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=entertainment&country=us&language=en&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`
  );
  let parsedRes = await res.json();
  setArticle(parsedRes.articles);
}
console.log(article,"FROM FETCHDATA")
return article
}

export default FetchData;