import "./SideCard.css"

function SideCard({title,description,imgURL,author}){
    if(!imgURL){
        imgURL = "https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"
        console.log("img nulll")
    }
    title = title.split(" ",20)
    let joinedTitle = title.join(" ")

    return (
        <div className="card_container">
            <img src={imgURL} alt="asdf"/>
            <div className="card_info">
                <h4>{`${joinedTitle} - `}<span fontSize="5px" className="author">{author} </span></h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SideCard;