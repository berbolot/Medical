import React from "react";
// import { useLocation, useHistory } from 'react-router';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import googleIcon from "../../images/google1.png";

const Login = () => {
  // const {setUser, error, setError, setIsLoading, signInWithGoogle, signInWithEmail, getEmail, getPassword} = useAuth()
  // const location = useLocation()
  // const history = useHistory()
  const navigate = useNavigate();
  // const redirectUrl = location.state?.from || '/'

  // const handleGoogleSignIn = () => {
  //    setIsLoading(true)
  //    signInWithGoogle()
  //    .then(res => {
  //       setUser(res.user)
  //       setError('');
  //       navigate('/')
  //    })
  //    .finally(() => setIsLoading(false))
  //    .catch(err => {
  //       setError(err.message);
  //       // console.log(err.message);
  //    });
  // }

  // const handleSignIn = (e) => {
  //    e.preventDefault();

  //    signInWithEmail()
  //    .then(res => {
  //       setUser(res.user)
  //       setError('');
  //      navigate('/')
  //    })
  //    .catch(err => {
  //       setError(err.message);
  //       // console.log(err.message);
  //    });
  // }

  return (
    <div className="login">
      <div className="login-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="login-box shadow">
                <h3>Войдите в систему</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control shadow"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control shadow"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button type="submit" className="universal-btn">
                  Представлять на рассмотрение
                  </button>
                </form>
                <hr />
                <div className="text-center">
                  <p className="text-danger">error</p>
                  <button className="universal-btn google-btn shadow">
                    <img src={googleIcon} alt="" /> Войти через Google
                  </button>
                  <p className="switcher">
                  Новый пользователь? <Link to="/register">регистр</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
