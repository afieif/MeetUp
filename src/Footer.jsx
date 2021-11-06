import React from 'react'

export default function Footer() {
    var year = new Date().getFullYear();
    // dynamically sets date for footer 

    const Style = 
    {
        footer:{
            position:"fixed",
            bottom:0,
            marginTop:15,
        },
    }

    return (
        <footer style={Style.footer}>
        <p>Copyright &copy; {year} Afif Deshmukh</p>
        </footer>
    );
}
