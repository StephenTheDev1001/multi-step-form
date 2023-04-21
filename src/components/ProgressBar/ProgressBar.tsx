import Step from './Step'

interface ProgProps {
  count: number;
}

const ProgressBar = (props: ProgProps) => {
  return (
    <div className="progress-bar">
      <ul>
        <Step step={1} desc="YOUR INFO" count={props.count} />
        <Step step={2} desc="SELECT A PLAN" count={props.count} />
        <Step step={3} desc="ADD-ONS" count={props.count} />
        <Step step={4} desc="SUMMARY" count={props.count} />
      </ul>
    </div>
  );
};

export default ProgressBar;