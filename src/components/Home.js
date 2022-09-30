import Navbar from "./Navbar";
import SideCard from "./SideCard";
import "./Home.css";
import FetchData from "./FetchData";

function Home() {
  let article = FetchData(5, 1);
  console.log(article, "fromHOME");
  return (
    <>
      <Navbar />
      <div className="home_container">
        <div className="home_banner">
          {article.map((element, index) => {
            return (
              index < 1 && (
                <>
                  <div className="banner_container">
                    <img src={element.urlToImage} alt="banner_image" />
                  </div>
                  <h4>
                    {element.title}-
                    <span className="author">{element.author}</span>
                  </h4>
                </>
              )
            );
          })}
        </div>
        <div className="side_card_container">
          {article.map((element, index) => {
            return (
              index >= 1 &&
              index < 4 && (
                <SideCard
                  key={index + 1}
                  imgURL={element.urlToImage}
                  title={element.title}
                  author={element.author}
                  description={element.description}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
