import React from "react";

export default function About(props) {

  let myStyle = {
    color :"white",
    backgroundColor: "#245798",
  }

 
  let myStyleBtn = {
    color :"white",
    backgroundColor: "blue",
    padding:"0px 15px",
    margin:"0px 12px"
  }

  return (
    <>
      <div className="container" id="Working">
        <div className="about my-2">
          <h3 style={{padding:"5px 20px"}}>Working With </h3>
          <p style={{padding:"5px 20px"}}>
            Sites For Free Online Education helps you to learn at your
            comfortable place. These websites offer many audio, video,
            articles, and e-books to increase your knowledge. The courses of
            these websites are offered by top universities.
          </p>
        </div>

        <div
          className="accordion accordion-flush mb-5" style={{backgroundColor:"#245798"}}
          id="accordionFlushExample"
        >
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Coursera
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Coursera is a free learning site that offers MOOCs courses from
                well-known universities. All Coursera courses contain
                pre-recorded video lectures that you can watch when it is
                convenient for you. Coursera has programs together with
                universities that allow you to get a master degree or
                specializations. You can explore various college courses without
                any hassle. This site is offering free programs from accredited
                institutions. The courses available on such platforms are
                designed by a leading university.
                <a href="https://www.coursera.org/courses?query=free" className="btn btn--primary" style={myStyleBtn}> Link</a>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Udemy
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Udemy is an online platform that helps you to create courses for
                categories like business, design, marketing, etc. You can
                develop new skills and achieving their goals by learning from
                the extensive library of various courses. Subjects that are
                available in Udemy are taught by expert instructions. The
                outline of courses can be viewed on all devices connected to the
                internet. You do not require any prequalification to take any
                course.
                <a href="https://www.udemy.com/" className="btn btn--primary" style={myStyleBtn}> Link</a>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Linkedin Learning
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                LinkedIn Learning is a website that offers video courses that
                are taught by experts. You can use this website to access up to
                15,000 courses in more than seven languages available both for
                free and with a subscription.LinkedIn free courses give you a
                chance to learn from industry experts without spending a dime.
                These LinkedIn training courses are perfect for beginners,
                intermediate learners, and experts.
                <a href="https://www.linkedin.com/learning/" className="btn btn--primary" style={myStyleBtn}> Link</a>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                StanFord Online
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Stanford Online is a study site that provides learning
                opportunities via free online degrees, online courses,
                e-learning, and more. You can learn a wide range of subjects
                including, computer science, AI, health and medicine, arts, and
                data science. The platform offers certification after completing
                the program. You can enroll in courses to learn new skills, get
                a job, and to create a new future. It has a collection of free
                e-books, webinars, videos, etc.
                <a href="https://online.stanford.edu/" className="btn btn--primary" style={myStyleBtn}> Link</a>
              </div>
            </div>
           {/* <button onClick={toggleStyle} className="btn btn-primary" style={{margin:"5px"}}>Enable Dark Mode</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
