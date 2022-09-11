import { useEffect, useState } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            },
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        // return () => {
        //     // eslint-disable-next-line react-hooks/exhaustive-deps
        //     observer.unobserve();
        // };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}

export default useOnScreen;
