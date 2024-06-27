import axios from "axios";
import { useState, react} from "react"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useAuth  } from "../store/auth";
import Cookies from "js-cookie";
import SuccessAlert2 from "./alert";
import { useNavigate } from "react-router-dom";
import withAuth from "./privatepage/"

 function Tranfer(){
    const {user}=useAuth();
    const navigate=useNavigate();
const [autoclose ,setAutoclose]=useState(false)
const [dAlert,setDAlert]= useState({
  bodercolor:"border-[#ff0000]",
  txtcolor:"text-[#ff0000]",
  
  bgcolor:"bg-[#ff0000]",
  icon:"bg-[#0c2e0c]",
  headtitle:"Failed server Error",
  msg:"Please  angain later",

})
 const {Email}=user;
  const[details,setDetails]=useState(
    {
      ammount:"1000",
      reciver:"",
      methods:"UPIID",
     
      
    }
  ) 
  const onChangeInput=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setDetails({...details,
   
        [name]:value
}
  )}
 
let token=Cookies.get("token")
function fastValue(event){
     

    setDetails({...details,["ammount"]:event.target.value})
}
const moneyTranfer =async(event)=>{
    event.preventDefault();
    try {
        const response= await axios.post('http://localhost:3001/moneysend',{details},
            {headers: {
            'Authorization': `Bearer ${token}`
          }})
          console.log(response.data.message)
          console.log(response.data.message==="success")
          if(response.data.message==="success"){
            // alert(response.data)
            // <Navigate to="/" />
            // console.log(response.data.token);  
            setDAlert({bodercolor:"border-[#00ff00]",
              txtcolor:"text-[#00ff00]",
              
              bgcolor:"bg-[#00ff00]",
              icon:"bg-[#0c2e0c]",
              headtitle:`${details.ammount} send to ${response.data.Rname} `,
              msg:"successfully",
          })
          setAutoclose(true);
          setTimeout(() => {
            setAutoclose(false)
            navigate("/");
          }, 3000);
           
           
          }else if(response.data==="no money"){
            setDAlert({bodercolor:"border-[#ffff00]",
              txtcolor:"text-[#ffff00]",
              
              bgcolor:"bg-[#ffff00]",
              icon:"bg-[#0c2e0c]",
              headtitle:"incificiant money or sending to self",
              msg:"check your balance",
          })
          setAutoclose(true);
          setTimeout(() => {
          
            setAutoclose(false)
          }, 6000);

          }else{
            setDAlert({bodercolor:"border-[#ff0000]",
              txtcolor:"text-[#ff0000]",
              
              bgcolor:"bg-[#ff0000]",
              icon:"bg-[#0c2e0c]",
              headtitle:"user not exist",
              msg:"try again",
          })
          setAutoclose(true);
          setTimeout(() => {
            setAutoclose(false)
          }, 6000);

          }
        
    } catch (error) {
      console.log(error)
      setDAlert({bodercolor:"border-[#ff0000]",
        txtcolor:"text-[#ff0000]",
        
        bgcolor:"bg-[#ff0000]",
        icon:"bg-[#0c2e0c]",
        headtitle:"somthing went wrong ",
        msg:"try  later",
    })
    setAutoclose(true);
    setTimeout(() => {
      setAutoclose(false)
    }, 6000);
        
    }
}
  
    return (<>
<div className="font-manrope flex h-screen w-full items-center justify-center">
{autoclose &&
        <SuccessAlert2 dAlert={dAlert}></SuccessAlert2>
      }
  <form onSubmit={moneyTranfer} className="mx-auto box-border w-[365px] border bg-white p-4">
    <div className="flex items-center justify-between">
      <span className="text-[#64748B]">Sending Money </span>
      <div className="cursor-pointer border rounded-[4px]">
        
      </div>
    </div>

    <div className="mt-6">
      <div className="font-semibold">How much would you like to send?</div>
      <div><input className="mt-1 w-full rounded-[4px] border focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 p-2" name="ammount" value={details.ammount} type="text" required onChange={onChangeInput} placeholder="100.00" /></div>
      <div className="flex justify-between">
        <label htmlFor="f1" className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" value="500" >₹100</label>
        <input type="radio" value="100" name="fast" onClick={fastValue} hidden id="f1" />
        <input type="radio" value="500" name="fast" onClick={fastValue} hidden id="f2" />
        <input type="radio" value="1000" name="fast" onClick={fastValue} hidden id="f3" />
        <input type="radio" value="2000" name="fast" onClick={fastValue} hidden id="f4" />
        <label htmlFor="f2" className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] " value="500" >₹500</label>
        <label htmlFor="f3"className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" value="500" onClick={fastValue}>₹1000</label>
        <label htmlFor="f4" className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" value="500" onClick={fastValue}>₹2000</label>
      </div>
    </div>

    <div className="mt-6">
      <div className="font-semibold">From</div>
      <div className="mt-2">
        <div className="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
          <div className="flex items-center gap-x-2">
          <LiaRupeeSignSolid className=" text-2xl"/>
            <span className="font-semibold">Checking</span>
          </div>

          <div className="flex items-center gap-x-2 focus:outline-none">
       
          <select name="methods" required onChange={onChangeInput} value={details.methods} className="bg-transparent" id="md">
      <option className="font-semibold" value="UPIID">UPI pay</option>
      <option className="font-semibold" value="Accno">Account</option>
      <option className="font-semibold" value="Phone">PhonePay</option>
    </select>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6">
      <div className="flex justify-between">
        <span className="font-semibold text-[#191D23]">Receiving</span>
        <div className="flex cursor-pointer items-center gap-x-2">
         
        </div>
      </div>

      <div className="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
      <input name="reciver" value={details.reciver} autoComplete="false" required onChange={onChangeInput} type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder={details.methods}/>
     
        <div>
   
        </div>
      </div>
    </div>

    <div className="mt-6">
      <button type="submit" className="w-full cursor-pointer rounded-[4px] bg-[#1f2937] px-3 py-[6px] text-center font-semibold text-white">Send ₹{details.ammount}</button>
    </div>
  </form>
</div></>)}
export default withAuth(Tranfer);
