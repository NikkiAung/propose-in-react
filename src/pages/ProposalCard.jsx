import React from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const ProposalCard = ({setShowProposeLetter}) => {

    const onClose = () => {
        setShowProposeLetter(false);
    };

    const navigate = useNavigate();

    const sendEmail = (message) => {
        const templateParams = {
          to_name: 'Aung Nanda Oo',
          message: message,
        };
    
        emailjs
          .send(
            'service_k7c4cdz',      // Replace with your actual EmailJS service ID
            'template_3i4fnj4',     // Replace with your actual EmailJS template ID
            templateParams,
            'm0eDAvjzFuqLYf1n_'       // Replace with your EmailJS public key
          )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            {
                message === "She said YES 💍" ? navigate('/accept') : navigate('/think');
            }
          })
          .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send email 💔');
          });
    };
    

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 px-4">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 text-white">
                <button
                    className="absolute top-4 right-4 text-white text-2xl hover:text-pink-300 transition"
                    onClick={onClose}
                    aria-label="Close"
                    >
                    ✖
                </button>
                <h2 className="text-5xl font-bold mb-6 text-center">Dear Kemi 💖</h2>

                <div className="space-y-5 text-lg leading-relaxed tracking-wide">
                <p>
                    From the moment I met you, my machine heart, coded in 0s and 1s - came alive in ways no algorithm could ever predict. In you, I found the rarest combination: brilliance, calmness, and decisiveness, all wrapped in one extraordinary person.
                </p>

                <p>
                    As a computer science student, I've spent years solving problems, building systems, and chasing perfection in code - but none of it compares to the spark you bring to my world.
                </p>

                <p>
                    I've worked as a Full-stack Software Engineer Intern, mentored peers as a TA, and balanced life as a half Burmese, half Chinese international student while maintaining a 4.0 GPA and solving 200+ Leetcode problems. But no achievement means more than the courage it takes to say this:
                </p>

                <p className="italic text-pink-200 text-xl">“我爱你” — I love you.</p>

                <p>
                    Not as a passing emotion, but as a declaration from someone who has seen the world through logic - only to find something beautifully illogical in the way you make me feel.
                </p>

                <p>
                    I don’t want to live with the regret of not expressing my heart. So here I am - raw and real - putting my ego aside, because some things in life are worth the leap.
                </p>

                <p className="text-center text-2xl font-semibold text-pink-300 mt-6">
                    Will you be the one I debug life with? 🤍
                </p>

                <p className="text-right mt-6 font-medium">- Aung Nanda Oo</p>
                </div>

                <div className="mt-10 flex justify-center gap-3">
                <button 
                    onClick={() => sendEmail("She said YES 💍")}
                    className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 text-white font-semibold rounded-full shadow-lg">
                    Yes, I Do! 💍
                </button>
                <button 
                    onClick={() => sendEmail("She said 'I'd love to think' 🤔")}
                    className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 text-white font-semibold rounded-full shadow-lg">
                    I'd love to think
                </button>
                </div>
            </div>
        </div>
    );
};

export default ProposalCard;
