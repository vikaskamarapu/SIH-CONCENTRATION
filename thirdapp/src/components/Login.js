import React from 'react'
import {useForm} from 'react-hook-form'
function Login() {
    const {register,handleSubmit, formState:{errors}}=useForm()

    const onFormSubmit= (userdata)=>
    {
        console.log(userdata)
    }
  return (
      
    <div className='container'>
        <div className=" row m-5">
            <div className="col-sm-3"/>
            <div className="col-sm-6 ">
            <form onSubmit={handleSubmit(onFormSubmit)} className=" d-block mx-auto"> 
                <h3 >SIGN IN</h3>
                <div className="form-group m-3">
                    <label >Username</label>
                    <input type="text" className="form-control w-50 " placeholder="Enter email" {...register("username",{ required: true})} />
                    {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                </div>
                <div className="form-group m-3">
                    <label>Password</label>
                    <input type="password" className="form-control w-50 " placeholder="Enter password"  {...register("password",{ required: true})} />
                    {errors.password?.type === 'required' && <p className='text-danger'>* Password required</p>}
                </div>
                <div className="form-group m-3 ">
                    <div className="custom-control custom-checkbox  d-block mx-auto">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" {...register("rememberme:")}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block  ">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>

            </div>
            <div className="col-sm-3"/>
        </div>
           
    </div>
  )
}

export default Login