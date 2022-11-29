import React from 'react'
import Image from '../common/image'
import Container from '../common/PageStructure/Container'
import Link from 'next/link';
//ssr - page visit
export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json(); //to convert stringified json to parsed json
    return {
        props: {productData: data}
    }
}

const ProductCard = (props) => {
    console.log('props', props);
    const {productData} = props;
    return (
        <div>
            <div className="cardList">
            <Container>
                   
            <h2>Product List</h2>

            {productData.map(item => (
                 <div className="col-md-3 ">
                    <div className="porduct-card">
                    <Link href={`/product-details/${item.id}`} className="card-image"><Image src={item.image} alt="Vercel Logo"  />    </Link>
                    <div className="card-title">{item.title} </div>
                    </div>
                </div> 
            ))}
       
             </Container>
             </div>
        </div>
       
    )
}

export default ProductCard
