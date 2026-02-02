import { BiX } from 'react-icons/bi'
import type { PopupProps } from '../../types/Header'
import { useTranslation } from 'react-i18next'


function Popup({ children, open, setOpen, title, active, setActive, sendData }: PopupProps) {
    const { t } = useTranslation()

    return (
        <div >
            <div onClick={() => setOpen(false)} className={'fixed top-0 left-0 h-screen bg-custom-orange/20 w-full backdrop-blur-[2px] transition-all ' + (open ? "opacity-100 visible" : "opacity-0 invisible")}></div>
            <div className={'text-black w-100 -translate-1/2 bg-white rounded py-3 px-5 fixed top-1/2 left-1/2 transition-all ' + (open ? "scale-100" : "scale-0")}>
                <div className="mx-10">
                    <div className='pt-10 font-bold text-2xl'>{title}</div>
                    <button onClick={() => setOpen(false)} className='hover:opacity-70 absolute top-0 right-0 bg-custom-gray text-custom-grayText p-1'>
                        <BiX size={18} />
                    </button>

                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Popup