import React from 'react';
import '../App.css';
import { ButtonCustom } from './ButtonCustom'
import '../styles/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/test1.mp4' autoPlay loop muted />
            <h1>Stock BOT</h1>
            <p>Automatize your stock order...</p>
            <div className='hero-btns'>
                <ButtonCustom
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
        </ButtonCustom>
                <ButtonCustom
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    CHANGE ME OR DELETE ME!!
                </ButtonCustom>
            </div>
        </div>
    );
}

export default HeroSection;