import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginPageComponent },
{ path: 'register', component: RegisterPageComponent },
{ path: 'main', component: MainPageComponent },
{ path: 'articles/:id', component: ArticlePageComponent },
{ path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
