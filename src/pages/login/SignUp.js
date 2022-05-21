import React from 'react';

const SignUp = () => {
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className='card w-96 shadow-xl'>
                <h2 className="text-center text-3xl font-bold text-primary">SignUp</h2>
                <form >
                    <div className='form-control w-full max-w-xs'>
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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;