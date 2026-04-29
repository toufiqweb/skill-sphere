import React from 'react';

const PopularCourses = async () => {

    const res = await (fetch("https://skill-sphere-ecru-ten.vercel.app/data.json"))
    const data = await res.json()
    console.log(data);
    

    return (
        <div>
            
        </div>
    );
};

export default PopularCourses;