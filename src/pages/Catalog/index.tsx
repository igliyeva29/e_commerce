import { useTranslation } from "react-i18next"
import { catalog_1, catalog_10, catalog_11, catalog_12, catalog_13, catalog_2, catalog_3, catalog_4, catalog_5, catalog_6, catalog_7, catalog_8, catalog_9 } from "../../assets/images"

function index() {
    const { t } = useTranslation()

    return (
        <div className="container mx-auto px-25 py-5">
            <div className="text-3xl text-custom-grayTitle font-bold pb-5">{t("catalog")}</div>
            <div className="grid grid-cols-4 gap-5 items-center">
                <div className="col-span-2 relative">
                    <img className="w-full h-full" src={catalog_1} alt="" />
                </div>
                <img className="w-full h-full" src={catalog_2} alt="" />
                <img className="w-full h-full" src={catalog_3} alt="" />
                <img className="w-full h-full" src={catalog_4} alt="" />
                <img className="w-full h-full" src={catalog_5} alt="" />
                <img className="w-full h-full" src={catalog_6} alt="" />
                <img className="w-full h-full" src={catalog_7} alt="" />
                <img className="w-full h-full" src={catalog_8} alt="" />
                <img className="w-full h-full" src={catalog_9} alt="" />
                <div className="col-span-2">
                    <img className="w-full h-full" src={catalog_10} alt="" />
                </div>
                <img className="w-full h-full" src={catalog_11} alt="" />
                <div className="col-span-2">
                    <img className="w-full h-full" src={catalog_12} alt="" />
                </div>
                <img className="w-full h-full" src={catalog_13} alt="" />
            </div>

        </div>
    )
}

export default index