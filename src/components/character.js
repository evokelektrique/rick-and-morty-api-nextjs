import Image from "next/image";

export default function Character({ Item }) {
    return (
        <div className="column is-4">
            <div className="box" style={{ height: "100%" }}>
                <div className="columns is-align-items-center">
                    <div className="column is-4">
                        <figure className="image is-128x128">
                            <Image className="is-rounded" src={Item.image} alt={Item.name} width={128} height={128} />
                        </figure>
                    </div>

                    <div className="column">
                        <b className="mb-3 is-block">
                            {Item.name} - {Item.status.toLowerCase() === "alive" ? "Alive" : "Unknown"}
                        </b>
                        <div className="mb-1 is-flex is-align-items-center" title="Gender">
                            <Image src={'/alien.png'} width={16} height={16} alt="Gender" />
                            <span className="mx-1">{Item.gender}</span>
                            <span> - {Item.species}</span>
                        </div>
                        <div className="mb-1 is-flex is-align-items-center" title="Episodes">
                            <Image className="mr-1" src={'/movie.png'} width={16} height={16} alt="Episodes" />
                            <span>{Item.episode.length}</span>
                        </div>
                        <div className="mb-1 is-flex is-align-items-center" title="Origin">
                            <Image className="mr-1" src={'/planet.png'} width={16} height={16} alt="Origin" />
                            <span>{Item.origin.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}