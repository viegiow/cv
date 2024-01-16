import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ParentComponent } from "./parent";
import { AboutMeComponent } from "./about-me";
import { AcademicComponent } from "./academic";
import { ProfessionalComponent } from "./professional/professional.component";

const routes: Routes = [
    { path: '', component: ParentComponent },
    { path: 'sobre-mim', component: AboutMeComponent },
    { path: 'formacao', component: AcademicComponent },
    { path: 'profissional', component: ProfessionalComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
