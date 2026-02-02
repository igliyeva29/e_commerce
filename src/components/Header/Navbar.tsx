import Search from "../Search"
import Catalog from "./Catalog"
import Profile from "./Profile"
import { box, cart, logo } from "../../assets/images"
import { IoMdHeartEmpty } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"
import HeaderButton from "./HeaderButton"
import Language from "./Language"
import { useTranslation } from "react-i18next"

function Navbar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <div className='container text-custom-grayText mx-auto flex items-center bg-white py-2 px-20 shadow-xl sticky top-0 z-100'>
            <HeaderButton action={()=>navigate('/')} active={pathname === "/"}>
                <img src={logo} alt="" className="w-30" />
            </HeaderButton>
            <Catalog />
            <Search />
            <HeaderButton title={t("likes")} action={() => navigate('likes')} active={pathname === "/likes"}>
                <IoMdHeartEmpty size={20} />
            </HeaderButton>
            <HeaderButton title={t("orders")} action={() => navigate('orders')} active={pathname === "/orders"}>
                <img className="w-5" src={box} alt="" />
            </HeaderButton>
            <HeaderButton title={t("cart")} action={() => navigate('/cart')} active={pathname === "/cart"}>
                <img className="w-5" src={cart} alt="" />
            </HeaderButton>
            <Language />
            <button className="ml-7">
                <Profile />
            </button>
        </div >
    )
}

export default Navbar