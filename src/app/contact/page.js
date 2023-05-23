"use client";

import { contactByEmail } from "@/lib/contact";
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    async function onSubmit(data) {
        await contactByEmail(data);
    }

    return <form className="container" onSubmit={handleSubmit(onSubmit)}>
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
    </form>;
}