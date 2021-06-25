import axios from "axios";

export default class JobSeekerCVService{

    getJobSeekersCV(){
        return axios.get("http://localhost:8080/api/jobseekercvs/getAll")
    }

    addJobSeekerCV(cv){
        return axios.post("http://localhost:8080/api/jobseekercvs/add",cv)
    }
}