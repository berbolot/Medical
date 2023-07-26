import React from 'react';
// import useAuth from '../../hooks/useAuth'
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
   // const {user, isLoading} = useAuth()
   // if (isLoading) {
   //    return (
   //       <div className="d-flex justify-content-center">
   //          <div className="spinner-border" role="status">
   //             <span className="visually-hidden">Загрузка...</span>
   //          </div>
   //       </div>
   //    )
   // }
   return (
      // <Route
      //    {...rest}
      //    render={({ location }) =>
      //       user.email ? (
      //          children
      //       ) : (
      //          <Navigate
      //             to={'/login'}
      //          />
      //       )
      //    }
      // />
      <></>
   );
};

export default PrivateRoute;