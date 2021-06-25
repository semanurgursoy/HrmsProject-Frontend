import React, { useState, useEffect } from 'react'
import EmployerService from "../services/employerService"

export default function EmployerList() {

    const [employers, setEmployers] =useState([]);

    useEffect(()=>{
        let employerService = new EmployerService();
        employerService.getEmployers().then((result)=>setEmployers(result.data.data));
    });

    return (
        <div>
            
            <section id="employers" class="hrms-section">
        <div class="ui center aligned stackable three column grid container">

          <div class="row">
            <div class="sixteen wide mobile twelve wide tablet eight wide computer column">
              <h2 class="ui header hrms-h2">EMPLOYERS</h2>
            </div>
          </div>

          {employers.map((employer) => (
          <div class="row">
            <div class="column">
              <div class="ui special cards">
                <div id="card" class="ui link centered fluid card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <i class="huge plus circle icon"></i>
                        </div>
                      </div>
                    </div>
                    <img src="../img/company.jpg" />

                  </div>
                  <div class="content">
                    <div class="header">{employer.companyName}</div>
                    <div class="meta">Website : {employer.website}</div>
                    <div class="meta">Contact : {employer.telephone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}

        </div>
      </section>

        </div>
    )
}
