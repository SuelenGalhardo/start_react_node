export function Tag({title, ...rest }) {
    return(
<span className="tag" {...rest}>{title}</span>

    );
}