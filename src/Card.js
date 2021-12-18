import { useEffect, useState } from "react";

const Card = ({name, url}) => {
    
    useEffect(() => {
        getImage();
    }, [])

    const [image, setImage] = useState();

    const getImage = async () => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        setImage(data.sprites.front_default);
    }
    
    return(
        <div>
            <img src={image} alt="Pokemon img" />
            <h1>{name}</h1>
        </div>
    );
}

export default Card;