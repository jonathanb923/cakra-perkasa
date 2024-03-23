import React from "react";
import { SmallNavbar } from "../small_navbar/SmallNavbar";
import MachineryList from "../machinery_list/MachineryList";

export const Machinery = ({title}) => {
    return (
       <>
            <SmallNavbar title = {title}/>
            <MachineryList/>
       </>
    )
}