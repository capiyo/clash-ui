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
      <div className='flex  mt-5 lg:ml-20  overflow-auto h-screen sm:w-screen'  >
            
                      
                           
            <div className='grid sm:grid-cols-2 md:grid-cols-2 ' >
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

     <Card
      className={cn(
        "relative m-3  backdrop-blur-sm border-border/50 bg-gradient-to-br from-card/90 to-card/50 hover:shadow-glow transition-all duration-300 animate-slideUp",
        featured && "ring-2 ring-primary shadow-pink"
      )}
    >
      {/* Tournament Badge */}
      <div className="flex items-center justify-between p-1 border-b border-border/50">
        <div className="flex items-center gap-1">
          <Trophy className="w-4 h-4 text-[#300669]" />
          <span className="text-sm font-medium text-muted-foreground">{games.league}</span>
        </div>
        {isLive && (
          <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground animate-pulse">
            <Zap className="w-3 h-3 mr-1" />
            LIVE
          </Badge>
        )}
      </div>

      {/* Match Details */}
      <div className="">
        {/* Teams */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img  className="rounded-full" src={ball}/>
              </div>
              <div>
                
                <p className="font-semibold text-foreground">{games.home_team}</p>
                <p className="text-xs text-muted-foreground">{games.home_win}</p>
              </div>
            </div>
          </div>
          
          <div className="px-4">
            <span className="text-xl font-bold bg-gradient-to-r from-[#300669] to-accent bg-clip-text text-transparent">vs</span>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 justify-end">
              <div className="text-right">
                <p className="font-semibold text-foreground">{games.away_team}</p>
                <p className="text-xs text-muted-foreground">{games.away_win}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{games.day}, {games.date}</span>
        </div>

        {/* Betting Options */}
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

        {/* Pledge Button */}
         <div className="space-y-2 space-x-2">
           <Sheet  >
                <SheetTrigger className="w-full "> <Button variant="gradient" className="w-full" size="sm">
                                <DollarSign className="w-4 h-4 mr-2" />
                              pledge bet
                              </Button></SheetTrigger>


                <SheetContent  className="sm:w-screen lg:w-[400px] h-[200px] rounded-lg right-0" side="bottom">
                   <SheetHeader>
                    <SheetTitle>pledge amount</SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                  </SheetHeader>
                  <form  className="ml-4 mr-4"  onSubmit={()=>submitAmount(games.homeTeam,games.awayTeam,games.date,games.day)} >

                      <div className="">
                        <div>
                          <div>Select your team</div>
                          <div className="flex flex-row justify-between  ">
                          <div className={`${back1} rounded-lg p-1`}  onClick={(event)=>changeBackground1("homeTeam")}>{games.home_team}</div>
                          vs
                          <div className={`${back2} rounded-lg p-1`} onClick={(event)=>changeBackground2("awayTeam")}>{games.away_team}</div>
                          </div>

                        </div>



                                   
                                    <input 
                                    value={amount}
                                    onChange={handleChange}
                                    tt-2
                                      type="text" 
                                      className="w-full p-1 border rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent"
                                      placeholder="ksh:100"
                                    />
                                  </div>
                                 
                                  <div>
                                  
                                  </div>
                                     
                        <Button onClick={()=>submitAmount(games.home_team,games.away_team,games.date)}  type="submit" variant="gradient" className=" mt-2 w-full" size="sm">
                                  <DollarSign className="w-4 h-4 mr-2" />
                                submit
                                </Button>
                       
                      
                  
                  
                  
                                  </form>
















                   {/* Specify 'right' for the side property */}
                 
                  {/* Add your content here */}
                </SheetContent>
              </Sheet>
        </div>

        {/* Social Interactions */}
        <div className="flex items-center justify-between  border-t border-border/50">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Heart className="w-4 h-4 mr-1" />
              56
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-1" />
              78
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
            <TrendingUp className="w-4 h-4 mr-1" />
            Stats
          </Button>
        </div>
      </div>
    </Card>)


















  /*<div className="w-[450px] m-1">
        
         
          <div className="space-y-4">
              <div className="game-card">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-[#300669]  text-primary-foreground">
                      ol
    
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">{games.awayTeam}</span>
                      <span className="text-muted-foreground">vs</span>
                     
                      <span className="text-muted-foreground flex items-center gap-1 font-medium">
                        <Clock className="h-3 w-3" />
                        {games.homeTeam}
                      </span>
                    </div>
                    
                    <p className="text-sm leading-relaxed">{games.date}</p>
                    <p className="text-sm leading-relaxed">{games.day}</p>
                    
                    <div className="flex  gap-6 text-bae text-muted-foreground w-full">
    
                      <div  className=" rounded-full p-1 justify-between"><button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        like
    
                      </button>
                      </div>
                      
                      
                      <div className=" rounded-full p-1 justify-between"><button className="flex items-center gap-1 hover:text-primary transition-colors">
                       <MessageSquare className="h-4 w-4" />
                       comments
                      </button>
                      </div>
                      
                      <div className=" rounded-full p-1 justify-between"><button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Heart className="h-4 w-4" />
                    pledge
                      </button>
                      </div>
                     
                    </div>
                     <div>premier league</div>
                  </div>
                </div>
              </div>
          
          </div>
        </div>)







































     {/*<div className="lg:w-[600px] sm:mt-5 lg:mt-10 overflow-auto">
            
              <div  className="post-card w-[600px]">
                <div className="flex  gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-[#300669]  text-primary-foreground">
                      an
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-[#300669] ">{games.homeTeam}</span>
                      <span className="font-medium">vs</span>

                      <span className="font-medium text-[#300669]">{games.awayTeam}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {games.time}
                      </span>
                    </div>
                    
                    <p className="text-sm leading-relaxed">{games.day}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        30
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        35
                    
                      </button>
                      <button className="flex items-center gap-1  hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                        67
                      </button>
                    </div>
                    <div className="flex flex-row justify-between">
                    <div className="font-bold text-[#300669] ">premier league</div>
                    <div className="font-bold text-[#300669] ">old traford</div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
     */
          
      
          
        
}




export default GamesCard;