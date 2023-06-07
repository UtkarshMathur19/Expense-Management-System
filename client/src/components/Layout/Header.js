import { message } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import { UserOutlined } from "@ant-design/icons";


const Header = () => {

    const [loginUser, setLoginUser] = useState()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setLoginUser(user)
        }
    }, [])

    const navigate = useNavigate()
    const logoutHandler = () => {
        localStorage.removeItem('user')
        message.success('Logout Successful')
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">Expense Management</a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {" "}
                                <h6 className="nav-link ">
                                    <UserOutlined /> {loginUser && loginUser.name}
                                </h6>{" "}
                            </li>

                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={logoutHandler} >Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Header