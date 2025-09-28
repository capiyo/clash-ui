import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 

  Trophy, 
  Users, 
  Clock, 
  MessageSquare,

  Heart, 
  Share2,
  Play,
  Star,
  Target
} from "lucide-react";
import GamesCard from "../GamesCard";
import Posts from "../Posts";

type PageType = "games" | "posts";

const SlidingPagesToggle = () => {
  const [activePage, setActivePage] = useState<PageType>("games");

  const gamesData = [
    {
      id: 1,
      title: "Cyber Racing 2077",
      genre: "Racing",
      players: "1.2k",
      rating: 4.8,
      status: "Online",
      image: "🏎️"
    },
    {
      id: 2,
      title: "Space Warriors",
      genre: "Action",
      players: "3.5k",
      rating: 4.6,
      status: "Online",
      image: "🚀"
    },
    {
      id: 3,
      title: "Mystery Quest",
      genre: "Adventure",
      players: "890",
      rating: 4.9,
      status: "New",
      image: "🗝️"
    },
    {
      id: 4,
      title: "Battle Arena",
      genre: "Strategy",
      players: "2.1k",
      rating: 4.7,
      status: "Popular",
      image: "⚔️"
    }
  ];

  const postsData = [
    {
      id: 1,
      author: "Alex Chen",
      handle: "@alexgamer",
      time: "2h ago",
      content: "Just discovered this amazing indie game! The graphics are absolutely stunning and the gameplay is so addictive. Can't put it down! 🎮",
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: "Sarah Kim",
      handle: "@sarahk",
      time: "4h ago",
      content: "Anyone else excited for the new gaming tournament next week? The prize pool is insane! Who's participating? 🏆",
      likes: 156,
      comments: 42,
      shares: 18
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
      shares: 9
    }
  ];

  
  const PostsPage = () => (
    <div className="space-y-1 p-1">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Community Posts</h2>
        <p className="text-muted-foreground">Join the gaming conversation</p>
      </div>
      
      <div className="space-y-4">
        {postsData.map((post) => (
          <div key={post.id} className="post-card">
            <div className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">{post.author}</span>
                  <span className="text-muted-foreground">{post.handle}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.time}
                  </span>
                </div>
                
                <p className="text-sm leading-relaxed">{post.content}</p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    {post.comments}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Share2 className="h-4 w-4" />
                    {post.shares}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-screen  overflow-auto mt-2">
      {/* Header */}
      

      {/* Content Area with Sliding Pages */}
      <div className="max-w-4xl ">
        <div className="page-slide-container min-h-[calc(100vh-80px)]">
          <div 
            className={`page-slide ${
              activePage === "games" ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="overflow-scroll"><GamesCard /></div>
          </div>
          <div 
            className={`page-slide ${
              activePage === "posts" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <PostsPage />
          </div>
        </div>
      </div>

      {/* Bottom Fixed Sliding Toggle */}
      <div className="fixed bottom-10  right-10 transform -translate-x-1/2 z-50 rounded-full  items-center ">


        <div className="sliding-toggle w-10 shadow-sm backdrop-blur-md bg-primary/90  justify-center  rounded-full  border border-border">
          <div 
            className={`sliding-toggle-slider ${
              activePage === "posts" ? "translate-x-full" : "translate-x-0"
            }`}
          />


          <button
            onClick={() => setActivePage("games")}
            className={`sliding-toggle-button ${
              activePage === "games" ? "sliding-toggle-active" : "sliding-toggle-inactive"
            }`}
          >
            
            Game
          </button>




          <button
            onClick={() => setActivePage("posts")}
            className={`sliding-toggle-button ${
              activePage === "posts" ? "sliding-toggle-active" : "sliding-toggle-inactive"
            }`}
          >
            
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidingPagesToggle;