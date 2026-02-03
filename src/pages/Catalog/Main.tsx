import { useTranslation } from "react-i18next"
import { catalog_1, catalog_10, catalog_11, catalog_12, catalog_13, catalog_2, catalog_3, catalog_4, catalog_5, catalog_6, catalog_7, catalog_8, catalog_9 } from "../../assets/images"

function Main() {
    const { t } = useTranslation()

    return (
        <div className="container mx-auto px-25 py-5">
            <div className="text-3xl text-custom-grayTitle font-bold pb-5">{t("catalog")}</div>
            <div className="relative grid grid-cols-4 gap-5 items-center">
                <div className="col-span-2 relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_1} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("milkCheeseEgg")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_2} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("bread")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_3} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("fruitsAndVegetables")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_4} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("freezedProducts")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_5} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("drinks")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_6} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("bakery")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_7} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("teaCoffee")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_8} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("grocery")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_9} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("healthyFood")}
                    </span>
                </div>
                <div className="col-span-2 relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_10} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("zooProducts")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_11} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("babyFood")}
                    </span>
                </div>
                <div className="col-span-2 relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_12} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("meat")}
                    </span>
                </div>
                <div className="relative rounded overflow-hidden">
                    <img className="w-full h-full" src={catalog_13} alt="" />
                    <div className="absolute inset-0 bg-linier-to-t from-custom-green to-transparent"></div>
                    <span className="absolute text-sm bottom-4 left-2 text-white font-semibold">
                        {t("else")}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Main