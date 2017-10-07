import React from "react"
import { Route, Switch } from "react-router-dom"
import { routes } from "./routes"
import { NotFoundPage } from "../error/not.found.page"

export class RouterComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="center-vertically">
                    <Switch>
                        {
                            routes.map((route) => {
                                return <Route key={ route.path } exact path={ route.path } component={ route.page }/>
                            })
                        }
                        <Route path="*" component={ NotFoundPage }/>
                    </Switch>
                </div>
            </div>
        )
    }
}

{/*<Route exact path="/" component={ SimplePage }/>*/
}
{/*<Route exact path="/advanced" component={ AdvancedPage }/>*/
}
{/*<Route path="*" component={ NotFoundPage }/>*/
}
