import './About.css'; 

function About() {
  return (
    <div className="about-container">
        <section className="about-intro">
        <p>
            To secure a position that allows me to apply my education and develop my practical skills.I am eager to learn and 
            contribute to a dynamic team while honing my abilities.I aim to 
            work diligently, grow within the organization, and make a meaningful impact.
        </p>
        <p>
            Highly motivated Computer Science and Engineering graduate (Pursuing) with a strong foundation in java,
            Eager to apply analytical and problem-solving skills to develop innovative solutions.
        </p>
        </section>


        <section className="about-skills">
            <h2>Skills</h2>
            <div className="about-table-wrapper">
                <table>
                    <tbody>
                    <tr>
                        <th>Languages</th>
                        <td>
                        <span className="skill-span">Java</span>
                        <span className="skill-span">SQL</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Technologies and Tools</th>
                        <td>
                        <span className="skill-span">Spring</span>
                        <span className="skill-span">React.js</span>
                        <span className="skill-span">HTML5</span>
                        <span className="skill-span">CSS</span>
                        <span className="skill-span">JavaScript</span>
                        </td>
                    </tr>

                    <tr>
                        <th>Databases</th>
                        <td>
                        <span className="skill-span">MySQL</span>
                        <span className="skill-span">MongoDB</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Development Tools/IDEs</th>
                        <td>
                        <span className="skill-span">Git</span>
                        <span className="skill-span">GitHub</span>
                        <span className="skill-span">VS Code</span>
                        <span className="skill-span">Eclipse</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section className="about-education">
            <h2>Education Details</h2>
            <div className="about-table-wrapper">
                <table>
                   <thead>
                        <tr>
                        <th>Qualification</th>
                        <th>Institution/College</th>
                        <th>Board/University</th>
                        <th>Year Of Passing</th>
                        <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>B.Tech</td>
                        <td>Sri Vasavi Engineering College</td>
                        <td>Jawaharlal Nehru University Kakinada</td>
                        <td>2026 (Pursuing)</td>
                        <td>8.66 CGPA</td>
                        </tr>
                        <tr>
                        <td>Intermediate</td>
                        <td>Elite Junior College</td>
                        <td>Board Of Intermediate Education</td>
                        <td>2022</td>
                        <td>91.9%</td>
                        </tr>
                        <tr>
                        <td>10th Standard</td>
                        <td>Elite Public School</td>
                        <td>Board Of Secondary Education</td>
                        <td>2020</td>
                        <td>96%</td>
                        </tr>
                    </tbody>
             </table>
            </div>
        </section>
    </div>
  );
}

export default About;
