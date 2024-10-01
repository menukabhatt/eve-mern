
const Button = ({ label, color }) => {




  return (
    <div>
      <button className={`${color} text-white px-2 py-1`}>{label}</button>
    </div>
  )
}
export default Button