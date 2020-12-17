import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import Start from '../pages/Start';
import Member from '../pages/Member/index'
import ListMembers from '../pages/ListMembers';
import StoreMember from '../pages/StoreMember';
import ListInstructors from '../pages/ListInstructors';
import StoreInstructor from '../pages/StoreInstructor';
import Instructor from '../pages/Instructor';
import UpdateInstructor from '../pages/UpdateInstructor';
import UpdateMember from '../pages/UpdateMember';

function Routes() {
    return (
        <Switch>
            <Route path='/members/' exact component={ListMembers} />
            <Route path='/members/:id'  component={Member} />
            <Route path='/store-member/' component={StoreMember} />
            <Route path='/update-member/:id' component={UpdateMember} />


            <Route path='/' exact component={ListInstructors} />
            <Route path='/instructors/:id' component={Instructor} />
            <Route path='/update-instructors/:id' component={UpdateInstructor} />
            <Route path='/instructors' component={ListInstructors} />
            <Route path='/store-instructor/' component={StoreInstructor} />
        </Switch>
    )
};

export default Routes;