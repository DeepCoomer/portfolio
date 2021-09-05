import React from 'react'

export const Contact = () => {
    return (
        <div className="container-md contact" id="contact">
            <h2>Contact Me</h2>
            <div className="form-group">
                <form action="" method="post" className="row g-3 m-5" >
                    <div>
                        <label htmlFor="Name" className="form-label">Name:</label>
                        <input type="text" name="" id="" className="form-control input-group-lg" />
                    </div><br />
                    <div>
                        <label htmlFor="Email" className="form-label">Email:</label>
                        <input type="email" name="email" id="" className="form-control input-group-lg" />
                    </div><br />
                    <div>
                        <label htmlFor="exampleFormControlTextarea2" className="form-label">Message</label>
                        <textarea className="form-control rounded-0" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor:"blue"}}>Submit</button>
                </form>
            </div>
        </div>
    )
}
