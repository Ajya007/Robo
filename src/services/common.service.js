import { NAVIGATION_ROUTES } from "routes/routes.constant";
import axios from "axios";

//function to add new lead
export const addLead = async (payload) => {
    const { firstName, middleName, lastName, email, phoneNumber } = payload
    const headers = {
        "Content-Type": "application/json"
    }
    const data = { data: { firstName, middleName, lastName, email, phoneNumber } }
    try {
        const response = await axios.post(NAVIGATION_ROUTES.CREATE_LEAD, data, { headers });
        if (response.status == 200) {
            return { status: true, message: "Lead Created Sucessfully" }
        } else {
            return { status: false, message: "Unable to add Lead" }
        }
    } catch (err) {
        return { status: false, message: err.message }
    }
};



//function to get the list of all lead
export const viewLead = async () => {
    const headers = {
        "Content-Type": "application/json"
    }
    const data = { "pageIndex": 0, "pageSize": 50, }
    try {
        const response = await axios.post(NAVIGATION_ROUTES.GET_LEAD, data, { headers });
        if (response.status == 200) {
            return { status: true, response }
        } else {
            return { status: false, message: "Unable to add Lead" }
        }
    } catch (err) {
        return { status: false, message: err.message }
    }
}

//function to fetch the available note
export const fetchContactNote = async (leadId) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const data = { data: { leadId }, pageIndex: 0, pageSize: 20,}
    try {
        const response = await axios.post(NAVIGATION_ROUTES.FETCH_NOTES, data, { headers });
        if (response.status == 200) {
            return { status: true, response }
        }else {
            return { status: false, message: "Failed To Update Contact Note" }
        }
    } catch (err) {
        return { status: false, message: err.message }
    }
}


//function to create new note
export const createNotes = async ({ leadId, description }) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const data = { data: { leadId, description }}
    try {
        const response = await axios.post(NAVIGATION_ROUTES.CREATE_NOTES, data, { headers }
        );
        if (response.status == 200) {
            return { status: true, message: "Contact Note Updated Successfully" }
        } else {
            return { status: false, message: "Failed To Update Contact Note" }
        }
    } catch (err) {
        console.log(err, "me")
        return { status: false, message: err.message }
    }
}

//function to update lead data
export const updateLeadData = async ({ leadId, description }) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const data = { }

    try {
        const response = await axios.post(NAVIGATION_ROUTES.UPDATE_DETAIL, data, { headers }
        );
        console.log("Update",response)
        if (response.status == 200) {
            return { status: true, message: "Contact Note Updated Successfully" }
        } else {
            return { status: false, message: "Failed To Update Contact Note" }
        }
    } catch (err) {
        console.log(err, "me")
        return { status: false, message: err.message }
    }
}




//function to update lead data
export const closeLeadData = async (leadId) => {
    console.log("closeleaddata",leadId)
    const headers = {
        "Content-Type": "application/json"
    }
    const data = { data: {leadId} }
    try {
        const response = await axios.put(NAVIGATION_ROUTES.CLOSE_LEAD, data, { headers });
        console.log("CloseLeadData", response)
        if (response.status == 200) {
            return { status: true, response }
        } else {
            return { status: false, message: "Failed To Update Contact Note" }
        }
    } catch (err) {
        console.log(err, "me")
        return { status: false, message: err.message }
    }
}








