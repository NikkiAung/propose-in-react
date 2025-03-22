import React, { useEffect, useState } from 'react';
import LoveButton from '../components/LoveButton';
import ProposalCard from './ProposalCard';

const ProposalPage = () => {

    const [showProposeLetter, setShowProposeLetter] = useState(false);
    console.log(showProposeLetter)
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tenor.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="bg-[#FDF2F8] min-h-screen flex flex-col items-center">
            <h1 className="font-bold text-7xl mb-8 pt-5 romantic-text">
                To My Dear Kemi 🤍
            </h1>
            <div className="">
                <div className="h-[500px] w-[500px]">
                <div
                    className="tenor-gif-embed"
                    data-postid="15806543586595927716"
                    data-share-method="host"
                    data-aspect-ratio="0.799197"
                    data-width="100%"
                >
                    <a href="https://tenor.com/view/valentine%27s-day-valentines-gabre-gabre-valentine-gif-15806543586595927716">
                    Valentine'S Day Valentines GIF
                    </a>
                    from
                    <a href="https://tenor.com/search/valentine%27s+day-gifs">Valentine'S Day GIFs</a>
                </div>
                </div>
            </div>
            <div className='mt-40' onClick={()=> setShowProposeLetter(true)}>
                <LoveButton/>
            </div>
            {
                showProposeLetter && <ProposalCard setShowProposeLetter={setShowProposeLetter}/>
            }
    </div>
  );
};

export default ProposalPage;
