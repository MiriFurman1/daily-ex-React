import QuizTitle from "./QuizTitle"
import Q1Title from "./Q1Title"
import Q1Answer from "./Q1Answer"
import Q2Title from "./Q2Title"
import Q2Answer from "./Q2Answer"

function Quiz(){
    return(
        <div className="">
            <QuizTitle></QuizTitle>
            <Q1Title></Q1Title>
            <Q1Answer/>
            <Q2Title/>
            <Q2Answer/>
        </div>
    )
}

export default Quiz