import { useState } from "react"
import type { InputProp } from "../../types/Header"
import { useTranslation } from "react-i18next"

function Input(props: InputProp) {
  const [validate, setValidate] = useState(true)
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation()

  const checkValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.regex) setValidate(props.regex.test(e.target.value))
    if (!e.target.value) setValidate(true)
  }

  return (
    <div className="w-full flex flex-col items-start">
      <label className={"py-1 text-sm "  + (validate ? "text-black" : "text-red-500 bg-red-50")} htmlFor={props.name}>{t(props.label)}</label>

      <div className={"w-full shadow border rounded flex items-center transition-all " + (validate ? "border-custom-green" : "border-red-500 bg-red-50")}>
        <label htmlFor={props.name} className="ml-3">{props.defaultValue}</label>
        <input
          className='py-2 pl-1 pr-3 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          id={props.name}
          value={props.value}
          onChange={(e) => { props.onChange(e), checkValidate(e) }}
          name={props.name}
          type={props.type !== "password" ? props.type : visible ? "text" : "password"}
        />
      </div>
    </div>
  )
}

export default Input