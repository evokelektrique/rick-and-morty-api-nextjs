"use client"

import useSWR from "swr";
import Character from "./character";

const fetcher = url => fetch(url).then(r => r.json())

export default function Characters({ pageIndex }) {

    const { data, isLoading, error } = useSWR(process.env.NEXT_PUBLIC_RICK_AND_MORTY_API + '/character?page=' + pageIndex, fetcher)

    if (isLoading) {
        return ("swr loading ...");
    }

    if (error) {
        return "Error: " + JSON.stringify(error);
    }

    return (
        <div>
            <div className="columns is-multiline">
                {data.results.map((item, index) => (<Character key={index} Item={item} />))}
            </div>
        </div>
    );
}