export const NAVIGATION_ROUTES = {
  END_POINT: process.env.REACT_APP_BASE_URL, 
  DASHBOARD: "/",
  ADDLEAD: "/addLead",
  VIEWLEAD: "/viewLead",
  CREATE_LEAD: process.env.REACT_APP_BASE_URL + "api/lead/create",
  GET_LEAD: process.env.REACT_APP_BASE_URL + "api/lead/get-leads"
};
