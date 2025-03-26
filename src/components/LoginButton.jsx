const LoginButton = (props) => {
    return (
    <div className="app-title flex flex-col items-center font-bold text-3xl bg-orange-peel-200 p-8 md:p-32 rounded-4xl transition-transform duration-500 ease-out hover:scale-105">
        {props.icon}
        <div>{props.category} Login</div>
    </div>
    )
}

export default LoginButton;