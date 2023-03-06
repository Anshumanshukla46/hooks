import React, { createContext } from "react";
import CompA from "./CompA";


/*
  1. import createContext
  2. declare that and export that.
  3. cover those component in which you want to pass the data
  4. NOW IN THE RECEIVING END IMPORT USECONTEXT, EXPORTED VARIBLE FROM PARENT
  5. NOW USE THE VALUE AS WHATEVER YOU HAVE PASSED IF OBJECT THE DOT(.) ELSE VALUE
  
*/


export const GlobalInfo = createContext("initial"); // createContext

function Parent() {

    function getDay(item) {
        console.log("TODAY IS ", item);
    }


    return (

        // passing then "Provider"
        <GlobalInfo.Provider value={{ color: "Green", getDay: getDay }}>

            <div>
                Parent.js
                <CompA />
            </div>

        </GlobalInfo.Provider >

    );
}

export default Parent;
