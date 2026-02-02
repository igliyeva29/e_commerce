import type { ReactNode } from "react";

type ButtonType = {
    children: ReactNode;
    title?:string;
    action?: () => void;
    active?: boolean;
}

function HeaderButton({ children, title, action }: ButtonType) {
  return (
    <div>
        <button onClick={action} className={"flex flex-col items-center w-max py-2 px-3 bg-white hover:bg-gray-50 trensition all "}>
            {children}
            <span className="text-sm">{title}</span>
        </button>
    </div>
  )
}

export default HeaderButton