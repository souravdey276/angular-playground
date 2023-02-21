import { BookService } from './book/book.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './mycomponent.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { BookComponent } from './book/book.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { FavouriteComponentComponent } from './favourite-component/favourite-component.component';
import { TweetComponent } from './tweet/tweet.component';
import { PanelComponent } from './panel/panel.component';
import { LoveComponent } from './love/love.component';
import { InstagramComponent } from './instagram/instagram.component';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveSwitchcComponent } from './directive-switchc/directive-switchc.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';
import { DirectiveForChangeComponent } from './directive-for-change/directive-for-change.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';
import { InputFormatDirective } from './input-format.directive';
import { InputComponentComponent } from './input-component/input-component.component';
import { StudentComponent } from './student/student.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ObservablePipeComponent } from './observable-pipe/observable-pipe.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowerEnhancedComponent } from './github-follower-enhanced/github-follower-enhanced.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CourseComponent,
    BookComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesComponentComponent,
    FavouriteComponentComponent,
    TweetComponent,
    PanelComponent,
    LoveComponent,
    InstagramComponent,
    DirectiveIfComponent,
    DirectiveSwitchcComponent,
    DirectiveForComponent,
    DirectiveForChangeComponent,
    NgStyleComponent,
    SafeTraversalComponent,
    InputFormatDirective,
    InputComponentComponent,
    StudentComponent,
    PostsComponent,
    GithubFollowersComponent,
    ObservablePipeComponent,
    GithubFollowerEnhancedComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent,
    ArchiveComponent,
    ArchiveHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService,BookService,
  {provide: ErrorHandler, useClass: AppErrorHandler}],   // Dependency Injection
  bootstrap: [AppComponent]
})
export class AppModule { }
