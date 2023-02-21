import { Component, } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {

tweet = {
  body : 'Some tweet abount crypto currency',
  likes: 120,
  isLiked: false
}
// onTweetLikedStatuesChanged(){
//   console.log('Tweet Like has been changed');
// }
// onTweetLikedStatuesChanged(status:boolean){      // Passing event data
//   console.log('Tweet Like has been changed:', status);
// }
onTweetLikedStatuesChanged(data: {}){      // Passing event data
  console.log('Tweet Like has been changed:', data);
}

}
