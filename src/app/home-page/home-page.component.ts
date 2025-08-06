import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  constructor(private _router:Router){}
  buttonList: string[] = [
    "All",
    "News",
    "Podcasts",
    "Music",
    "Live",
    "Strategies",
    "Mixes",
    "Rajya Sabha",
    "Wickets",
    "Satsang",
    "Industry",
    "Movie musicals",
    "Thoughts",
    "History",
    "Presentations",
    "Soundtracks",
    "Recently uploaded",
    "Watched",
    "New to you",
  ];

  videoList = [
    {
      thumbnail: "https://i3.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=1",
      title: "Awesome Video Title Goes Here",
      channelName: "Channel One",
      views: "1.2M views",
      time: "2 days ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/BBAyRBTfsOU/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=2",
      title: "Understanding Angular Directives",
      channelName: "Code School",
      views: "857K views",
      time: "1 week ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/DLX62G4lc44/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=3",
      title: "Top 10 CSS Tricks for 2025",
      channelName: "Design Lab",
      views: "482K views",
      time: "3 days ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/2OHbjep_WjQ/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=4",
      title: "RxJS in 10 Minutes",
      channelName: "Frontend Boost",
      views: "1M views",
      time: "4 days ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/eX2qFMC8cFo/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=5",
      title: "What is Machine Learning?",
      channelName: "AI Academy",
      views: "670K views",
      time: "5 days ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/XbspJ1PZ80g/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=6",
      title: "Daily Dev Vlog #15",
      channelName: "Dev Daily",
      views: "112K views",
      time: "1 day ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/LKzNsl0kwdY/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=7",
      title: "The History of the Web",
      channelName: "Internet Archives",
      views: "300K views",
      time: "6 days ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/0C7YxjAjCWM/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=8",
      title: "Music That Makes You Smarter",
      channelName: "SmartSound",
      views: "1.8M views",
      time: "2 weeks ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=9",
      title: "What’s New in JavaScript",
      channelName: "CodeCast",
      views: "900K views",
      time: "3 days ago",
    },
    {
      thumbnail: "https://i3.ytimg.com/vi/lJIrF4YjHfQ/maxresdefault.jpg",
      channelIcon: "https://i.pravatar.cc/40?img=10",
      title: "Startup Pitches Live",
      channelName: "Startup Show",
      views: "2M views",
      time: "1 week ago",
    },
  ];


  viewVideo(){
    this._router.navigate(['/view-video']);
  }
}
