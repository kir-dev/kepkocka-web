import {ReactNode} from "react";

export default function Section({children}: {children: ReactNode}) {
    return(
        <section className="bg-white text-justify min-h-[530px]">
            {children}
        </section>
    )
}