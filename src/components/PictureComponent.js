import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function PictureComponent(){
    const [pictureData, setPictureData] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        axios
            .get ("https://api.nasa.gov/planetary/apod?api_key=s0zNjpbfiiM7FI7UhsxFv0X0IqmhdkxtMJ2QzAfg")
            .then (response => {
                setPictureData(response.data);
            })
            .catch(error => console.log("The data was not returned", error));
    }, [])

    console.log("picture ", pictureData);
    
    return (
        <div className="picture-card">
            <div className="card-head">
                <h2>{pictureData.tile}</h2>
                <h3>{pictureData.date}</h3>
            </div>
            <img className="picture" src={pictureData.url} alt="picture of the day"></img>
            <div className="copyright">
                <p>© {pictureData.copyright}</p>
            </div>
            <div className="card-explanation">
                <p>{pictureData.explanation}</p>
            </div>
            
        </div>
    )

};

    // const didUpdate = () => {
    //     axios
    //         .get ("https://api.nasa.gov/planetary/apod?api_key=s0zNjpbfiiM7FI7UhsxFv0X0IqmhdkxtMJ2QzAfg")
    //         .then (response => {

    //             setPictureData(response.data);
    //             console.log(response);
    //         })
    //         .catch(error => console.log("The data was not returned", error));
    // }

    // useEffect(didUpdate, []);

