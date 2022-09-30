import Navbar from "./Navbar";
import SideCard from "./SideCard";
import "./Home.css";
import FetchData from "./FetchData";

function Home() {
  let article = FetchData(5, 1);

  // let [title,setTitle] = useState()
  // let [description,setDescription] = useState()
  // let [imgURL,setImgURL] = useState()


  console.log(article, "fromHOME");
  return (
    <>
      <Navbar />
      <div className="home_container">
        <div className="home_banner">
          <img src="" alt="card_images" />
          <h4>sgfd</h4>
          <p>sdfg</p>
        </div>
        <div className="side_card_container">
          {article.map((element, index) => {
            
            return (
              index < 3 && <SideCard key={index + 1}
                imgURL={element.urlToImage}
                title={element.title}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
