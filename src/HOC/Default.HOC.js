//HOC -> Higher Order Components(Transforms component into another components)
//These are basically for adding additional functionalities to the existing components

//import React, { Component } from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layout/Default.layout";// to go out of the present folder we use ".."

const DefaultHOC = ({ component: Component, ...rest }) => {

    //component
    //props -> path, exact
    return(
        <>
        <Route //Parent component
        {...rest}

        component = {(props) => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )
        } 
        />
        </>
    );
};

export default DefaultHOC;