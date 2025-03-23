import {ReactNode} from "react";


export default function Section({children}: {children: ReactNode}) {
    return(
        <section className="bg-white text-justify h-[600px]">
            {children}
        </section>
    )
}