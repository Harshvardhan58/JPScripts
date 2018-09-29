import '../static/css/main.css';
import React, {Component} from 'react';
import Head from 'next/head';
export default class Index extends Component{
    componentDidMount(){
        console.log('me working');
    }
    render(){
        return(
            <div>
                <Head>
                    <title>JPScripts</title>
                    <meta name="description" content="Cool JavaScript and Python Scripts" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro" rel="stylesheet"></link>
                
                <p className="line-1 anim-typewriter">
                    We Are Coming Soon &#9996;
                </p>
            <style jsx>
            {`
                .line-1{
                    position: relative; 
                    width: 24em;
                    margin: 0 auto;
                    padding: 0em;
                    border-right: 2px solid rgba(255,255,255,.75);
                    white-space: nowrap;
                    overflow: hidden;
                    font-size: 180%;
                    transform: translateY(-50%); 
                    color:#fff;   
                }
                
                /* Animation */
                .anim-typewriter{
                    animation: typewriter 4s steps(44) infinite normal,
                             blinkTextCursor 500ms steps(44) infinite normal;
                    animation-direction: alternate; 
                }
                @keyframes typewriter{
                  from{width: 0;}
                  to{width: 12.5em;}
                }
                @keyframes blinkTextCursor{
                  from{border-right-color: rgba(255,255,255,.75);}
                  to{border-right-color: transparent;}
                }
        
                `
            }
            </style>
            </div>
            
        )
    }
}
