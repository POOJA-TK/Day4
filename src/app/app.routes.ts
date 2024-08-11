import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ServicesComponent } from './pages/services/services.component';
import { AerospaceComponent } from './units/aerospace/aerospace.component';
import { BankingComponent } from './units/banking/banking.component';
import { HealthcareComponent } from './units/healthcare/healthcare.component';
import { InsuranceComponent } from './units/insurance/insurance.component';
import { IndustrialComponent } from './units/industrial/industrial.component';
import { LocomotiveComponent } from './units/locomotive/locomotive.component';
import { MobilityComponent } from './units/mobility/mobility.component';
import { SecurityComponent } from './units/security/security.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"department",component:DepartmentComponent},
    {path:"services",component:ServicesComponent},
    {path:"aerospace",component:AerospaceComponent},
    {path:"banking",component:BankingComponent},
    {path:"healthcare",component:HealthcareComponent},
    {path:"insurance",component:InsuranceComponent},
    {path:"industrial",component:IndustrialComponent},
    {path:"locomotive",component:LocomotiveComponent},
    {path:"mobility",component:MobilityComponent},
    {path:"security",component:SecurityComponent}
];