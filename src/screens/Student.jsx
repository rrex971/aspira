import { Link } from "react-router";

const Student = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className><Link to="/Student-attendance">Attendance</Link></li>
                    <li><Link to="/grades">Grades</Link></li>
                    <li><Link to="/timetable">Timetable</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Student;
