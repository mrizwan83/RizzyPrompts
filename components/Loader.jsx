import React from 'react';
import Image from 'next/image';

const Loader = () => {
    return (
        <div className="flex items-center justify-center p-5">
            <Image
                src="/assets/icons/loader.svg"
                alt="Loader"
                width={50}
                height={50}
                className="object-contain"
            />
        </div>
    );
};

export default Loader;
