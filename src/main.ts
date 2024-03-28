import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'sweetalert2/dist/sweetalert2.all.min.js';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
