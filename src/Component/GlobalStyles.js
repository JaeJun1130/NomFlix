import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../font.css";

const globalStyle = createGlobalStyle`
${reset};


a{
    text-decoration:none;
    color:inherit;
}

*{
    box-sizing: border-box;
}
body{

    font-family: 'Chilanka', cursive;
    font-size:14px;
    background-color:rgba(20,20,20,1);
    color:white;
    padding-top:60px;
}`;

export default globalStyle;
