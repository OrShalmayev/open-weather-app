import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page-1',
        loadChildren: () => 
            import('./page-one/page-one.module').then(m => m.PageOneModule)
    },
    {
        path: 'page-2',
        loadChildren: () =>
            import('./page-two/page-two.module').then(m => m.PageTwoModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
