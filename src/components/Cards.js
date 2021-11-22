import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div>
        <div className='cards'>
            <h1>What are tags?</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <img class="center" src='/images/tag1.gif' type="images/gif" alt="" style={{width: "15%", 'margin-top': "10px", 'margin-bottom': "50px"}} />
                    <p>Version control systems (VCS) provide the functionality to tag specific points in a repository’s history as milestones (eg., v1.0.0, v2.0.0 and so on). Tags allows software developers to determine which version of the code they can reliably use as dependencies in their projects.</p>
                </div>
            </div>
        </div>
        <div className='cards2'>
            <h1 class="h1-white">Why make tags immutable?</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <img class="center" src='/images/lock3.gif' type="images/gif" alt="" style={{width: "15%", 'margin-top': "10px", 'margin-bottom': "50px"}} />
                    <p class="p-white">Many developers and automation systems rely on tags to build and install dependencies. So changing the commits that these tags point to can cause build failures and add software vulnerabilities in dependent projects.</p>
                </div>
            </div>
        </div>
        <div className='cards'>
            <h1>How does our solution help?</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <img class="center" src='/images/shield2.gif' type="images/gif" alt="" />
                    <p>Our solution uses Ethereum Smart Contracts to store tags on the blockchain and guarantee their immutability. This provides assurance to users that their products and automation systems will continue functioning with the same level of reliability.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cards;