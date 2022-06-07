import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from './page/dashboard/Dashboard.page';
import { Entry } from './page/entry/Entry.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketList } from './page/ticket-list/TicketList.page';
import { Ticket } from './page/ticket/Ticket.page';
import { PrivateRoute } from './component/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Entry/>}>
          </Route>

          <Route path='/dashboard' element={
            <PrivateRoute>
                <Dashboard/>
            </PrivateRoute>
            }>
          </Route>

          <Route path='/tickets' element={
            <PrivateRoute>
              <TicketList/>
            </PrivateRoute>
            }>
          </Route>

          <Route path='/addticket' element={
            <PrivateRoute>
                <AddTicket/>
            </PrivateRoute>
          }>
          </Route>

          <Route path='/ticket/:tid' element={
          <PrivateRoute>
              <Ticket/>
          </PrivateRoute>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
