/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as TodosIndexRouteImport } from './routes/todos/index'
import { Route as TodosCreateRouteImport } from './routes/todos/create'
import { Route as TodosUpdateIdRouteImport } from './routes/todos/update.$id'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const TodosIndexRoute = TodosIndexRouteImport.update({
  id: '/todos/',
  path: '/todos/',
  getParentRoute: () => rootRouteImport,
} as any)
const TodosCreateRoute = TodosCreateRouteImport.update({
  id: '/todos/create',
  path: '/todos/create',
  getParentRoute: () => rootRouteImport,
} as any)
const TodosUpdateIdRoute = TodosUpdateIdRouteImport.update({
  id: '/todos/update/$id',
  path: '/todos/update/$id',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/todos/create': typeof TodosCreateRoute
  '/todos': typeof TodosIndexRoute
  '/todos/update/$id': typeof TodosUpdateIdRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/todos/create': typeof TodosCreateRoute
  '/todos': typeof TodosIndexRoute
  '/todos/update/$id': typeof TodosUpdateIdRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/todos/create': typeof TodosCreateRoute
  '/todos/': typeof TodosIndexRoute
  '/todos/update/$id': typeof TodosUpdateIdRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/todos/create' | '/todos' | '/todos/update/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/todos/create' | '/todos' | '/todos/update/$id'
  id: '__root__' | '/' | '/todos/create' | '/todos/' | '/todos/update/$id'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TodosCreateRoute: typeof TodosCreateRoute
  TodosIndexRoute: typeof TodosIndexRoute
  TodosUpdateIdRoute: typeof TodosUpdateIdRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/todos/': {
      id: '/todos/'
      path: '/todos'
      fullPath: '/todos'
      preLoaderRoute: typeof TodosIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/todos/create': {
      id: '/todos/create'
      path: '/todos/create'
      fullPath: '/todos/create'
      preLoaderRoute: typeof TodosCreateRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/todos/update/$id': {
      id: '/todos/update/$id'
      path: '/todos/update/$id'
      fullPath: '/todos/update/$id'
      preLoaderRoute: typeof TodosUpdateIdRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TodosCreateRoute: TodosCreateRoute,
  TodosIndexRoute: TodosIndexRoute,
  TodosUpdateIdRoute: TodosUpdateIdRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
