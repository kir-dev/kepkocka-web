import {ReactNode} from "react";


export default function DividedText({children}: {children: ReactNode}) {
    return(
        <div className="flex flex-col md:flex-row items-center px-14">
            {children}
        </div>
    )
}