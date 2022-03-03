import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
import Bookshelves from './components/BookShelves'
import ProtectedRoute from './components/ProtectedRoute'
import BookItemDetails from './components/BookItemDetails'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/shelf" component={Bookshelves} />
    <ProtectedRoute exact path="/books/:id" component={BookItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
