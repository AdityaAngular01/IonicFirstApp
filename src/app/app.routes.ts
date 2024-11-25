import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'to-do-list',
    pathMatch: 'full',
  },
  {
    path: 'practical02',
    loadComponent: () =>
      import('./practical02/practical02.page').then((m) => m.Practical02Page),
  },
  // {
  //   path: 'route-and-nav',
  //   loadComponent: () => import('./route-and-nav/route-and-nav.page').then( m => m.RouteAndNavPage),

  // },
  // {
  //   path: 'item-details/:id',
  //   loadComponent: () =>
  //     import('./route-and-nav/item-details/item-details.page').then(
  //       (m) => m.ItemDetailsPage
  //     ),
  // },

  {
    path: 'route-and-nav',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./route-and-nav/route-and-nav.page').then(
            (m) => m.RouteAndNavPage
          ),
      },
      {
        path: 'item-details/:id',
        loadComponent: () =>
          import('./route-and-nav/item-details/item-details.page').then(
            (m) => m.ItemDetailsPage
          ),
      },
    ],
  },
  {
    path: 'to-do-list',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./to-do-list/to-do-list.page').then((m) => m.ToDoListPage),
      },
      {
        path: 'add-view-task/:taskId',
        loadComponent: () =>
          import('./to-do-list/add-view-task/add-view-task.page').then(
            (m) => m.AddViewTaskPage
          ),
      },
    ],
  },
];
