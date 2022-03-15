import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Colors from "../../resources/Colors";


function LoaderSpinner({y}) {

  return (
    <Loader 
      type='Rings' 
      color={`${Colors.dragons}`}
      secondaryColor='black'
      width={300} 
      height={ y || 300}
    />
  )
}

export default LoaderSpinner