

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      {/* list of numbers 1 - 4 */}
        <ul>
            
            <li>
                <h2>2</h2>
                <p>STEP 2</p>
                <p>SELECT PLAN</p>
            </li>
            <li>
                <h2>3</h2>
                <p>STEP 4</p>
                <p>ADD-ONS</p>
            </li>
            <li>
                <h2>4</h2>
                <p>STEP 4</p>
                <p>SUMMARY</p>
            </li>
        </ul>
    </div>
  );
};

export default ProgressBar;