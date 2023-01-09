import React from 'react'
import Giflogo from '../img/lf30_editor_p6rpf9nb.gif'
import LeftsideBlog from '../assets/LeftsideBlog'
import Rightsidewiget from '../assets/Rightsidewiget'
import BlogDemo from '../img/blog-demo.png'
import Leftsidebloglist from '../assets/Leftsidebloglist'
import Readingblog from './Readingblog'


function Blog() {

    return (

        <>
            <div className="blog-margin-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3 className="sm-title-1">BLOG</h3>
                            <h2 className='lg-head-bg-title-1 lg-head-title-1'>Checkout Some <span>Industrial Trend!</span></h2>
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex justify-content-end'>
                                <img src={Giflogo} width="300px" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row align-items-start">
                    {/* left Side Area */}
                    <div className="col-md-8">
                        <LeftsideBlog />
                        <Leftsidebloglist />
                        {/* <Readingblog /> */}
                    </div>
                    {/*End left Side Area */}
                    {/* -------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* Right Side Area */}
                    <div className="col-md-4">
                        <Rightsidewiget />
                    </div>
                    {/* End Right Side Area */}
                </div>
            </div>





        </>


    )
}

export default Blog
