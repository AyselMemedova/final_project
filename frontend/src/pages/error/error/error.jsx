
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "./error.css"
import MainContext from '../../../context/context'
import { Link } from "react-router-dom";

const Error = () => {
    const { data, setdata } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Error</title>
            </Helmet>

            <div className='error'>
                
                <div className='notfound'>
                    <div className="cic">
                        <div className="error-box">
                            <div className="error-box-inner">
                                <h3>Oops!</h3>
                                <h2>404</h2>
                                <h4>Page Not Found</h4>
                            </div>
                        </div>
                    </div>

                    <div className="rotate-square"></div> 

                    <p className='error_p'>It seems you've ventured too far.</p>
                    <div className="but">
                        <Link to="/">Back to Home</Link>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Error
