import React from "react";
import "../Services.css";

export default function Services(props) {
  let bgColor = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <>
     
      <div className="container-fluid" id="Service">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-3" style={bgColor}>
              <div className="card-header">
                <strong>Schoolarship</strong>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Full scholarships (also called full-ride scholarships) are the
                  holy grail of funding opportunities, covering almost
                  everything for the full three or four years of university.
                  Your tuition and living costs will be covered by the provider,
                  leaving you free. Education is not preparation for life education is life itself....
                  <a href="https://www.codingninjas.com/landing/cnsat/?utm_source=google&utm_medium=[search]&utm_campaign=16792805417_138237714918_e_coding%20ninja%20scholarship__601662055165_c____9302578&gad=1&gclid=CjwKCAjwqZSlBhBwEiwAfoZUILuMxmf6G_ZtieE0iFQTo7kfnVT5YxrF1p7EVmhWtOby-KRJ1-zVbRoCBIsQAvD_BwE">Click here</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col6">
            <div className="card mb-3 " style={bgColor}>
              <div className="card-header">
                <strong>Daily Quizes</strong>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Attempt a variety of challenges to practice editing code to
                  solve problems and improve your programming techniques. Some
                  examples of top code challenge websites are HackerRank,
                  TopCoder, Coderbyte, Project Euler, CodeChef, Codewars, and
                  CodinGame....
                  <a href="https://practice.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest">Click here</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-3 " style={bgColor}>
              <div className="card-header">
                <strong>Assignments</strong>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Code challenges help you build problem-solving skills, better
                  understand the programming language you use, and get to know
                  algorithms you may not be familiar with. If you want to
                  improve your skills in programming, there’s no better way than
                  by writing code....
                  <a href="https://www.javatpoint.com/">Click here</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-3 " style={bgColor}>
              <div className="card-header">
                <strong>Live Projects</strong>
              </div>
              <div className="card-body">
                <p className="card-text">
                  This course is made for all those people who have little
                  knowledge of everything needed to become a Software Developer
                  but are unable to use their programming knowledge to develop
                  real-time applications.You should decide what to make, design
                  the end result, plan your code, identify extra things you need
                  to formulate a schedule....
                  <a href="https://www.bestdotnettraining.com/real-time-live-project/">Click here</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-3 " style={bgColor}>
              <div className="card-header">
                <strong>Hiring</strong>
              </div>
              <div className="card-body">
                <p className="card-text">
                  At Codementor, you'll find top Scheme experts, developers,
                  consultants, and tutors. Get your project built, code
                  reviewed, or problems solved by vetted Scheme freelancers.
                  Learn from expert mentors with team training & coaching
                  experiences. Whatever the case may be, find the Scheme help
                  you need in no time....
                  <a href="https://www.indeed.com/q-The-Scheme-Programming-Language-jobs.html?vjk=ad226106144e441b">Click here</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card mb-3 " style={bgColor}>
              <div className="card-header">
                <strong>Internship</strong>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Students apply hard-earned skills that span the full
                  development stack, such as Python, databases, and front end
                  design, to a project that makes a difference. While the
                  internship offers opportunities to enhance software
                  development skills, it also gives students an opportunity to
                  exercise their teamwork, leadership, and problem-solving
                  skills....
                  <a href="https://internshala.com/internships/programming-internship/">Click here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
