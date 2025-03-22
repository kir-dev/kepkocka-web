import {ReactNode} from "react";


export default function DividedText({children}: {children: ReactNode}) {
    return(
        <div className="flex flex-row items-center h-full text-[22px]">
            {children}
        </div>
    )
}