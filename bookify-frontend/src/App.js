import React from 'react'
import ViewBooks from './ViewBooks'
import ViewBook from './ViewBook'
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Route exact path="/" component={ViewBooks}></Route>
            <Route exact path="/:id" render={props => <ViewBook songId={props.match.params.id} />}></Route>
            </BrowserRouter>
            {/* <ViewBooks /> */}
        </div>
    )
}

export default App