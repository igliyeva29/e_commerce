import { useState } from "react"
import { useTranslation } from "react-i18next"
import i18n from "../../i18n"
import OutClick from "../OutClick"
import HeaderButton from "./HeaderButton"
import { GrLanguage } from "react-icons/gr"

function Language() {
    const {t} = useTranslation()
    const lang = useTranslation().i18n.language
    const [open, setOpen] = useState<boolean>(false)
    const switchLang = (lang: string) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("lang", lang)
    }

  return (
    <OutClick action={()=>setOpen(false)}>
        <HeaderButton title={t("language")} action={()=>setOpen(!open)}>
            <GrLanguage size={20}/>
        </HeaderButton>

        <div className={"absolute top-12 text-center bg-white py-1 px-2 rounded flex flex-col shadow transition-all duration-200 "+(open ? "opacity-100 visible" : "opacity-0 invisible")}>
            <button onClick={()=> (switchLang('tm'), setOpen(false))} className={"p-2 rounded hover:bg-gray-50 w-full " + (lang == 'tm' && "bg-gray-100")}>Türkmen dili</button>
            <div className="border-y border-gray-200">
                <button onClick={()=> (switchLang('ru'), setOpen(false))} className={"p-2 rounded hover:bg-gray-50 w-full " + (lang == 'ru' && "bg-gray-100")}>Русский</button>
            </div>
            <button onClick={()=> (switchLang('en'), setOpen(false))} className={"p-2 rounded hover:bg-gray-50  w-full" + (lang == 'en' && "bg-gray-100")}>English</button>
        </div>
    </OutClick>
  )
}

export default Language