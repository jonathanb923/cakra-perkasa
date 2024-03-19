import React from "react";
import { SmallNavbar } from "../small_navbar/SmallNavbar";
import { ContactHeader } from "../contact_header/ContactHeader";
import { ContactMap } from "../contact_map/ContactMap";

export const Contact = ({title}) => {
    return (
       <div>
            <SmallNavbar title = {title}/>
            <ContactHeader/>
            <ContactMap/>
       </div>
    )
}