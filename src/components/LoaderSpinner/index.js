import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Colors from "../../resources/Colors";


function LoaderSpinner() {

  return (
    <Loader 
      type='Rings' 
      color={`${Colors.dragons}`}
      secondaryColor='black'
      width={300} 
      height={300}
    />
  )
}

export default LoaderSpinner