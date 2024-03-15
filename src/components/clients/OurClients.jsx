import React from "react";
import { SmallNavbar } from "../small_navbar/SmallNavbar";
import { ClientsContent } from "../clients_content/ClientsContent";

export const OurClients = ({title}) => {
    return (
       <div>
            <SmallNavbar title = {title}/>
            <ClientsContent/>
       </div>
    )
}