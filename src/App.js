import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import User from "./containers/User"
import MessagesList from "./containers/MessagesList"
import AddMessage from "./containers/AddMessage"

function App() {
  return (
    <div className="App">
      <header className="text-center py-3">
        <h3>Bayo ChatApp</h3>
      </header>
      <main className="mt-4">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 users">
                <User/>
              </div>
              <div className="col-md-6" id="message-list">
                <MessagesList/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 fixed-bottom" id="new-messages">
                    <AddMessage/>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
