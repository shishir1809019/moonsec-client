import React from 'react';

const Testimonial = ({comment}) => {
    return (
        <div className = "col-md-4 pb-5">
            <div class="card mb-5" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{comment.name}</h5>
                    <p class=" card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;