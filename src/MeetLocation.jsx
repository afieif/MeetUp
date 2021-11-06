import React from 'react'

export default function MeetLocation(props) {

    const Style = 
    {
        card : {
            backgroundColor:"#f3f3",
            display : "inline-block",
            width : "71%",
            padding : 20,
            paddingRight : 0,
            marginTop: 20,
            marginLeft : "15%",
            marginRight : "12%",
            marginBottom : 10,
            borderRadius : 16,
            elevation : 10,
            color : "#f3f3f3",
        },
    }

    return (
        <div style={Style.card}>
        Meet up point : {props.label}
        </div>
    )
}
