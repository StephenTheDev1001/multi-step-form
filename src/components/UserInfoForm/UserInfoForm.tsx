import { useState } from 'react';

interface UserInfoFormProps {
    setUserInfo: any;
    userInfo: Object;
}

const UserInfoForm = (props: UserInfoFormProps) => {
    const [personal, setPersonal] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChange = (e: any) => {
        setPersonal({
            ...personal,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        props.setUserInfo({ ...props.userInfo, ...personal, count: 2 })
    }
    return (
        <section>
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" id="phone" onChange={handleChange} />
                    </div>
                    <button onClick={onSubmit}>Next</button>
                </form>
            </div>
        </section>
    )
}

export default UserInfoForm;