import React, { useState, useEffect } from "react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
  
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekers()
      .then((result) => setJobSeekers(result.data.data));
  });

  return (
    <div>
      
      <section id="jobSeekers" class="hrms-section">
        <div class="ui center aligned stackable three column grid container">

          <div class="row">
            <div class="sixteen wide mobile twelve wide tablet eight wide computer column">
              <h2 class="ui header hrms-h2">JOB SEEKERS</h2>
            </div>
          </div>

          {jobSeekers.map((jobSeeker) => (
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
                    <img src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/>

                  </div>
                  <div class="content">
                    <div class="header">{jobSeeker.firstName} {jobSeeker.lastName}</div>
                    <div class="meta">Birth Year : {jobSeeker.birthYear}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}

        </div>
      </section>
     

      
    </div>
  );
}
