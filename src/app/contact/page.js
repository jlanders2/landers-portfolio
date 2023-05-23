"use client";

import { emailMe } from "@/lib/email";
import { useState } from "react";

export default function Contact() {
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onChangeFrom = ((e) => {
        setFrom(e.target.value);
    });

    const onChangeSubject = ((e) => {
        setSubject(e.target.value);
    });
    
    const onChangeMessage = ((e) => {
        setMessage(e.target.value);
    });

    const onSubmitContactForm = ((e) => {
        e.preventDefault();
        emailMe(from, subject, message)
    });

    return <div className="container">
        <form onSubmit={onSubmitContactForm}>
            <div className="mb-3">
                <label htmlFor="fromAddr" className="form-label">Email address</label>
                <input type="email" name="fromAddr" className="form-control" value={from.value} onChange={onChangeFrom} />
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" name="subject" className="form-control" value={subject.value} onChange={onChangeSubject} />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" className="form-control" rows={10} value={message.value} onChange={onChangeMessage} />
            </div>
            <button name="submitButton" className="btn btn-primary bg-light text-dark border-dark w-100" type="submit">Send</button>
        </form>
    </div>;
}