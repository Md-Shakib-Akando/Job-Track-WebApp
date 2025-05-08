import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const FAQ = () => {
    useEffect(() => {
        document.title = 'JobTrack | FAQ';
    }, [])
    const textRef = useRef();
    const faqRef = useRef();
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(textRef.current, {
          y: -100,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        });
        gsap.from(faqRef.current, {
          scaleY: 2,
          opacity: 0,
          duration: 1,
          delay:0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 80%',
          },
        });
  
       
        
      }, );
  
      return () => ctx.revert();
    }, []);
    return (
        
            <section className="py-16 md:py-24">
                <div className="container flex flex-col  justify-center p-4 mx-auto md:p-8">

                    <h2 ref={textRef} className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div ref={faqRef} className="flex flex-col divide-y gap-5 sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What are job tracking web app?</summary>
                            <div  className="px-4 pb-4">
                                <p>A job tracking web app is a tool that helps users manage and monitor job applications—either for job seekers to track where they’ve applied or for recruiters to manage candidates through the hiring process.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> Who can use this app?</summary>
                            <div className="px-4 pb-4">
                                <p>This app is designed for both job seekers and recruiters. Job seekers can manage their job search efficiently, while recruiters can monitor applicants and hiring stages.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> How many job applications can I track?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>You can track as many job applications as you want. There’s no limit on entries, and you can add custom notes, deadlines, and updates to each one.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> How many job applications can I track?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>You can track as many job applications as you want. There’s no limit on entries, and you can add custom notes, deadlines, and updates to each one.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> Is my data safe and private?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Yes, we prioritize your privacy. All your data is stored securely and encrypted, and we never share it with third parties without your consent.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> Is the app free to use?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>We offer a free basic version with core features. For advanced tools like analytics, integrations, and priority support, premium plans are available.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            






    );
};

export default FAQ;