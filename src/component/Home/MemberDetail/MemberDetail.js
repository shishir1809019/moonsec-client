import React from 'react';

const MemberDetail = ({member}) => {
    return (
        <div  className ="col-md-4 ">
            <div className = "main mb-5">
                <img className = "img-fluid" src={member.img} alt="" />
                <h3 className = "pt-2">{member.name}</h3>
                <p className = "text-muted pb-5">{member.rank}</p>
            </div>
        </div>
    );
};

export default MemberDetail;