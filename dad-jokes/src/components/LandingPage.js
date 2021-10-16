import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import '../App.css'
import image from '../image.png'

export default function LandingPage() {
    return (
        <div>
            <div className='cta'>
                <div className='left-cta'>
                    <h1>Welcome.</h1>
                    <p>Looking for a place to look at funny jokes? Looking for a place to store your own personal jokes? Looking for a great community that loves jokes just as much as you do? Dad Jokes is the place for you!</p>
                    <button>Get Started</button>
                </div>
                <div className='right-cta'>
                    <img src={image}/>
                </div>
            </div>

            <div className='examples'>
                <h1>Joke Examples.</h1>
                <p>Have you heard about the new pirate movie?</p>
                <p>It's rated AARRRRGH because of all the booty!</p>
                <br/>
                <br/>
                <p>I remember how embarrassed I was when I paid my electric bill.</p>
                <p>It was the darkest day of my life.</p>
                <br/>
                <br/>
                <p>Corny jokes are a-maize-ing.</p>
                <button>See More</button>
            </div>

            <div className='bottom-content'>
                <div className='left-bottom'>
                    <h1>Sign up.</h1>
                    <p>Dad Jokes gives you the option to sign up and become a member of our website! Signing up for Dad Jokes will allow you to save all of your jokes so that you can share them with everyone. It also allows you to comment on other jokes, and save their jokes as well.</p>
                    <button>Sign up</button>
                </div>
                <div className='right-bottom'>
                    <h1>About.</h1>
                    <p>Dad Jokes was created by two dudes trying to find a great way to save all of our funny jokes. We decided to just make a website, that way we could save and share all of our jokes with the world, and it would also allow anyone to come and share their jokes as well!</p>
                </div>
            </div>
        </div>
    )
}