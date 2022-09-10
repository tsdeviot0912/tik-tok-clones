import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NotFound as NotFoundIcon } from '../Icons';
import './NotFound.scss';

function NotFound() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        gsap.set('svg', { visibility: 'visible' });
        gsap.to('#headStripe', {
            y: 0.5,
            rotation: 1,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            duration: 1,
        });
        gsap.to('#spaceman', {
            y: 0.5,
            rotation: 1,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            duration: 1,
        });
        gsap.to('#craterSmall', {
            x: -3,
            yoyo: true,
            repeat: -1,
            duration: 1,
            ease: 'sine.inOut',
        });
        gsap.to('#craterBig', {
            x: 3,
            yoyo: true,
            repeat: -1,
            duration: 1,
            ease: 'sine.inOut',
        });
        gsap.to('#planet', {
            rotation: -2,
            yoyo: true,
            repeat: -1,
            duration: 1,
            ease: 'sine.inOut',
            transformOrigin: '50% 50%',
        });

        gsap.to('#starsBig g', {
            rotation: 'random(-30,30)',
            transformOrigin: '50% 50%',
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
        });
        gsap.fromTo(
            '#starsSmall g',
            { scale: 0, transformOrigin: '50% 50%' },
            { scale: 1, transformOrigin: '50% 50%', yoyo: true, repeat: -1, stagger: 0.1 },
        );
        gsap.to('#circlesSmall circle', {
            y: -4,
            yoyo: true,
            duration: 1,
            ease: 'sine.inOut',
            repeat: -1,
        });
        gsap.to('#circlesBig circle', {
            y: -2,
            yoyo: true,
            duration: 1,
            ease: 'sine.inOut',
            repeat: -1,
        });

        gsap.set('#glassShine', { x: -68 });

        gsap.to('#glassShine', {
            x: 80,
            duration: 2,
            rotation: -30,
            ease: 'expo.inOut',
            transformOrigin: '50% 50%',
            repeat: -1,
            repeatDelay: 8,
            delay: 2,
        });
    }, []);

    return (
        <div className="not-found-wrapper">
            <div className="hamburger-menu">
                <button onClick={() => setIsOpen(!isOpen)} className="burger" data-state={isOpen ? 'open' : 'closed'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav data-state={isOpen ? 'open' : 'closed'}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Services</Link>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <NotFoundIcon />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h1>404</h1>
                            <h2>UH OH ! Maybe you misspelled the link.</h2>
                            <p>
                                The page you are looking for does not exist. How you got here is a mystery. But you can
                                click the button below to go back to the homepage.
                            </p>
                            <Link to="/" className="btn green">
                                HOME
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NotFound;
