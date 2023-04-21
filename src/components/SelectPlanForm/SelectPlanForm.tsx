import { useState } from 'react';

interface SelectPlanFormProps {
    setUserInfo: any;
    userInfo: Object;
}

const SelectPlanForm = (props: SelectPlanFormProps) => {
    const [plan, setPlan] = useState({

    })
    return (
        <section>

            <div className="form-control">
                <label className="label cursor-pointer flex justify-center">
                    <span className="label-text">Monthly</span>
                    <input type="checkbox" className="toggle" />
                    <span className="label-text">Yearly</span>
                </label>
            </div>
        </section>
    )
}

export default SelectPlanForm