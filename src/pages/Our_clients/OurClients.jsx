import React from "react";
import { SmallNavbar } from "../../components/small_navbar/SmallNavbar";

export const OurClients = ({title}) => {
    return (
       <div>
            <SmallNavbar title = {title}/>
            <div className="clients_content_container">
           <div className="clients_content_first_line">
                <div className="clients_content_list">
                    <h3>Coal Mining</h3>
                    PT.Adaro Indonesia
                    <br />
                    AE Automotion
                    <br />
                    PT. Nirmala Matranusa
                    <br />
                    PT. Berau Coal
                    <br />
                    PT. Gunung Bayan Coal
                    <br />
                    PT. BNJM
                    <br />
                    PT. BAS
                    <br />
                    Baramulti Sugih Sentosa
                    <br />
                    PT. Kideco Jaya Agung
                    <br />
                    PT. Pama Persada Nusantara
                    <br />
                    PT. Petrosea
                    <br />
                    PT. Leighton Contractors Indonesia
                    <br />
                    PT. Thiess Contractors Indonesia
                    <br />
                    PT. Ruam Choke Pattana
                </div>
                <div className="clients_content_list">
                    <h3>Oil & Gas</h3>
                    Total Indonesie - Senipah Area
                    <br />
                    Pertamina UP V Balikpapan
                    <br />
                    Pertamina - Tallisman Tanjung
                    <br />
                    Schlumberger
                    <br />
                    Vico Indonesia - Muara Badak
                    <br />
                    PT. Exspan Nusantara
                    <br />
                    PT. Elnusa Workover Service
                    <br />
                    Pertamina DOH Kalimantan
                </div>
                <div className="clients_content_list">
                    <h3>PlyWood Industry</h3>
                    PT. Barito Pacific
                    <br />
                    PT. Basirih Industrial Corp.
                    <br />
                    PT. Wijaya Triutama
                    <br />
                    PT. Austral Byna
                    <br />
                    PT. Tanjung Raya Plywood
                    <br />
                    PT. Gunung Meranti Plywood
                    <br />
                    PT. Jayanti Plywood
                </div>
           </div>
           <div className="clients_content_second_line">
                <div className="clients_content_list">
                    <h3>Heavy Equipment</h3>
                    PT. Altrak 1978
                    <br />
                    PT. United Tractors
                    <br />
                    PT. Trakindo Utama
                    <br />
                    PT. Komatsu RemanufacturingAsia
                    <br />
                    PT. Hexindo Adi Perkasa
                    <br />
                    PT. Eka Dharma Jaya Sakti
                    <br />
                    PT. Intraco Penta
                </div>
                <div className="clients_content_list">
                    <h3>Agro Industry</h3>
                    PT. Smart 
                    <br />
                    PT. Salim 
                    <br />
                    PT. Inhutani 
                    <br />
                    PT. Bumi Hutani Lestari 
                    <br />
                    PTP. Centramas Nusantara 

                </div>
                <div className="clients_content_list">
                    <h3>Shipping</h3>
                    SPIL 
                    <br />
                    PT. Arpeni 
                    <br />
                    PT. Righ Tenders 
                    <br />
                    PT. Mitra Bahtera
                </div>
           </div>
           <div className="clients_content_third_line">
                <div className="clients_content_list">
                        <h3>Crumb Rubber</h3>
                        Insan Bonfaide 
                        <br />
                        Hok Tong
                        <br />
                        Banua Lima Sejanis
                </div>
                <div className="clients_content_list">
                        <h3>Government</h3>
                        Government of South Kalimantan
                        <br />
                        Government of East Kalimantan
                </div>
                <div className="clients_content_list">
                        <h3>PowerPlant</h3>
                        PLN
                </div>
            </div>
                
           <div className="clients_content_fourth_line">
                <div className="clients_content_list">
                        <h3>Cement Industry</h3>
                        PT. Indocement Tunggal Prakarsa
                </div>
           </div>
        </div>
       </div>
    )
}