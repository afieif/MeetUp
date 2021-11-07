import { Button, TextField } from '@material-ui/core'
import React, {useState} from 'react'

export default function LocationInput(props) {
    const [inputList,setInputList] = useState([]);
    const [lt, setlt] = useState(0.0);
    const [ln, setln] = useState(0.0);
    const [countEntries, setCountEntries] = useState(0);

    const Style = 
    {
        card : {
            backgroundColor:"#f3f3f5",
            display : "inline-block",
            width : "71%",
            padding : 20,
            paddingRight : 0,
            marginTop: 20,
            borderRadius : 16,
            elevation : 10,
            marginLeft : "15%",
            marginRight : "12%",
        },
        input : {
            display : "inline",
            padding : 10,

        },
        buttonContainer : {
            display : "inline",
            padding : 10,
        },
    }

    const fetchData = async (query) => {
        const response = await fetch("https://api.positionstack.com/v1/forward?access_key=b9e94c45b6108b84f7fe745ab960cf8a&query="+query+"&limit=1");
        const data = await response.json();
        return getCords(data);
            }

    const fetchPlace = async (query) => {
        console.log(query);
        const response = await fetch("https://api.positionstack.com/v1/reverse?access_key=b9e94c45b6108b84f7fe745ab960cf8a&query="+query+"&limit=1");
        const data = await response.json();
        let label = data.data[0].label
        setTimeout(() => props.transferLabel(label),0);
            }

    function getCords(data){
        setlt(lt+data.data[0].latitude);
        setln(ln+data.data[0].longitude);
        setCountEntries(countEntries+1);
        let temp = inputList;
        temp.push(data.data[0]);
        setInputList([...temp]);
        console.log(inputList);
        setTimeout(() => props.transferData(inputList),0);
    }  
    
    function AddLocation(e) {
        e.preventDefault();
        let query = e.target.Locality.value + "," + e.target.City.value + "," + e.target.Country.value;
        fetchData(query);
        e.target.Locality.value = "";
        e.target.City.value = "";
        e.target.Country.value = "";
    }


    function Calculate()
    {
        console.log(lt +" , "+ln);
        let latf = lt/countEntries;
        let lonf = ln/countEntries;
        let querycords = ""+latf+","+lonf;
        fetchPlace(querycords);
    }

    return (
        <>
        <form onSubmit={(e) => {
            AddLocation(e);
        }}>
        <div style={Style.card}>
        <div style={Style.input}>
        <TextField name="Locality" placeholder="Area/Locality" variant="outlined" color="secondary" id="outlined-basic"></TextField>
        </div>
        <div style={Style.input}>
        <TextField name="City" placeholder="City" required variant="outlined" color="secondary" id="outlined-basic"></TextField>
        </div>
        <div style={Style.input}>
        <TextField name="Country" placeholder="Country" required variant="outlined" color="secondary" id="outlined-basic"></TextField>
        </div>
        <div style={Style.buttonContainer}>
        <Button type="submit" color="secondary" variant="contained" style={{marginTop:10}}>Add</Button>
        <Button color="primary" variant="contained" style={{marginLeft:20,marginTop:10}} onClick={Calculate}>Meet</Button>
        </div>
        </div>
        </form>
        </>
    )
}
