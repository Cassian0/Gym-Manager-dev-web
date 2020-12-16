import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import Member from '../pages/Member'
import ListMembers from '../pages/ListMembers';
import StoreMember from '../pages/StoreMember';
import ListInstructors from '../pages/ListInstructors';
import StoreInstructor from '../pages/StoreInstructor';
import Instructor from '../pages/Instructor';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Start} />
            <Route path='/members/' component={ListMembers} />
            <Route path='/members/:id?' component={Member} />
            <Route path='/store-member/:id?' component={StoreMember} />
            {/* <Route path='/instructors/:id?' component={Instructor} /> */}
            <Route path='/instructors/' component={ListInstructors} />
            <Route path='/store-instructor/:id?' component={StoreInstructor} />
        </Switch>
    )
};

export default Routes;