import React from 'react'
import { NavLink } from "react-router-dom";
import Crm from '../CRM/Crm';
import Customer from '../Customer Stories/Customer';
import "./platform.css"
const Platform = () => {
  return (
    <section className="top-section">
      <div className="container-fluid nav_bg">
        <div className="row ">
          <div className="col-10 mx-auto datacontainer">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-lg-1">
                <h2> <strong className="brand-name" >Don't just integrate <br/>
                     <span className='crmblue'> Accelerate your CRM</span></strong></h2>
                <p className="my-3">
                Propel your sales team into a state of flow with CRM <br/>
                Accelerations. Switch out boring hours of repetitive work with <br/>
                 high-impact activities. Build a repeatable sales process. 
                </p>
                <div className="mt-3 ">

                <button type="button" className="btn btn-secondary btn-sm btncustomcss">GET STARTED</button>
                  
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 header-img">
                <img src="./Images/Group 1006.png" alt="imagehome" className="imghome" />
              </div>
            </div>
            <div className='crm-content'>
            <h2 className='crmHeading' style={{"textAlign":"center"}}>CRM Acceleration</h2>
            <p className='crmpara' style={{"textAlign":"center"}}>Everything CRM Integrations was supposed to be. And more.</p>
            <div className="row">
           
                <Crm title="Never update your contacts manually" src="./Images/Group 1006-3.png"
                para = "Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities"
                 />
                <Crm title="Engage instantly with prospects who show intent" src="./Images/Group 1006-4.png"
                  para="Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat."
                />
                <Crm title="Outreach without leaving your CRM " src="./Images/Group 1006-5.png"
                  para ="Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach."
                />


            </div>
            </div>
            <h2 style={{"textAlign":"center", "marginTop":"30px","color":"#120155"}}>What our customers have to say</h2>
            <Customer />

          </div>
       
        </div>
        
      </div>
    
    </section>

  )
}

export default Platform