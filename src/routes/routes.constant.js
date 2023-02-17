export const NAVIGATION_ROUTES = {
  END_POINT: process.env.REACT_APP_BASE_URL, 
  DASHBOARD: "/",
  ADDLEAD: "/addLead",
  VIEWLEAD: "/viewLead",
  USERDETAIL:"/userDetail",
  CREATE_LEAD: process.env.REACT_APP_BASE_URL + "api/lead/create",
  GET_LEAD: process.env.REACT_APP_BASE_URL + "api/lead/get",
  CREATE_NOTES: process.env.REACT_APP_BASE_URL + "api/additional-notes/create",
  FETCH_NOTES: process.env.REACT_APP_BASE_URL + "api/additional-notes/get",
  UPDATE_DETAIL: process.env.REACT_APP_BASE_URL + "api/lead/update",
  CLOSE_LEAD: process.env.REACT_APP_BASE_URL + "api/lead/close"
    
};
