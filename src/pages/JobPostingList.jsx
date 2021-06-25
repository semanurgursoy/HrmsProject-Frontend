import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data));
  });

  return (
    <div>
      <section id="jobPostings" class="hrms-section">
        <div class="ui center aligned stackable three column grid container">
          <div class="row">
            <div class="sixteen wide mobile twelve wide tablet eight wide computer column">
              <h2 class="ui header hrms-h2">JOB POSTINGS</h2>
            </div>
          </div>

          {jobPostings.map((jobPosting) => (
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
                      
                    </div>
                    <div class="content">
                      <div class="header">
                        {jobPosting.jobPosition.position}
                      </div>
                      <div class="meta">Company : {jobPosting.employer.companyName}</div>
                      <div class="meta">Description : {jobPosting.description}</div>
                      <div class="meta">Open Position Count : {jobPosting.openPositionCount}</div>
                      <div class="meta">Salary : {jobPosting.minSalary}-{jobPosting.maxSalary}</div>
                      <div class="meta">City : {jobPosting.city.cityName}</div>
                      <div class="meta">App Dead Line : {jobPosting.applicationDeadLine}</div>
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
