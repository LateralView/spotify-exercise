import angular from 'angular';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import 'font-awesome/css/font-awesome.css';
import './app.scss';

export const AppModule = angular
.module('app', [
		CommonModule,
		ComponentsModule
	])
  .component('app', AppComponent)
  .name;