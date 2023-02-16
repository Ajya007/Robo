import { NAVIGATION_ROUTES } from "routes/routes.constant";
import axios from "axios";

export const addLead = async (payload) => {
    const { name, email, phoneNumber }=payload
    const {firstName,middleName,lastName}=name
    console.log("1", firstName, middleName, lastName)
   const headers= {
        "Content-Type": "application/json"
        }
    
    
    const data = {data:{firstName, middleName,lastName, email, phoneNumber} }

    try{
        
        const response = await axios.post(NAVIGATION_ROUTES.CREATE_LEAD, data,{headers}
        );
        
        if (response.status==200){
            return {status:true,message:"Lead Created Sucessfully"}
        }else{
            return { status: false, message: "Unable to add Lead" }
        }
    }catch(err){
        return { status: false, message:err.message}
    }


    
    

};


export const viewLead=async (payload) => {

    const headers = {
        "Content-Type": "application/json"
    }


    const data = {
        "pageIndex": 0,
        "pageSize": 50,
    }

    try {

        const response = await axios.post(NAVIGATION_ROUTES.GET_LEAD, data, { headers }
        );
        console.log(response,"Rrrrr")

        if (response.status == 200) {
            return { status: true, response }
        } else {
            return { status: false, message: "Unable to add Lead" }
        }
    } catch (err) {
        return { status: false, message: err.message }
    }



}