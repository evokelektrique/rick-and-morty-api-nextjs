"use client"

import Characters from "@/components/characters";
import Pagination from "@/components/pagination";
import { useState } from "react";

export default function CharactersPage() {
    const [pageIndex, setPageIndex] = useState(1);

    return (
        <div>
            <Characters pageIndex={pageIndex} />
            <Pagination setPageIndex={setPageIndex} pageIndex={pageIndex} />
        </div>
    )
}