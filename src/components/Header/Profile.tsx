import { use, useState } from 'react'
import { arrow_down, avatar } from '../../assets/images'
import { useTranslation } from 'react-i18next'
import HeaderButton from './HeaderButton'
import Popup from './Popup'
import Input from './Input'
import Button from '../../pages/Main/Components/Button'

function Profile() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openForget, setOpenForget] = useState(false)
  const [active, setActive] = useState<"login" | "signUp">("login")
  const { t } = useTranslation()
  const [data, setData] = useState({
    phone: "",
    email: "",
    password: "",
  })
  const [dataForget, setDataForget] = useState("")

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = () => {
    console.table(data)
  }

  const sendDataForget = () => {
    console.log(dataForget)
  }

  return (
    <>
      <HeaderButton action={() => setOpenLogin(true)} >
        <div className="flex items-center">
          <img src={avatar} alt="" />
          <div className='px-3'>Алексей</div>
          <img className='w-5' src={arrow_down} alt="" />
        </div>
      </HeaderButton>

      <Popup sendData={sendData} open={openLogin} setOpen={setOpenLogin} title={t('login')} active={active} setActive={setActive}>

        <div className='my-5'>
          <Input regex={/^(6[0-5]|71)\d{6}$/} key={1} name="phone" label="phone" type="number" defaultValue="+7912" onChange={handleData} value={data.phone} />
        </div>

        <Button title={t("login")} action={sendData} children={"bg-custom-orange/30 text-custom-orange font-bold w-full hover:bg-custom-orange/30 py-2 rounded"}></Button>

        <div className="grid grid-cols-2 items-center">
          <Button title={t("signUp")} children={"bg-white border border-custom-green text-custom-green rounded mr-5 text-sm"}></Button>
          <button onClick={() => { setOpenLogin(false), setOpenForget(true) }} className="text-gray-500 py-1 text-sm">{t("forgotPassword")}</button>
        </div>

      </Popup>
    </>
  )
}

export default Profile