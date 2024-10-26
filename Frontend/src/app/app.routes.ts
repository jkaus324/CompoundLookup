import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CompoundDetailComponent } from './components/compound-detail/compound-detail.component';
import { CompoundListComponent } from './components/compound-list/compound-list.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },  // Default route
    { path: 'compounds', component: CompoundListComponent }, // Compound list Page
    { path: 'compounds/:id', component: CompoundDetailComponent } // Compound detail Page
];
