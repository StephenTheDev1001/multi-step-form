// needs step and desc as props

const Step = (step : Number, desc : String) => {
    return (
        <div className="step">
            <div className="step-number">{step.toString()}</div>
            <div className="step-desc">{desc}</div>
        </div>
    )
}



