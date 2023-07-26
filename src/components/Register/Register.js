import React from "react";
// import { useLocation, useHistory } from 'react-router';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import googleIcon from "../../images/google1.png";

const Register = () => {
  // const {setUser, error, setError, signInWithGoogle, signUpWithEmail, getName, getEmail, getPassword, updateUserName} = useAuth()
  // const location = useLocation()
  // const history = useHistory()
  const navigate = useNavigate();
  // const redirectUrl = location.state?.from || '/'

  // const handleGoogleSignIn = () => {
  //    signInWithGoogle()
  //    .then(res => {
  //       setUser(res.user)
  //       setError('');
  //       navigate('/')
  //    })
  //    .catch(err => {
  //       setError(err.message);
  //       // console.log(err.message);
  //    });
  // }

  // const handleRegistration = (e) => {
  //    e.preventDefault();

  //    signUpWithEmail()
  //    .then(res => {
  //       setUser(res.user)
  //       setError('');
  //       updateUserName()
  //       navigate('/')
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
                      type="name"
                      className="form-control shadow"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control shadow"
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
                  <p className="text-danger">ошибка</p>
                  <button className="universal-btn google-btn shadow">
                    <img src={googleIcon} alt="" /> Войти через Google
                  </button>
                  <p className="switcher">
                  Уже пользователь? <Link to="/login">Авторизоваться</Link>
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

export default Register;
