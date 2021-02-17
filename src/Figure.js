import './Figure.css';

function Figure(props) {
    let {url, alt, selectImage} = props;
    return(
        <>
            <img className="select_item_img" src={url} alt={alt}/>
            <button className="btn" onClick={() => selectImage(url)} >Select figure</button>
        </>
    )
}

export default Figure;