'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactLootie from '@/app/assets/contact.json'; // Assuming correct path
import Lottie from 'lottie-react';
import SectionHeader from './SectionHeader';

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                'service_dvg9n5h',
                'template_vbgn9nf',
                form.current,
                'UtZXr81J3uaZpBkdY'
            )
            .then(() => {
                setIsSent(true);
                form.current?.reset();
                toast.success('🎉 Message sent successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'dark',
                });
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                toast.error('❌ Failed to send message. Please try again.', {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'dark',
                });
            });
    };

    return (
        <section
        ref={contactRef}
            id="contact"
            className="min-h-screen flex flex-col  items-center justify-center py-24 px-[7vw] md:px-[7vw] lg:px-[15vw]"
        >
            <ToastContainer />


            <SectionHeader
                title="GET IN TOUCH"
                subtitle=" Have a question or want to work together? Drop me a message and I’ll get back to you soon!"
            />
            <div className="w-full flex  md:flex-row flex-col-reverse lg:flex-row items-center justify-between gap-10">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 bg-[#141126] p-8 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white text-center mb-6">
                        Contact Me <span className="ml-1">📬</span>
                    </h3>

                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                            aria-label="Email"
                            autoComplete="email"
                            className="w-full p-4 rounded-md bg-[#1b172f] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        />
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            aria-label="Name"
                            autoComplete="name"
                            className="w-full p-4 rounded-md bg-[#1b172f] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            aria-label="Subject"
                            className="w-full p-4 rounded-md bg-[#1b172f] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        />
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            rows={5}
                            required
                            aria-label="Message"
                            className="w-full p-4 rounded-md bg-[#1b172f] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                        />
                        <button
                            type="submit"
                            disabled={isSent}
                            className="w-full py-3 text-white font-semibold rounded-md 
                            bg-gradient-to-r from-purple-600 to-[#4c0db9] hover:opacity-90 transition disabled:opacity-50"
                        >
                            {isSent ? 'Message Sent ✅' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* Lottie Animation Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Lottie animationData={contactLootie} className="w-full max-w-md" loop={true} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
