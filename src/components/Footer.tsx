import { useTranslation } from "react-i18next"
import { design, facebook_logo, footer_logo, instagram_logo, ok_logo, pattern, phone, vk_logo } from "../assets/images"
import { Link } from "react-router-dom"

function Footer() {
    const { t } = useTranslation()

    return (
        <div className="mt-10 bg-custom-footer bg-repeat py-5" style={{ backgroundImage: `url(${pattern})` }}>
            <div className="conatiner text-sm pt-3 text-custom-grayText mx-auto px-20">
                <div className="flex items-start justify-between z-10">
                    <div className="flex gap-5">
                        <img className="w-15" src={footer_logo} alt="" />
                        <Link to={'/aboutCompany'} className="hover:text-black transition-all duration-150">{t("aboutCompany")}</Link>
                        <Link to={'/contacts'} className="hover:text-black transition-all duration-150">{t("contacts")}</Link>
                        <Link to={'/jobs'} className="hover:text-black transition-all duration-150">{t("jobs")}</Link>
                        <Link to={'/articles'} className="hover:text-black transition-all duration-150 ">{t("articles")}</Link>
                        <Link to={'/policy'} className="hover:text-black transition-all duration-150 ">{t("policy")}</Link>
                    </div>
                    <div className="flex gap-1 ml-20 mr-5">
                        <img className="w-5" src={instagram_logo} alt="" />
                        <img className="w-5 mx-2" src={vk_logo} alt="" />
                        <img className="w-5 mx-2" src={facebook_logo} alt="" />
                        <img className="w-5" src={ok_logo} alt="" />
                    </div>
                    <div className="inline">
                        <div className="flex items-center">
                            <img className="w-5 mr-2" src={phone} alt="" />
                            <Link to={"#"} className=" ml-2 hover:text-black transition-all duration-150">8 800 777 33 33</Link>
                        </div>
                        <div className="flex items-center mt-5">
                            {t("design")}
                            <img className="w-full ml-3" src={design} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer