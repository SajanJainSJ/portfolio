import React from "react";
import PROJECTS from "../data/projects";

//Stateless Functional Component
const Project = (props) => {
    const { title, image, description, link } = props.project;
    return (
        <div style={{ display: 'inline-block', width: 275, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 100, height: 100 }} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)

//Component Based Syntax
// class Project extends Component {
//     render() {
//         const { title, image, description, link } = this.props.project;
//         return (
//             <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
//                 <h3>{title}</h3>
//                 <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
//                 <p>{description}</p>
//                 <a href={link}>{link}</a>
//             </div>
//         )
//     }
// }

//Component Based Syntax
// class Projects extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Highlighted Projects</h2>
//                 <div>
//                     {
//                         PROJECTS.map(PROJECT => {
//                             return (
//                                 <Project key={PROJECT.id} project={PROJECT} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

export default Projects;