interface StepProps {
    step: number;
    desc: string;
    count: number;
}


const Step = (props: StepProps) => {
    return (
        <div className="step">
            <li>
                <h2>{props.step.toString()}</h2>
                <p>STEP {props.step.toString()}</p>
                <p>{props.desc}</p>
            </li>
        </div>
    )
}

export default Step;