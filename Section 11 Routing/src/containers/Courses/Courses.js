import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }
     
    courseSelectHandler = (id, title) => {
       this.props.history.push('/courses/' + `${id}/` + `${title}`)
  
     }


    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {  
                        this.state.courses.map( course => {
                        console.log(typeof (course.id));
                            return ( <article key={course.id}className="Course" onClick={() => this.courseSelectHandler(course.id,course.title)}><Link to={`/courses/${course.id}/${course.title}`}>{course.title}</Link></article>
                            )
                         ;
                        } )
                    }
                </section>
               <Route path="/courses/:id/:title"  component={Course}/> 
                
            </div>
        );
    }
}

export default Courses;