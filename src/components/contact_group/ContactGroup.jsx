import './ContactGroup.css'
import React from 'react'

export const ContactGroup = () => {
    return <div>
        <h2>-- Our Group --</h2>
        <div className='contact_group_branch'>
            <img className='contact_group_img' src="blank.png" alt="" />
            <div className='contact_group_branch_detail'>
                <h4>
                PT. Cakra Perkasa Jayamulia 
                </h4>
                Jalan xxxxxxxx
                <br />
                <br />
                cakra@cakra.com
                <br />
                +62222222
            </div>
        </div>
    </div>
}