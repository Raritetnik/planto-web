export default function Button({children}) {
    return(
        <button className="px-12 py-2 border-[2px]
        border-[rgba(255,255,255,.75)] rounded-lg text-[24px] text-[rgba(255,255,255,.75)]
        inline-flex items-center">
            {children}
        </button>
    )
}