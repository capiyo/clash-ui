import { MapPin, Clock, DollarSign, Building2,ThumbsUp,Eye,MessageSquare, 
  Heart, 
  Share2, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useDispatch } from 'react-redux';
import { setCaseData } from "./ReduxPages/slices/caseSlice";
import { UseDispatch,useSelector } from "react-redux";
import { RootState } from "./ReduxPages/reducers/store";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, TrendingUp, Calendar, Trophy, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FaLessThanEqual } from "react-icons/fa";
import ball from "@/assets/ball.webp"
import {useForm} from 'react-hook-form'
import { toast } from 'react-hot-toast';
import {
  Sheet,
  SheetContent,

  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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






interface GamesCardProps {
  away_team:string,
  home_team:string,
  date:string,
  draw:string,
  away_win:string,
  home_win:string,
  league:string




    
  }












const GamesCard = () => {
       const[myId,setMyId]=useState("")
     const[myName,setMyname]=useState("")
     const[workerEmail,setWorkerEmail]=useState("")
     

    const overlay = useSelector((state: RootState) => state.laydata.overlay);
     const { toast } = useToast();

 const [games, setGames] = useState<GamesCardProps[]>([]);
 
  


useEffect(() => {
           const token = localStorage.getItem("user");
        const user = JSON.parse(token);
        //setLoginData(user)  
        //console.log(user.userId)
        if(user){
             setMyId(user._id)
        setMyname(user.userName)
       setWorkerEmail(user.userEmail)
        }

        

      
       // console.log(LoginContext["userId"])
       // console.log(typeof(LoginContext))
        //setBossId(loginData.userId)
       // console.log(bossId+"The capiyo")
    }, [])




  useEffect(() => {
        const getUsers = async () => {
          try {
            const data = await fetchUsers();
            setGames(data);
            //console.log(jobs)
          } catch (err) {
            console.log(err)
           // setError("Error fetching users.");
          } finally {
            console.log("Capiyo")
            //setLoading(false);
          }
        };

        getUsers();
      }, []);



      async function fetchUsers(): Promise<GamesCardProps[]> {
      try {
        const response = await fetch('https://clashapi-1-5p0f.onrender.com/clash/getAllGames'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: GamesCardProps[] = await response.json();
        console.log(data)
        return data;
      } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error; // Re-throw to allow component to handle
      }
    }



















  return (
      <div className='flex  mt-2 lg:ml-20    h-screen lg:w-[1000px]'  >
            
                      
                           
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:w-[1000px]' >
              {games.map((game, key) => <Carda    key={key} games={game} />)}
              

          
            
            </div>
        </div>
    
     

  );
};

function Carda({games}){
   const[myId,setMyId]=useState("")
 const[myName,setMyname]=useState('')
 const[workerEmail,setWorkerEmail]=useState("")
 const dispatch=useDispatch()
 const {toast}=useToast()
 const[featured,setFeatured]=useState(false)
 const[isLive,setIsLive]=useState(false)
 const[pledge,setPledge]=useState(false)
 const[amount,setAmount]=useState("")
 const[back2,setBack2]=useState('bg-gradient-to-r from-white to-blue-white')
 const[back1,setBack1]=useState('bg-gradient-to-r from-white to-white')
 

 const[option,setOption]=useState("")
 const changeBackground1=(event)=>{
  setBack1("bg-gradient-to-r from-purple-300 to-blue-500")
  setOption(event)
  
 }
 const changeBackground2=(event)=>{
  setBack2("bg-gradient-to-r from-purple-300 to-blue-500")
  setOption(event)
  
 }
 
 

  const showRequest=(jobId)=>{
    const output={
    "jobId":jobId,
    "workerName":myName,
    "workerId":myId,
    "workerEmail":workerEmail,
    }

    
    
    
                fetch("https://clashapi-1-5p0f.onrender.com/clash/getgames", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(output)
            
        })
        .then((res) => res.json())
        .then((result) => {
           toast({
      title: "Agent Request",
      description: `Your job request is submitted successfully`,
    });
            console.log(result);
            

            //setRequest(true)
          //  window.location.href = '/all-jobs';
        })
        .catch((error) => {
            console.log(error);
            toast({
      title: "Agent Request",
      description: `Error occurred`,
    });
        });

    console.log(jobId)
    console.log(myId)
    console.log(myName)
}

 const handleChange = (event) => {
    setAmount(event.target.value); // Update the state with the new value
  };



 useEffect(() => {
            const token:string = localStorage.getItem("user");
         const user = JSON.parse(token);
         //setLoginData(user)  
         //console.log(user.userId)
         if(user){
              setMyId(user._id)
         setMyname(user.userName)
        setWorkerEmail(user.userEmail)
         }
 
         
 
       
        // console.log(LoginContext["userId"])
        // console.log(typeof(LoginContext))
         //setBossId(loginData.userId)
        // console.log(bossId+"The capiyo")
     }, [])
 
 
     interface CaseData {
  caseTitle: string;
  caseId: string;
  budget:string;
}

 
 
 








const get = (gigTitle: string, gigId: string, budget: string): void => {
 
  
  const data: CaseData = {
    caseTitle: gigTitle,
    caseId: gigId,
    budget: budget
  };

  dispatch(setCaseData(data));
//  console.log(data);
};


const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


const  submitAmount=(homeTeam,awayTeam,date)=>{
   

  const data={
    homeTeam:homeTeam,
    awayTeam:awayTeam,
    amount:amount,
    progress:"upcoming",
    date:date,
    placed:false,
    pledger:"bruno",
    option:option,
    placer:"",
    outcome:''


  }

  fetch("http://localhost:8000/clash/pledging", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((res) => res.json())
                
                .catch((err) => {
                   // toast.error("An error occured")
                    console.log(err);
                })




}













  return(
 <Card className="w-screen  lg:w-[450px] group  m-1 hover:shadow-medium transition-all duration-300 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
           <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img  className="rounded-full" src={ball}/>
              </div>
          <div className="space-y-1">
           
            <div className=" flex flex-row justify-around">

            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary  transition-colors">
            {games.home_team}
            </h3>
            <h3 className=" text-sm m-2 text-foreground group-hover:text-primary transition-colors">
            vs
            </h3>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
            {games.away_team}
            </h3>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">league</span>
            </div>
          </div>
          <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
            {games.date}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {games.home_win}
        </p>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{games.draw}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>{games.away_win}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{games.away_team}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="social" className="flex flex-col h-auto py-1 hover:bg-primary/10 hover:border-primary">
            <span className="text-xs text-muted-foreground mb-1">Home Win</span>
            <span className="text-lg font-bold text-[#300669]">45</span>
          </Button>
          <Button variant="social" className="flex flex-col h-auto py-1 hover:bg-accent/10 hover:border-accent">
            <span className="text-xs text-muted-foreground mb-1">Draw</span>
            <span className="text-lg font-bold text-accent">45</span>
          </Button>
          <Button variant="social" className="flex flex-col h-auto py-1 hover:bg-primary/10 hover:border-primary">
            <span className="text-xs text-muted-foreground mb-1">Away Win</span>
            <span className="text-lg font-bold text-[#300669]">78</span>
          </Button>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-1" />
              78
            </Button>
          <Button variant="gradient" size="sm" className="flex-1">
            pledge bet
          </Button>
           <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Heart className="w-4 h-4 mr-1" />
              56
            </Button>
        </div>
      </CardContent>
    </Card>
     


















  
          
      
          
  )     
}




export default GamesCard;