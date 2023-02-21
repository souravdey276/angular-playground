import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
id:string = 'No Id Yet';
repos:string='0';
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Github Profile On Init")
    this.route.queryParamMap
    .subscribe(
      (params)=>{
        let r = params.get('No of Repos');
        this.repos=r?r:'0'
      }
    )

    this.route.paramMap
    .subscribe(
      (params)=>{
        let gitUser=params.get('user');
        this.id = gitUser ? gitUser: 'No ID Yet'
      }
    )
    combineLatest([this.route.queryParamMap,this.route.paramMap])
    .subscribe(
      (combined)=>{
       let r = combined[0].get('noOfRepos');
        this.repos=r?r: '0'

        let gitUser = combined[0].get('user');
        this.id=gitUser?gitUser: 'No ID Yet'
      }
    )
  }
goBack(){
  this.router.navigate(['/followers']);
}
}
