# Genesis18 Events API UI

### Description
An user interface for adding or editing events of the Genesis18 techfest.

### Dependencies
1. bootstrap-vue
2. vue-resource
3. vue-router
4. vuex

### Flow
1. Login to access the API
2. Sends a GET request to get all the events registered
3. Add events by filling all the details
4. Edit event by editing the details

### Components
1. Navbar Component - self explanatory
2. Input Component - a form for taking input while adding an event or editing the event

### Views
1. AddEvent - A view which contains input component. User will enter the details and on submitting, event will be added to databse
2. EditEvents - A view which renders data of the event into the input component, based on eventId
3. ListEvent - A view which lists all the events present in the database
4. Login - self explanatory
