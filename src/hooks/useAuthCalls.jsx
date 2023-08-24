import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toastSuccessNotify } from "../helper/ToastNotify"
const useAuthCalls = () => {
    const navigate = useNavigate()
    
    const login=async(userData)=>{
        console.log(userData)
        const BASE_URL="https://32162.fullstack.clarusway.com"
        
        try{
            const {data}= await axios.post(`${BASE_URL}/users/auth/login/`, userData)
            console.log(data);
            toastSuccessNotify("Login işlemi başarılı")
            navigate("/")
        }catch(error){
            
            console.log(error);
        }
    }  
    return {login}
}
export default useAuthCalls