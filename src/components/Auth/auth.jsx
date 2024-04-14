import { useNavigate } from "react-router-dom"

const Auth = () => {
  const navigate = useNavigate()

    return (
        <>
          <h1 onClick={() => navigate('/')}> return </h1>
          <button> signup </button>
        </>
    )
}

export default Auth