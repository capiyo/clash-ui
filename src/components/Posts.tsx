import { MapPin, Clock, DollarSign, Building2,ThumbsUp,Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useDispatch } from 'react-redux';
import { setCaseData } from "./ReduxPages/slices/caseSlice";
import { UseDispatch,useSelector } from "react-redux";
import { RootState } from "./ReduxPages/reducers/store";
import { useToast } from "@/hooks/use-toast";
import fan1 from "@/assets/fan1.jpg";
import fan2 from "@/assets/fan2.jpg";
import fan3 from "@/assets/fan3.jpg";
import fan4 from "@/assets/fan4.jpg";
import fan5 from "@/assets/fan5.jpg";
import fan6 from "@/assets/fan6.jpg";
import mana from "@/assets/mana.jpg"
import green from "@/assets/green.webp"
import tike from "@/assets/tike.jpg"
import { 
  Gamepad2, 
  Trophy, 
  Users,
  MessageSquare, 
  Heart, 
  Share2,
  Play,
  Star,
  Target
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";




interface GamesCardProps {
  awayTeam:string,
  homeTeam:string,
  date:string,
  time:string,
  day:string,



    
  }












const Posts = () => {
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


    const postsData = [
        {
          id: 1,
          author: "Capiyo",
          handle: "@alexgamer",
          time: "2h ago",
          content: "haka ni bibi yetu,, popote tukitaka points we beat them,,, man u always overpowers chelsea on earth and heaven🎮",
          likes: 24,
          comments: 8,
          shares: 3,
          image:mana,
        },
        {
          id: 2,
          author: "Capiyo",
          handle: "@sarahk",
          time: "4h ago",
          content: "I personally think ekitike will outsmart isak in every game, every touch.. Look at how he is progressing so well.. i like him 🏆",
          likes: 156,
          comments: 42,
          shares: 18,
          image: tike,
        },
        {
          id: 3,
          author: "Mike Torres",
          handle: "@miket",
          time: "6h ago",
          content: "Pro tip: Always check your settings before joining competitive matches. Lost 3 games in a row because of wrong key bindings 😅",
          likes: 89,
          comments: 23,
          shares: 12
        },
        {
          id: 4,
          author: "Luna Wang",
          handle: "@lunaw",
          time: "8h ago",
          content: "Building my first gaming PC! Any recommendations for a good graphics card under $500? Looking for 1440p gaming performance. 💻",
          likes: 67,
          comments: 34,
          shares: 9,
          image: fan3,
        },
         {
          id: 5,
          author: "Mike Torres",
          handle: "@miket",
          time: "6h ago",
          content: "Pro tip: Always check your settings before joining competitive matches. Lost 3 games in a row because of wrong key bindings 😅",
          likes: 89,
          comments: 23,
          shares: 12,
          image: green,
        },
        {
          id: 6,
          author: "Luna Wang",
          handle: "@lunaw",
          time: "8h ago",
          content: "Building my first gaming PC! Any recommendations for a good graphics card under $500? Looking for 1440p gaming performance. 💻",
          likes: 67,
          comments: 34,
          shares: 9,
          image: fan5,
        },
         {
          id: 7,
          author: "Mike Torres",
          handle: "@miket",
          time: "6h ago",
          content: "Pro tip: Always check your settings before joining competitive matches. Lost 3 games in a row because of wrong key bindings 😅",
          likes: 89,
          comments: 23,
          shares: 12,
          image: fan3,
        },
        {
          id: 8,
          author: "Luna Wang",
          handle: "@lunaw",
          time: "8h ago",
          content: "Building my first gaming PC! Any recommendations for a good graphics card under $500? Looking for 1440p gaming performance. 💻",
          likes: 67,
          comments: 34,
          shares: 9,
          image: fan4,

        }
      ];
    


















  return (
      <div className="lg:w-[600px] sm:mt-5 lg:mt-10 overflow-auto">
    
     
      <div className="space-y-4">
        {postsData.map((post) => (
          <div key={post.id} className="post-card">
            <div className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-[#300669]  text-primary-foreground">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">{post.author}</span>
                  <span className="text-muted-foreground">Manchester United</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    France
                  </span>
                </div>
                
                <p className="text-sm leading-relaxed">{post.content}</p>
                <img className="rounded-lg"  src={post.image}/>
                
                <div className="flex  gap-6 text-bae text-muted-foreground w-full">

                  <div  className=" rounded-full p-1 justify-between"><button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    like

                  </button>
                  </div>
                  
                  
                  <div className=" rounded-full p-1 justify-between"><button className="flex items-center gap-1 hover:text-primary transition-colors">
                   comments
                  </button>
                  </div>
                  
                  <div className=" rounded-full p-1 justify-between"><button className="flex items-center gap-1 hover:text-primary transition-colors">
                    
                    share
                  </button>
                  </div>

                   <div className=" rounded-full p-1 justify-between"><button className="flex items-center gap-1 hover:text-primary transition-colors">
                    
                    {post.time}
                  </button>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
  const showRequest=(jobId)=>{
    const output={
    "jobId":jobId,
    "workerName":myName,
    "workerId":myId,
    "workerEmail":workerEmail,
    }
    
    
                fetch("http://localhost:8000/clash/getgames", {
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

 
 
 








const getGigData = (gigTitle: string, gigId: string, budget: string): void => {
 
  
  const data: CaseData = {
    caseTitle: gigTitle,
    caseId: gigId,
    budget: budget
  };

  dispatch(setCaseData(data));
//  console.log(data);
};







  return(
        <Card className="m-1   sm:w-[400px] sm:m-3  group hover:shadow-medium transition-all duration-300 animate-slide-up lg:w-[400px]">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">         
            <div className="flex flex-row justify-evenly w-[300px]">          
            <span className="text-sm text-primary group-hover:text-primary transition-colors">
              {games.awayTeam}
              <span className="ml-10 text-black ">vs</span>
            </span>
             <span className="text-sm text-primary group-hover:text-primary transition-colors">
              {games.homeTeam}
            </span>
            </div>


            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">{games.date}</span>
            </div>
          </div>
          <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
            {games.day}
          </span>
        </div>
      </CardHeader>
       
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-2">
        {games.time}
        </p>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            follow
            
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            like
          
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            bet
          
          </div>
        </div>
        
        <div className="flex gap-2 pt-2 justify-evenly">
            <span className="bg-primary text-gray px-2 py-1 rounded-full text-xs font-medium">
              follow
            
          </span>
          <span className="bg-primary text-gray px-2 py-1 rounded-full text-xs font-medium">
      comments
            
          </span>

          <span className="bg-primary text-gray px-2 py-1 rounded-full text-xs font-medium">
            bet
            
          </span>
         

              
            
         
        </div>
      </CardContent>
    </Card>

  )
}




export default Posts;