import React from "react";
import { SmallNavbar } from "../small_navbar/SmallNavbar";
import { ContactHeader } from "../contact_header/ContactHeader";

export const Contact = ({title}) => {
    return (
       <div>
            <SmallNavbar title = {title}/>
            <ContactHeader/>
       </div>
    )
}