import { Component } from '@angular/core';
import { socialinfo } from '../info';

@Component({
  selector: 'app-social-cards',
  templateUrl: './social-cards.component.html',
  styleUrl: './social-cards.component.css'
})
export class SocialCardsComponent {
  socialinfos: socialinfo [] = [
    {
      name: 'GitHub',   
      username:'Calebe-Dev',   
      describe: 'See my projects on GitHub profile',
      link:   'https://github.com/Calebe-Dev'
    },
    {
      name:  'Linkedin',
      username: 'Calebe-Dev',
      describe: 'talk to me on facebook',
      link: 'https://www.linkedin.com/in/calebe-dev'
    },
    {
      name: 'instagram',
      username:'calebe.dev',
      describe:' See more for me on my Instagram',
      link: 'https://www.instagram.com/calebe.dev/'
    },
    /*
    {
      name: 'instagram',
      username:'@calebe_original', 
      describe:' See more for me on my Instagram',
      link: 'https://www.instagram.com/calebe_original/'
    },
    */
    {
      name: 'Youtube',
      username:'@calebe_original',
      describe: 'See my videos on my Youtube Channel',
      link: 'https://www.youtube.com/@calebe_original'
    },
    {
      name: 'TikTok',
      username:'@calebe_original',
      describe: 'See my videos on my TikTok Channel',
      link: 'https://www.tiktok.com/@calebe_original'
    },
    {
      name: 'Threds',
      username:'@calebe_original',
      describe: 'See my posts on my Threds Channel',
      link: 'https://threads.app/@calebe_original'
    },
    {
      name:  'Spotfy',
      username:'Calebe S Araujo',
      describe: 'See my playlists on my Spotfy Profile',
      link: 'https://open.spotify.com/user/22mqs5jgvsn76feymm45v7lpq?si=e2688ae4be574494',
    }
  ]
}
