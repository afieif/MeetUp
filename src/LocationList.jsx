import React from "react";

  
  function LocationList(props) {

    const Style = 
    {
        card : {
            backgroundColor:"#f3f3f5",
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
        },
    }

    function ListItem(props) {
        return <li style={Style.card}>{props.value}</li>;
      }

    const objs = props.data;
    const listItems = objs.map((data) =>
      <ListItem key={data.label} value={data.label}/>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
export default LocationList