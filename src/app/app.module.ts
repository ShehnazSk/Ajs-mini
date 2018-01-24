import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';






const myRoutes: Routes = [
  { path:'',component:BodyComponent },
  { path:'experience',component: ExperienceComponent },
  { path:'education',component: EducationComponent },
  { path:'Skills',component: SkillsComponent },
  { path:'projects',component: ProjectsComponent },
  { path:'contact',component: ContactComponent }
 
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
