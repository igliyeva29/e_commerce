import { Link } from 'react-router-dom'
import type { ProductCardProps } from '../../../types/Product';
import { BiRightArrow } from 'react-icons/bi';
import ProductCard from '../../../components/ProductCard';
import { useTranslation } from 'react-i18next';
import { arrow_right } from '../../../assets/images';

type CategoryMainProps = {
    data: {
        id: number;
        name: string;
        products: ProductCardProps[]
    }
}

function CategoryMain({ data }: CategoryMainProps) {
    const { t } = useTranslation()

    return (
        <div className='container mx-auto px-20 p-5'>
            <div className="flex justify-between items-center py-5 pb-3">
                <div className='text-2xl text-custom-grayTitle font-bold pb-5'>{data.name}</div>
                <Link className='w-fit' to={'/category/' + data.id}>
                    <div className='flex items-center'>
                        <div className='text-sm text-custom-grayText'>{data.name}</div>
                        <img className='w-5 ml-5' src={arrow_right} alt="" />
                    </div>
                </Link>
            </div>

            <div className='grid grid-cols-4 gap-10'>
                {
                    data.products.map((product, index) => (
                        <ProductCard key={'main-category-product-' + index} data={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMain