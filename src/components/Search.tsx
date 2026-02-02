import { useState } from "react"
import { useTranslation } from "react-i18next"
import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

function Search() {
  const [keyword, setKeyword] = useState<string>("")
  const navigate = useNavigate()
  const {t} = useTranslation()

  return (
    <div className="flex w-100 h-9 items-center border border-custom-green rounded-md pr-3 mx-3">
      <input
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key == 'Enter' && navigate("search?keyword="+keyword)}
        className="w-full py-2 px-3 outline-none"
        type="text"
        placeholder={t("search")} />
      <CiSearch size={24} />
    </div>
  )
}

export default Search