"use client";

export default function Resume() {
    return (
    <div className="container">
        <div className="d-flex justify-content-between">
            <h1>Software Consultant</h1>
        </div>
        <hr/>
        <h4>Contact</h4>
        <p><b>Email</b>: jcolelanders@gmail.com</p>
        <p><b>Phone</b>: (256) 225-5403</p>
        <p><b>Address</b>: Jacksonville, AL, 36265</p>
        <p><b>Career Objective</b>:</p>
        <p>Results-oriented professional with 4 years of experience and a proven knowledge of troubleshooting, database management, and software development. Aiming to leverage my skills to successfully fill the Software Engineer role at your company.</p>
        <br/>
        <h4>Experience</h4>
        <ul>
            <li>
                <div className="row">
                    <div className="col-8">
                        <p className="h6">Software Consultant</p>
                    </div>
                    <div className="col-4">
                    <small className="fw-bold">CGI, Birmingham, AL / Oct 2022 - Present</small>
                    </div>
                </div>
                <div className="row">
                    <ul>
                        <li>Collaborated with project stakeholders to ensure successful delivery of software solutions.</li>
                        <li>Implemented automated tests for quality assurance purposes.</li>
                        <li>Researched and analyzed client requirements to create effective software solutions.</li>
                        <li>Drafted and maintained software documentation.</li>
                        <li>Deployed .NET applications on IIS web server.</li>
                        <li>Designed data models based on application requirements using Entity Framework Core ORM toolset.</li>
                    </ul>
                </div>
            </li>
            <br/>
            <li>
                <div className="row">
                    <div className="col-8">
                        <p className="h6">Software Developer</p>
                    </div>
                    <div className="col-4">
                    <small className="fw-bold">WMP Crates, Oxford, AL / Apr 2019 - Sep 2022</small>
                    </div>
                </div>
                <div className="row">
                    <ul>
                        <li>Implemented software solutions to enhance operational efficiency.</li>
                        <li>Collaborated with other software developers on design, development and testing of programs.</li>
                        <li>Created reusable components for faster development of new features in future projects.</li>
                        <li>Developed .NET applications using ASP.NET, C# and SQL Server stored procedures.</li>
                    </ul>
                </div>
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <h4>Education</h4>
                <p>Jacksonville State University</p>
                <p>Jacksonville, AL, US</p>
                <p>Bachelor of Science (B.S.)</p>
                <p>Computer Information Systems(Jul 2019)</p>
            </div>
            <div className="col-6">
                <h4>Skills</h4>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>C#</li>
                            <li>ASP.NET MVC</li>
                            <li>SQL Server</li>
                            <li>Javascript/Typescript</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Communication</li>
                            <li>Documentation</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center fw-bold">
            References available upon request
        </div>
    </div>
    );
}