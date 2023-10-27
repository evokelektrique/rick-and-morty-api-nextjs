
export const metadata = {
    title: 'Characters',
    description: 'Wubba-lubba-dub-dub!',
}

export default function Layout({children}) {
    return(
        <div className="container">
            {children}
        </div>
    )
}