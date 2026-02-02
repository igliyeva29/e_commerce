import { useTranslation } from "react-i18next"
import { banner_1, banner_2 } from "../../../assets/images"

function Banner2() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-20 pt-5 pb-10">
      <div className="text-2xl text-custom-grayTitle font-bold pb-5">{t("specialOffers")}</div>
      <div className="flex items-center justify-between ">
        <img className="w-130 rounded-2xl scale-100  hover:scale-101 hover:shadow-2xl transition-all" src={banner_1} alt="" />
        <img className="w-130 rounded-2xl scale-100  hover:scale-101 hover:shadow-2xl transition-all" src={banner_2} alt="" />
      </div>
    </div>
  )
}

export default Banner2