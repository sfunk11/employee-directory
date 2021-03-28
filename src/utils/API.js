import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default{ 
    getUsers:function(){    

        return axios.get("https://randomuser.me/api/?results=150&nat=us");
    }
};