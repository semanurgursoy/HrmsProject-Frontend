import React from "react";
import { Container, Button, Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div class="pusher">



      <div class="ui vertical hrms-main center aligned segment"> 

        <div class="ui container">
          <div class="ui large secondary inverted pointing fixed menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <div class="hrms-logo">HRMS</div>
            <div class="right item">
              <a class="item" href="#home">Home</a>
              <a class="item" href="#signin">Sign In</a>
              <a class="item" href="#signup">Sign Up</a>
            </div>
          </div>
        </div>

        <div class="ui text hrms-header-content container">
          <h1 class="ui inverted header">Start Your Career Journey</h1>
          <p class="ui inverted header">Employers are waiting for you.Let's take a look at the postings!</p>
          <a class="ui huge primary right labeled icon button hrms-button">GET STARTED<i class="arrow down icon"></i></a>
        </div>

      </div>

      <section id="options" class="hrms-section">
        <div class="ui center aligned stackable two column grid container">
          <div class="row">

            <div class="column">
              <h3 class="ui icon header">
                <i class="circular inverted edit outline icon"></i>
                <div class="content">ADD POSTING</div>
              </h3>
            </div>

            <div class="column">
              <h3 class="ui icon header">
                <i class="circular inverted cloud icon"></i>
                <div class="content">TAKE A LOOK POSTINGS</div>
              </h3>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
