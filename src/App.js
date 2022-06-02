import './App.css';
import { DefaultLayout } from './component/layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { Entry } from './page/entry/Entry.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketList } from './page/ticket-list/TicketList.page';

function App() {
  return (
    <div className="App">
        <DefaultLayout>
          {/* <Dashboard/> */}
          {/* <AddTicket /> */}
          <TicketList />
        </DefaultLayout>
    </div>
  );
}

export default App;
