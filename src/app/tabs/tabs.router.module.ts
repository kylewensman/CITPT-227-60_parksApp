import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,

    // url of your app is localhost:8100/tabs/tab1

    children: [
      {
        path: 'parks',
        children: [
          {
            path: '',
            loadChildren: '../park-list/park-list.module#ParkListPageModule'
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../park-map/park-map.module#ParkMapPageModule'
          }
        ]
      },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../tab3/tab3.module#Tab3PageModule'
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/parks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/parks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
