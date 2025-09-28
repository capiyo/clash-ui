import { Bell, Menu, User,MessageCircle, Code ,MessageCircleCode} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useCallback ,useEffect,useState} from "react";
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  reset,
  incrementAsync 
} from '../components/ReduxPages/slices/counterSlice'
import { useAppDispatch, useAppSelector } from '../components/ReduxPages/reducers/store';
import { count } from "console";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {useContext } from 'react'
import { Form, Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
  import { toast } from 'react-hot-toast';
  import { Notifications } from "./Footer/Notifications";
import { Post } from "./Footer/AddPost";
import { Leaf } from "lucide-react";
import { Login } from "./Footer/Login";
import { Register } from "./Footer/Register";









const Header = () => {
//  const dispatch=useDispatch()
  const dispatch = useAppDispatch();
  const { value, status } = useAppSelector((state) => state.counter);
    const [incrementAmount, setIncrementAmount] = useState("post-job");
    const [login,setLogin]=useState(false)
        const[bossId,setBossId]=useState("")
    const[posterName,setPosterName]=useState()
    const[bossPhone,setBossPhone]=useState()
    const[showLogin,setShowLogin]=useState(false)
     const timePosted=new Date().toLocaleTimeString()
    const datePosted=new Date().toLocaleDateString()
    const[notification,setNotifications]=useState(false)



      const handleChange = () => {
             dispatch({type:"footerOverlay",payload:"post-job"})
            

    };

    const hanldleNotfications=()=>{
      setNotifications(true)
    }


        //const { loginData, setLoginData } = useContext(LoginContext);
    //const dispatch=useDispatch()
    //const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()






       
















    const changeLoging=()=>{
      setLogin(!login)
    }


     const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

 const handleIncrementByAmount = useCallback((string: string) => {
    dispatch(incrementByAmount(string));
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  const handleIncrementAsync = useCallback((amount: number) => {
    dispatch(incrementAsync(amount));
  }, [dispatch]);


  






    useEffect(() => {
         const  token = localStorage.getItem("user");
        const user = JSON.parse(token);
       // setLoginData(user)  
        //console.log(user.userId)
        if(user){
          setShowLogin(true)
        setBossId(user._id)
        setPosterName(user.userName)
        setBossPhone(user.phoneNumber)
        }

      
        
         
            

      
    }, [])
    

















  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border shadow-soft hidden  w-screen md:flex   ">
      <div className="container  px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center justify-between space-x-2 ">
              <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-[#300669] rounded-xl flex items-center justify-center shadow-soft">
                        <Leaf className="h-10 w-6 text-primary-foreground" />
                      </div>
                      </div>
            <span className="text-sm text-[#300669]">clash</span>

            
           
          </div>

           <Drawer>
           
  <DrawerTrigger>
         <Notifications/>          
 
       


  </DrawerTrigger>

</Drawer>   





          
          <div className="space-y-4 space-x-4"><Drawer   >
           {showLogin !==  true?
  <DrawerTrigger>login</DrawerTrigger>:''}
<div className='justify-center'><Login/></div>
  
</Drawer>

  </div>

 

          

          {/* Desktop Navigation */}
          <div className=" rounded-xl p-2 flex  mr-10 flex-row bg-gradient-to-r from-white  to-[#300669] bg-[length:200%_100%] animate-gradient text-primary-foreground font-semibold shadow-glow">
          <nav className="hidden md:flex items-center space-x-6   ">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              crypto
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              add post
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              about clash
            </a>
          </nav>

          {/* Right Side Actions */}

         

        
           
          
          


            
            <div className="hidden md:flex items-center space-x-2 ml-10">
      
              <div>capiyo</div>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden right-0">
              
            </Button>
          </div>
          </div>
        </div>
      
    </header>
  );
};

export default Header;