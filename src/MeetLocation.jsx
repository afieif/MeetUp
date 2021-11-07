import React from 'react'

export default function MeetLocation(props) {

    const Style = 
    {
        card : {
            backgroundColor:"#f3f3",
            display : "inline-block",
            width : "50%",
            padding : 20,
            paddingRight : 0,
            marginTop: 20,
            marginLeft : "25%",
            marginRight : "25%",
            marginBottom : 10,
            borderRadius : 16,
            elevation : 10,
            color : "#f3f3f3",
        },
        location : {
            textAlign : "center"
        }
    }

    return (
        <div style={Style.card}>
        <p style={Style.location}>Meet up point : {props.label}</p>
        </div>
    )
}
