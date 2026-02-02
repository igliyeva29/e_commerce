import { useState } from 'react'
import type { ProductCardProps } from '../types/Product'
import { IoMdHeart, IoMdHeartEmpty, IoMdStar, IoMdStarOutline } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

function ProductCard({ data }: { data: ProductCardProps }) {
    const [like, setLike] = useState(false)
    const [card, setToCard] = useState(false)
    const { t } = useTranslation()

    const maxStars = 5;

    return (
        <div className={'bg-white rounded p-3 flex flex-col h-full justify-between shadow'}>
            <div className='h-full flex flex-col justify-between'>
                <div className="relative">
                    <div className='relative'>
                        <img className='w-full h-full' src={data.image} alt="" />
                        {
                            data.discount > 0 &&
                            <div className='absolute bg-custom-orange rounded text-white text-sm font-semibold py-1 px-2 bottom-2 left-1'>
                                -{data.discount}%
                            </div>
                        }
                    </div>
                    <button onClick={() => setLike(!like)} className='bg-gray-100/50 absolute top-0 right-0 h-8 w-8 rounded'>
                        {like ? <IoMdHeart size={24} className='text-red-500 mx-1' /> : <IoMdHeartEmpty size={24} className='text-gray-400 mx-1' />}
                    </button>
                    {
                        data.discount ?
                            <div className='flex justify-between'>
                                <div className="flex flex-col">
                                    <div className='font-bold'>{data.price - (data.price / 100 * data.discount)} m</div>
                                    <div className='text-gray-400 text-sm'>{t("payWithCard")}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className='font-bold'>{data.price - (data.price / 100 * data.discount) + 5} m</div>
                                    <div className='text-gray-400 text-sm'>{t("payWithMoney")}</div>
                                </div>
                            </div>
                            :
                            <div className='font-bold'>{data.price} m</div>
                    }
                    <div className='py-2'>
                        <div className="font-semibold">{data.name}</div>
                        <div className="">{data.definition}</div>
                    </div>
                </div>
                <div className='mt-auto mb-2'>
                    <div className='flex items-center'>
                        {[...Array(maxStars)].map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <span key={index}>
                                    {starValue <= data.rating ? (
                                        <IoMdStar className="text-custom-orange" size={18} />
                                    ) : (
                                        <IoMdStarOutline className='text-custom-gray' size={18} />
                                    )}
                                </span>
                            );
                        })}
                    </div>
                </div>
                    <button onClick={() => setToCard(!card)} className='w-full h-10  transition-all text-custom-green rounded border border-custom-green hover:bg-custom-orange hover:border-0 hover:text-white' >
                        {t("addToCart")}
                    </button>
            </div>
        </div>
    )
}

export default ProductCard