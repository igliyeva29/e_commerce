import { useTranslation } from "react-i18next"
import Button from "./Button"
import type { ArticleProps } from "../../../types/Article"

function ArticleCard({ image, date, title, text }: ArticleProps) {
  const { t } = useTranslation()

  return (
    <div className="h-full shadow transition-all hover:shadow-lg hover:shadow-custom-orange/15">
      <div className="bg-white h-full flex flex-col ">
        <img className="w-full rounded-t" src={image} alt="" />

        <div className="p-2 rounded-b flex flex-col h-full">
          <div className="text-sm text-gray-400 mb-3">{date}</div>
          <div className="text-lg font-bold mb-2">
            {title}
          </div>
          <div className="text-sm text-custom-grayText">
            {text}
          </div>
          <div className="mt-auto">
            <Button title={t("readMore")} children={"text-custom-green bg-custom-greenBtn"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard