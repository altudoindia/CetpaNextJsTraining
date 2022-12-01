import React from 'react';
import Image from '../../common/image'

export const getServerSideProps = async (context) => {
    console.log('context', context);   
    const id = context.params.id;
    console.log('id' - id);
    //api call
    const response = await fetch('https://fakestoreapi.com/products/'+id);
    // console.log(response);
    const data = await response.json(); //to convert stringified json to parsed json
    // console.log(data);
    return {
        props: {productData: data}
    }
}

const ProductId = ({productData}) => {
    return (
        <div>
                <h2>This is product page - {productData.title}</h2>
                <Image src={productData.image} alt="Vercel Logo"  />  
            </div>
    )
}

export default ProductId
