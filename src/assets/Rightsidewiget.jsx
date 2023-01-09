import React from 'react'
import BlogDemo from '../img/blog-demo.png'
import Search from '../assets/Search'

function Rightsidewiget() {
    return (
        <>
            <Search />

            <div className='right__side-block'>
                <div className='Latest-post-showcase'>
                    {/* latest post nav */}

                    <div className="Latest-post-bar">
                        <h1>Latest Trend About UI/UX</h1>
                    </div>
                    {/* Post Schema */}
                    <div className='post-added justify-content-start mt-3'>
                        <img src={BlogDemo} width="40%" alt="" />
                        <div className="d-flex flex-column flex-wrap post-added-title ">
                            <h1>Learn About UI/UX Trend 2023</h1>
                            <p>It is difficult to predict specific trends in UI/UX design for 2023.....</p>
                            <span>By: Author Name</span>
                        </div>
                    </div>
                    {/* Ads Block Schema */}
                    <div className="ad-block px-3 py-3">
                        {/* ---------- Add Google Ads Embed Code here ---------- */}
                    </div>

                    <div className="Mostpopular-post-bar">
                        <h1>Latest Trend About UI/UX</h1>
                    </div>
                    {/* Post Schema */}
                    <div className='post-added justify-content-start mt-3'>
                        <img src={BlogDemo} width="40%" alt="" />
                        <div className="d-flex flex-column flex-wrap post-added-title ">
                            <h1>Learn About UI/UX Trend 2023</h1>
                            <p>It is difficult to predict specific trends in UI/UX design for 2023.....</p>
                            <span>By: Author Name</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightsidewiget
