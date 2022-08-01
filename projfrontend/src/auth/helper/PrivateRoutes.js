import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAutheticated } from ".";

const PrivateRouter = ({component: Component, ...rest}) => (
    <Route 
     {... rest}
      reander = {(props) => (
        isAutheticated()? (
            <Component {...props} />
        ) : (
            <Redirect 
            to={{
                pathname: "/signin",
                state: {frome: props.location}
            }}
            />
        )
      )}
      />
)

export default PrivateRouter;