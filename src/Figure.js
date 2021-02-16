import './Figure.css';

function Figure(props) {
    let {url, alt} = props;
    return(
        <>
            <img className="select_item_img" src={url} alt={alt}/>
            <button className="btn" onClick={() => document.getElementById('chosen-image').src = url} >Select figure</button>
        </>
    )
}

export default Figure;