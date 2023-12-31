import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: AllCategoriesComponent },
  { path: 'category/:category/:id', component: SingleCategoryComponent },
  { path: 'post/:id', component: SinglePostsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'terms-conditions', component: TermsAndConditionsComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
