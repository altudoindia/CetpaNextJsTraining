import React from "react";
export const getStaticProps = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = response.json();
    return(
        props:{
             product:data
        }
    )
  
}
const Courses = ({props}) => {
    console.log(props.data.title)
    return(
        <div>
            <h2>This is courses file.</h2>
        </div>
    )
}

export default Courses;