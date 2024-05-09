export function TextArea({ value, ...rest}) {
  return (
  
<textarea className="textArea" {...rest}>
{value}
</textarea>

  )
}
