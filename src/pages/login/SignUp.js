import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className='card w-96 shadow-xl '>
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold text-primary">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name filde */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is Reruired'
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.name?.type === "required" && <span className="label-text-alt text-red-600">
                                    {errors.name?.message}</span>}

                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Reruired'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Pleash valid Email'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}

                                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                            </label>
                        </div>
                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Reruired'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charactors or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.password?.type === "required" && <span className="label-text-alt text-red-600">{errors?.passwoed?.message}</span>}
                                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors?.password?.message}</span>}

                            </label>
                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p><small>Alrady have an account?<Link className='text-primary' to={'/login'}> please Login</Link></small></p>
                    <div className="divider"><small>OR</small></div>
                    <button className='btn btn-outline btn-success'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;