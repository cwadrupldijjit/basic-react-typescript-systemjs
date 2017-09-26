import * as React from 'react';
import { BrowserRouter as Router,
         Route,
         Redirect,
         Switch } from 'react-router-dom';

import { MenuBar } from './MenuBar/MenuBar';
import { HomeComponent } from './Home/Home';
import { TopicList } from './TopicList/TopicList';
import { CreateTopic } from './CreateTopic/CreateTopic';
import { InvalidRoute } from './InvalidRoute/InvalidRoute';

const Routes = () => (
    <Router>
        <div>
            <div>
                <MenuBar></MenuBar>
            </div>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/list" component={TopicList} />
                <Redirect from="/created" to="/create" />
                <Route path="/create" component={CreateTopic} />
                <Route component={InvalidRoute} />
            </Switch>
        </div>
    </Router>
);

export { Routes };