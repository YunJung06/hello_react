import dummy from "../db/data.json"
import { Route, Routes, useParams } from "react-router-dom";
import DayList from "./DayList";

export default function Day(){
    //const day = 1;
    // const hook = useParams();
    // let day = hook.param_day;

    const day = useParams().param_day;
    console.log(day);
    const words = dummy.words.filter(record => (Number(record.day) === Number(day)));
    
    

    //console.log("param_day :"+param_day);
    return (
        <>
            <Routes>
                <Route exact path="/" element={ <DayList/> }/>
            </Routes>
            <h2> Day {day}</h2>
            <table>
                <tbody>
                    {
                        words.map(
                            record => (
                                 <tr key={record.id}>
                                    <td>{record.eng}</td>
                                    <td>{record.kor}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </>

    );

}