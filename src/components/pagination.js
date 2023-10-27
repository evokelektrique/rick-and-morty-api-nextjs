"use client"

export default function Pagination({ setPageIndex, pageIndex }) {
    function handleNextPage() {
        setPageIndex(pageIndex + 1)
    }

    function handlePrevPage() {
        if (pageIndex <= 1) {
            return;
        }

        setPageIndex(pageIndex - 1)
    }

    console.log(pageIndex)

    return (
        <div className="my-5 has-text-centered">
            <button className={"button mr-2 " + (pageIndex === 1 ? "is-secondary" : "is-primary")} onClick={handlePrevPage}>Previous</button>
            <button className={"button is-primary"} onClick={handleNextPage}>Next</button>
        </div>
    )
}