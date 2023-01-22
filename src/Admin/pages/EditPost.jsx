import React from 'react'
import Button from '../Admin assets/Button'


function EditPost() {
    return (
        <div className='edit__post'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                            <div className='mb-4'>
                                <h2>Post Title</h2>
                                <input placeholder='Ex. Creating a User-Friendly E-Commerce ' className='edit__inputs' type="text" name="post_title" id="post_title" />

                            </div>
                            <div className='mb-4 '>
                                <h2>Write Your Post</h2>
                                <textarea className='edit__inputs' name="text" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="container p-0">
                                <div className="row">
                                    <div className='col-md-6'>
                                        <div className='mb-4'>
                                            <h2>Choose Category</h2>
                                            <input placeholder='Here you can see a selection' className='edit__inputs' type="text" name="post_title" id="post_title" />

                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='mb-4'>
                                            <h2>Add Tags</h2>
                                            <input placeholder='Here you can see a selection' className='edit__inputs' type="text" name="post_title" id="post_title" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-end'>
                                <Button
                                    btnText="Add New Post"
                                    className="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default EditPost

