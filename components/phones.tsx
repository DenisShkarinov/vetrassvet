interface Phones {
    phoneNumber?: string
}
export default function Phones (props: Phones) {
    return (
        <div className="phones">
            <a href={"tel:" + props.phoneNumber}>{ props.phoneNumber }</a>
        </div>
    )
}