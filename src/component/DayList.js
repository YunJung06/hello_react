import { Link } from "react-router-dom";
import dummy from "../db/data.json"

const DayList =() => {
//return문 안은 자바스크립트 xml?
    return (
        <ul className="list_day">
            {
                dummy.days.map(
                    record => (
                        <li key={record.id}>
                            <Link to={`/day/${record.day}`}>Day {record.day}</Link>
                        </li>
                    )
                )
            }
         
        </ul>

    );
}

export default DayList;