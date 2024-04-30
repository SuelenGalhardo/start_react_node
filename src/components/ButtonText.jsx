export function ButtonText({title, ...rest}){

return(
<button className="buttonText" type="button" {...rest}>
{title}
</button>
);
}