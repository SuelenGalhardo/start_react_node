export function Input({ icon: Icon, ...rest }) {
    return (
  <div className="inputOne">
        {Icon && <Icon size={20} />}
        <input {...rest} />
        </div>

    )
  }