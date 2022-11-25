const Book = (props) => {
    const{img, title, author, cost, rating} = props
    

    return(
        <div className="book">
            <img src={img} className="logo" alt="React logo" />
             <h1>{title}</h1>
            <h2>{author}</h2>
            <h3>{cost}</h3>
            <h4>{rating}</h4>

        </div>
    )
}

export default Book