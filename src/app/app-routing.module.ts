import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
