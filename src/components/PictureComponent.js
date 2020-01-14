import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardImg, CardText,
    CardTitle, CardSubtitle } from 'reactstrap';


export default function PictureComponent(){
    const [pictureData, setPictureData] = useState([])


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
        <Card className="picture-card">
            <div className="card-head">
                <CardTitle tag="h2">{pictureData.tile}</CardTitle>
                <CardTitle tag="h3">{pictureData.date}</CardTitle>
            </div>
            <CardImg className="picture" src={pictureData.url} alt="picture of the day"></CardImg>
            <CardSubtitle className="copyright text-right">© {pictureData.copyright}</CardSubtitle>
            <CardText className="card-explanation">
                <p>{pictureData.explanation}</p>
            </CardText>
        </Card>
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

