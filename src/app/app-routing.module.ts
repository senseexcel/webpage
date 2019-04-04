
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SenseexcelComponent } from './senseexcel/senseexcel.component';
import { ReportingComponent } from './reporting/reporting.component';
import { HistoryComponent } from './history/history.component';
import { WebinarComponent } from './webinar/webinar.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnicalOverviewSeComponent } from './technical-overview-se/technical-overview-se.component';
import { TechnicalOverviewSerComponent } from './technical-overview-ser/technical-overview-ser.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SubscribeOkComponent } from './subscribe-ok/subscribe-ok.component';
import { EventsComponent } from './events/events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { FaqComponent } from './faq/faq.component';
import { PartnersComponent } from './partners/partners.component';
import { QlikqonnectionsdaysComponent } from './events/qlikqonnectionsdays/qlikqonnectionsdays.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'error-404.html',
    component: NotFoundComponent
  },
  {
    path: 'home.html',
    component: HomeComponent
  },
  {
    path: 'all-about-se.html',
    component: SenseexcelComponent
  },
  {
    path: 'all-about-reporting.html',
    component: ReportingComponent
  },
  {
    path: 'the-history-of-all.html',
    component: HistoryComponent
  },
  {
    path: 'next-webinars.html',
    component: WebinarComponent
  },
  {
    path: 'downloads.html',
    component: DownloadsComponent
  },
  {
    path: 'our-pricing-infos.html',
    component: PricingComponent
  },
  {
    path: 'technical-overview-ser.html',
    component: TechnicalOverviewSerComponent
  },
  {
    path: 'technical-overview-se.html',
    component: TechnicalOverviewSeComponent
  },
  {
    path: 'contact-us.html',
    component: ContactusComponent
  },
  {
    path: 'imprint.html',
    component: ImprintComponent
  },
  {
    path: 'thank-you-for-subscribing.html',
    component: SubscribeOkComponent
  },
  {
    path: 'events.html',
    component: EventsComponent
  },
  {
    path: 'qlikqonnections-days-2019.html',
    component: QlikqonnectionsdaysComponent
  },
  {
    path: 'gdpr.html',
    component: GdprComponent
  },
  {
    path: 'faqs.html',
    component: FaqComponent
  },
  {
    path: 'partners.html',
    component: PartnersComponent
  },
  {
    path: '**',
    redirectTo: 'error-404.html'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
