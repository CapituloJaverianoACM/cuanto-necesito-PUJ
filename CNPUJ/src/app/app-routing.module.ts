import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CNBodyComponent } from "./cn-body/cn-body.component";
import { MainBodyComponent } from "./main-body/main-body.component";

const routes: Routes = [
    { path: '', component: CNBodyComponent },
    { path: 'CN', children: [
        { path: 'grades', component: MainBodyComponent },
        { path: 'academic', component: MainBodyComponent }
    ] },
    { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }