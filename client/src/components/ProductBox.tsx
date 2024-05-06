import { Heart } from '../Imports/ImportImages'

interface ProductBoxProps {
    data: {
        id?:number
        img?: string,
        title?: string,
        salePrice: any,
        subTitle?: string,
        price?: string,
    },
    alt?: string
}



function ProductBox(props: ProductBoxProps) {
    // const data = props.data;
    const {
        img,
        // alt,
        title,
        salePrice,
        subTitle,
        price
    } = props.data;

    return (
        <div className='slide-item'>
            <div className='picture'>
                <img src={img} width={"100%"} alt={props.alt} />
                <div className='hoveritem'>
                    <div className='heart'>
                        <img src={Heart} width={'14px'} alt='heart' />
                    </div>
                    <span>buy now</span>
                </div>
            </div>
            <div className='meta'>
                <div className='flexarea'>
                    <h3>{title}</h3>
                    {salePrice === null ? null : <span>sale</span>}
                </div>
                <div className='flexarea'>
                    <h4>{subTitle}</h4>
                    <span className='price'>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductBox