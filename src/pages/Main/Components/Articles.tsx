import { useTranslation } from "react-i18next"
import ArticleCard from "./ArticleCard"
import { arrow_right } from "../../../assets/images"
import type { ArticleProps } from "../../../types/Article"

function Articles({ articleData }: { articleData: ArticleProps[] }) {
    const { t } = useTranslation()

    return (
        <div className="px-20 py-10">
            <div className="flex justify-between items-center">
                <div className="text-2xl text-custom-grayTitle font-bold pb-5">{t("articles")}</div>
                <div className='flex items-center'>
                    <div className='text-sm text-custom-grayText'>{t("allArticles")}</div>
                    <img className='w-5 ml-5' src={arrow_right} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {
                    articleData.map((article, index) => (
                        <ArticleCard key={index}
                            image={article.image}
                            date={article.date}
                            title={article.title}
                            text={article.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default Articles