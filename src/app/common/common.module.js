import angular from 'angular';
import { HeaderModule } from './header/header.module';

export const CommonModule = angular
  .module('app.common', [
    HeaderModule,
  ])
  .name;