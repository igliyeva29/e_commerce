import { useTranslation } from "react-i18next"
import { map } from "../../../assets/images"
import Button from "./Button"

function Map() {
    const {t} = useTranslation()

    return (
        <div className="container mx-auto px-20 pt-5 pb-10">
            <div className="text-2xl text-custom-grayTitle font-bold pb-5">{t("ourShops")}</div>
            <div className="flex">
                <Button title={'п.Щельяюр'}/>
                <Button title={'д.Вертеп'}/>
                <Button title={'с.Краснобор'}/>
                <Button title={'д.Диюр'}/>
            </div>
            <img className="w-full h-full" src={map} alt="" />
        </div>
    )
}

export default Map