// import { Button } from "@material-ui/core";
import React from "react";

  
  function LocationList(props) {

    const Style = 
    {
        card : {
            backgroundColor:"#f3f3f5",
            display : "inline-block",
            width : "40%",
            padding : 20,
            paddingRight : 0,
            marginTop: 20,
            marginLeft : "30%",
            marginRight : "30%",
            marginBottom : 10,
            borderRadius : 16,
            elevation : 10,
        },
        btn : {
          marginLeft : "50%"
        }
    }

    function ListItem(props) {
        return <li style={Style.card}>{props.value} 
        {/* <Button color="secondary" variant="contained" style={Style.btn}>Delete</Button> */}
        </li>;
      }

    const place = props.data;
    const listItems = place.map((data) =>
      <ListItem key={data.label} value={data.label}/>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
export default LocationList