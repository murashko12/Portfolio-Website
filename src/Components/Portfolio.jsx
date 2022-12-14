import React from 'react';
import './Portfolio.css';

import calculator from '../assets/calculator.png'
import weatherApp from '../assets/weatherApp.png'



const Portfolio = () => {
    
    const portfolioProjects = [
        {
            id: 1,
            src: calculator,
            link: "https://react-projects-flame.vercel.app/"
        },
        {
            id: 2,
            src: weatherApp,
            link: "https://weather-app-react-git-master-murashko12.vercel.app/"
        }
        
        
    ]

    return (

        <div name="portfolio" className='Portfolio'>
            <div className='PortfolioTitle'>
                
                
                <div>
                    <h1>Portfolio</h1>
                    <br />
                    <h3>Check out some my work right here</h3>
                </div>

            </div>

            <div className='PortfolioCont'>
                {
                    portfolioProjects.map(({id, src, link}) => (
                        <div key={id} className='PortfolioSection'>
                    <img src={src} alt={`${src}`} />
                    {/* <div></div> */}
                    <div className='PortfolioBtns'>
                        <a href={link} target="_blank">
                            <button>Demo</button>
                        </a>
                    </div>
                    
                    </div>
                    ))
                } 
            </div>

        </div>
    );
}

export default Portfolio;
