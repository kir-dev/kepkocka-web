import {ReactNode} from "react";


export default function Section({children}: {children: ReactNode}) {
    return(
        <section className="bg-white p-16 h-[600px] text-justify">
            {children}
        </section>
    )
}