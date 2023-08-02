"use client";

import { contactByEmail } from "@/lib/contact";
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitted } } = useForm();


    async function onSubmit(data) {
        await contactByEmail(data);
    }

    return isSubmitted ? 
    (<div className="container d-flex justify-content-center">
    <p>Thank you for reaching out! If you provided contact information I will reach out as soon as I can.</p>
    </div>
    ) : 
    (<form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="row justify-content-center">
            <div className="col-xxl-6 col-sm-8">
                <div className="mb-3">
                    <label htmlFor="from" className="form-label">Email address</label>
                    <input  id="from"
                            name="from" 
                            className="form-control"
                            {...register("from", {autoComplete: "email", type: "email"})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input  type="text"
                            id="subject"
                            name="subject" 
                            className="form-control"
                            {...register("subject", {required: true, type: "text"})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea   id="message" 
                                name="message" 
                                className="form-control" 
                                rows={10}
                                {...register("message", {required: true})}/>
                </div>
                <button name="submitButton" className="btn btn-primary bg-light text-dark border-dark w-100" type="submit">Send</button>
            </div>
        </div>
    </form>
    );
}