import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Sec1Component } from './sec1/sec1.component';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { Sec4Component } from './sec4/sec4.component';
import { Sec5Component } from './sec5/sec5.component';
import { Sec6Component } from './sec6/sec6.component';
import { Sec7Component } from './sec7/sec7.component';
import { Sec8Component } from './sec8/sec8.component';
import { Sec9Component } from './sec9/sec9.component';
import { Sec10Component } from './sec10/sec10.component';
import { Sec11Component } from './sec11/sec11.component';
import { Sec12Component } from './sec12/sec12.component';
import { SenseexcelComponent } from './senseexcel/senseexcel.component';
import { ReportingComponent } from './reporting/reporting.component';
import { HistoryComponent } from './history/history.component';
import { WebinarComponent } from './webinar/webinar.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { Mauticform1Component } from './contactus/mauticform1/mauticform1.component';
import { FooterComponent } from './footer/footer.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { AdressesComponent } from './adresses/adresses.component';
import { EuropaComponent } from './adresses/europa/europa.component';
import { InternationalComponent } from './adresses/international/international.component';
import { ModalsComponent } from './modals/modals.component';
import { TimezoneBFComponent } from './modals/timezone-bf/timezone-bf.component';
import { TimezoneFBComponent } from './modals/timezone-fb/timezone-fb.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DownloadFullpackageComponent } from './downloads/download-fullpackage/download-fullpackage.component';
import { DownloadSePdfComponent } from './downloads/download-se-pdf/download-se-pdf.component';
import { TechnicalOverviewSeComponent } from './technical-overview-se/technical-overview-se.component';
import { TechnicalOverviewSerComponent } from './technical-overview-ser/technical-overview-ser.component';
import { ImprintComponent } from './imprint/imprint.component';
import { Mauticform2Component } from './contactus/mauticform2/mauticform2.component';
import { SubscribeOkComponent } from './subscribe-ok/subscribe-ok.component';
import { EventsComponent } from './events/events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { FaqComponent } from './faq/faq.component';
import { FaqItemComponent } from './faq/faq-item/faq-item.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerItemComponent } from './partners/partner-item/partner-item.component';
import { DownloadExmapleItemComponent } from './downloads/download-exmaple-item/download-exmaple-item.component';
import { TrustedUrlPipe } from './core/pipes/trusted-url.pipe';
import { QlikqonnectionsdaysComponent } from './events/qlikqonnectionsdays/qlikqonnectionsdays.component';
import { Mauticform3Component } from './contactus/mauticform3/mauticform3.component';
import { QonnectionMdComponent } from './modals/qonnection-md/qonnection-md.component';
import { QonnectionsBannerComponent } from './events/qonnections-banner/qonnections-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    Sec4Component,
    Sec5Component,
    Sec6Component,
    Sec7Component,
    Sec8Component,
    Sec9Component,
    Sec10Component,
    Sec11Component,
    Sec12Component,
    SenseexcelComponent,
    ReportingComponent,
    HistoryComponent,
    WebinarComponent,
    PricingComponent,
    ContactusComponent,
    PagetitleComponent,
    Mauticform1Component,
    FooterComponent,
    GooglemapComponent,
    AdressesComponent,
    EuropaComponent,
    InternationalComponent,
    ModalsComponent,
    TimezoneBFComponent,
    TimezoneFBComponent,
    DownloadsComponent,
    DownloadFullpackageComponent,
    DownloadSePdfComponent,
    TechnicalOverviewSeComponent,
    TechnicalOverviewSerComponent,
    ImprintComponent,
    Mauticform2Component,
    SubscribeOkComponent,
    EventsComponent,
    NotFoundComponent,
    GdprComponent,
    FaqComponent,
    FaqItemComponent,
    PartnersComponent,
    PartnerItemComponent,
    DownloadExmapleItemComponent,
    TrustedUrlPipe,
    QlikqonnectionsdaysComponent,
    Mauticform3Component,
    QonnectionMdComponent,
    QonnectionsBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
