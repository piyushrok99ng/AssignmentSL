import { Component ,OnInit} from '@angular/core';
import {PostService} from "./post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sevenLakes';
  postList:any;
  postDetail:any;
  userDetail:any;
  flag:any;
  searchText:any;
  options: string[] = ['One', 'Two', 'Three'];

  
  constructor(private service : PostService){

  }

  ngOnInit() {
    this.flag='post';
    this.service.getPosts().subscribe(
      (res)=>{
        console.log(res);
        this.postList = res;
      }
    )
   }


   postInfo(id){
     this.postDetail = null;
     this.searchText = '';
     this.flag='postDetail';
    this.service.getPostDetail(id).subscribe((res)=>{
      this.postDetail=res;
    });
   }

   userInfo(id){
    this.userDetail = null;
    this.searchText = '';

    this.flag='userDetail';
    this.service.getUserDetail(id).subscribe((res)=>{
      this.userDetail=res;
    });
   }

   navigate(){
    this.flag='post';

   }


}
