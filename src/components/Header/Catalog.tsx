import { useTranslation } from "react-i18next"
import OutClick from "../OutClick"
import { useState } from "react"
import { Link } from "react-router-dom"

function Catalog() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <OutClick action={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)} className='flex bg-custom-green text-white px-3 py-1 rounded mx-3'>
        <div className='flex flex-col my-1'>
          <div className='bg-white w-5 h-0.5 m-0.5'></div>
          <div className='bg-white w-5 h-0.5 m-0.5'></div>
          <div className='bg-white w-5 h-0.5 m-0.5'></div>
        </div>
        <div className='mx-3'>
          {t("catalog")}
        </div>
      </button>

      <div className={"container mx-auto px-25 absolute top-full left-0 bg-white/80 w-full py-1 shadow-2xl transition-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
        <div className="grid grid-cols-4">
          {/* 1 column */}
          <div className="flex flex-col py-5">
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("milkCheeseEgg")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("bread")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("fruitsAndVegetables")}
            </Link>
            <Link to={"/catalog/"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("freezedProducts")}
            </Link>
          </div>
          {/* 2 column */}
          <div className="flex flex-col py-5">
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("drinks")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("bakery")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("teaCoffee")}
            </Link>
          </div>
          {/* 3 column */}
          <div className="flex flex-col py-5">
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("grocery")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("healthyFood")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("zooProducts")}
            </Link>
          </div>
          {/* 4 column */}
          <div className="flex flex-col py-5">
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("else")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("babyFood")}
            </Link>
            <Link to={"/catalog"} className="my-2 text-black font-semibold hover:text-custom-orange">
              {t("meat")}
            </Link>
          </div>
        </div>
      </div>
    </OutClick>
  )
}

export default Catalog