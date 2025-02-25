import React from 'react';

const Info = () => {
    return (
        <>
        <div className='lg:flex-row flex-col flex lg:gap-11 px-9 '>
            <img 
                className='h-96 rounded-2xl w-96 object-cover' 
                src="/assets/WhatsApp Image 2025-02-17 at 16.07.03 (1).jpeg" 
                alt="Healthcare Awareness" 
            />

            <div className='mt-4 lg:mt-0'>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                    Importance of Healthcare
                </h1>
                <p className='text-gray-600 text-lg'>
                    Healthcare plays a vital role in improving the quality of life by ensuring 
                    access to medical services, preventive care, and overall well-being. A 
                    strong healthcare system not only treats diseases but also emphasizes 
                    prevention, mental health, and community health awareness.
                </p>
                <p className='text-gray-600 text-lg mt-3'>
                    Regular check-ups, a healthy lifestyle, and access to medical facilities 
                    contribute to longer, healthier lives. Investing in healthcare infrastructure 
                    and spreading awareness about common illnesses can significantly reduce 
                    health risks and improve the well-being of individuals and communities.
                </p>
            </div>
        </div>
        <div className='lg:flex-row-reverse mt-16 flex-col flex lg:gap-11 px-9 '>
            <img 
                className='h-96 rounded-2xl w-96 object-cover' 
                src="/assets/WhatsApp Image 2025-02-17 at 16.07.03 (1).jpeg" 
                alt="Healthcare Awareness" 
            />

            <div className='mt-4 lg:mt-0'>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                    Importance of Healthcare
                </h1>
                <p className='text-gray-600 text-lg'>
                    Healthcare plays a vital role in improving the quality of life by ensuring 
                    access to medical services, preventive care, and overall well-being. A 
                    strong healthcare system not only treats diseases but also emphasizes 
                    prevention, mental health, and community health awareness.
                </p>
                <p className='text-gray-600 text-lg mt-3'>
                    Regular check-ups, a healthy lifestyle, and access to medical facilities 
                    contribute to longer, healthier lives. Investing in healthcare infrastructure 
                    and spreading awareness about common illnesses can significantly reduce 
                    health risks and improve the well-being of individuals and communities.
                </p>
            </div>
        </div>
        </>
    );
}

export default Info;
