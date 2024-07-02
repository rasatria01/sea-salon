import Star from "./star";

export default function Rating({star}) {
    return <div className="inline-flex">
        {
            [...Array(5)].map((x,i) =>
                <Star key={i} color={(i<star ? "text-yellow-300": "")} />
            )
        }
    </div>
}