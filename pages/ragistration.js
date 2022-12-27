import React from 'react'

function ragistration() {
    return (
        
      <div>
        <div className="section-bg ">
            <div className="component-title text-center">
                <h1>Registration</h1>
            </div>
            <form action="/" className="pb-5 pt-5 ragistration-form">
                <div className="row">
                    <div className="col-md-12 form-group mb-4">
                        <label for="name" className=" form-label col-12">Name</label>
                        <input type="text" className="form-control-lg col-12 " name="name"/>
                    </div>
                    <div className="col-md-12 form-group mb-4">
                        <label for="email" className=" form-label col-12" >Email</label>
                        <input type="text" className="form-control-lg col-12 " name="email"/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12 form-group mb-4">
                        <label for="mobile"  className=" form-label col-12" >Mobile Numbeer</label>
                        <input type="text" className="form-control-lg col-12 " name="mobile"/>
                    </div>
                    <div className="col-md-12 form-group mb-4">
                        <label for="password" className=" form-label col-12">Password</label>
                        <input type="text" className="form-control-lg col-12 " name="password"/>
                    </div>
                </div>
           
                <br/>
                <input className="btn btn-primary btn-lg" type="submit" />

            </form>
      </div>

      </div>
    )
  }
  export default ragistration
