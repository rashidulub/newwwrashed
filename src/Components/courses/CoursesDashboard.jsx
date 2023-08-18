import React, { useEffect, useState } from 'react';

const CoursesDashboard = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('member.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.log(error))
    }, [])
    if (!courses) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {
                courses.map(course => <div key={course._id}>
                    <h1 className='text-7xl'>hello</h1>
                </div>)
            }
        </div>
    );
};

export default CoursesDashboard;