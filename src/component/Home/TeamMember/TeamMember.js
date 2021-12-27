import React from 'react';
import img1 from '../../../img/Adam Gilcrist.jpg'
import img2 from '../../../img/Kristen Crew.jpg'
import img3 from '../../../img/Robert Doe.jpg'
import MemberDetail from '../MemberDetail/MemberDetail';

const teamMembers = [
    {
        name: 'Adam Gilcrist',
        rank: 'Engineer',
        img: img1
    },
    {
        name: 'Kristen Crew',
        rank: 'Founder',
        img: img2
    },
    {
        name: 'Robert Doe',
        rank: 'Chairman',
        img: img3
    },
]

const TeamMember = () => {
    return (
        <section >
            <div className ="pt-5">
                <h2 className ="text-center">Our Team Member</h2>
            </div>
            <div  className = "pt-5 d-flex justify-content-center">
                <div className ="row w-75 ">
                    {
                        teamMembers.map(member => <MemberDetail member ={member} ></MemberDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamMember;