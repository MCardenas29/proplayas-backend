import { PropsWithChildren } from "react"

export interface BlockInterface extends PropsWithChildren {
    title: string,
    showTitle: boolean,
}

const Base = ({ title, children, showTitle }: BlockInterface) => (
    <div className="p-2" >
        {showTitle ?
            <h1 className="font-heading text-3xl text-center">{title}</h1>
            : ''}
        {children}
    </div >
)
