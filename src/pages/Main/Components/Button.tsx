import { Children, type ReactNode } from "react";

type ButtonType = {
  children?: ReactNode;
  title: string;
  action?: () => void;
}

function Button({ title, action, children }: ButtonType) {
  return (
    <div className="py-5">
      <button onClick={action} className={"py-1 px-5 mr-5 rounded bg-custom-gray text-custom-grayText  hover:bg-custom-green hover:text-white transition-all " + children}>
        {title}
      </button>
    </div>
  )
}

export default Button