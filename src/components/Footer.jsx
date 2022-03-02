import React from "react";

function Footer(){
    var current = new Date();
    return<footer><p>Copyright ⓒ {current.getFullYear()}</p></footer>
}
export default Footer;