import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message.'
  welcomeMessageFromService:string
  name = ''

  constructor(public route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    console.log('last line of getWelcomeMessage.')
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }

}
