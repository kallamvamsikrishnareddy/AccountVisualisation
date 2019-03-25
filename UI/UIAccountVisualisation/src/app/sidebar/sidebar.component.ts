import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import * as _ from 'lodash';

import { koreBotChat } from '../../assets/chatWindow';
import { koreAnonymousFn } from '../../assets/anonymousassertion';
import { reject } from 'q';
import { Router } from '@angular/router';

//import { Options } from 'selenium-webdriver/opera';
declare var koreBotChat:any;
declare var koreAnonymousFn:any;
declare var JSON: any;
//var koreBot = koreBotChat();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] 

})
export class SidebarComponent implements OnInit {
  public chatConfig: any;  
  public botOptions: any;
  public anonymousFn: any;
  public koreBot: any;
  public menuTitle: String;
  public isActive: Boolean;
  constructor(private http: HttpClient, private router: Router){
      this.initBotOptions();
      this.menuTitle = 'Technology Maturity';
      this.isActive = false;
  } //end of constructor 
  
  ngOnInit(){
    
  } // end of Init

  initBotOptions() {
    //this.koreBot=koreBotChat();
    this.botOptions = {
      logLevel: "debug",
      botInfo: {name:"BPMBot",_id:"st-9a32815d-9414-5258-9538-f317afbcc9bf"}, // bot name is case sensitive
      clientId: "cs-ab016638-fb6d-5270-babc-0af6e9cda43d",
      clientSecret: "ElBU2Nq9NqMO7vB8hMiuQV2kbLWtiVFNotjDM25w0TQ=",
      koreAPIUrl: "https://bots.kore.ai/api/",
      koreSpeechAPIUrl: "https://speech.kore.ai/",
      ttsSocketUrl: 'wss://speech.kore.ai/tts/ws',
      recorderWorkerPath: '../assets/libs/recorderWorker.js',
      userIdentity: 'vamsi.kallam@hcl.com',// Provide users email id here
      //JWTUrl: 'http://localhost:8082/jwtToken'
    }
    this.botOptions.assertionFn = this.assertionFn;
    this.botOptions.koreAnonymousFn = koreAnonymousFn; 

    this.chatConfig={
      botOptions:this.botOptions,
      allowIframe: false,
      isSendButton: false,
      isTTSEnabled: true,
      isSpeechEnabled: false,
      allowGoogleSpeech: false,
      allowLocation: false,
      loadHistory: true,
      messageHistoryLimit: 10,
      autoEnableSpeechAndTTS: false,
      graphLib: "d3"
    }; 
  }

  public assertionFn(options, callback) {
    //this.koreBot=koreBotChat();
    var jsonData = {
      clientId: 'cs-ab016638-fb6d-5270-babc-0af6e9cda43d',
      clientSecret: 'ElBU2Nq9NqMO7vB8hMiuQV2kbLWtiVFNotjDM25w0TQ=',
      identity: 'vamsi.kallam@hcl.com',
      aud: "",
      isAnonymous: true
    };
    $.ajax({
      url: 'http://localhost:8082/jwtToken',
      type: 'post',
      headers:  {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(jsonData),
      dataType: 'json',
      success: function (data) {
        this.koreBot = koreBotChat();
        options.assertion = data.token;
        options.handleError = this.koreBot.showError;
        options.chatHistory = this.koreBot.chatHistory;
        options.botDetails = this.koreBot.botDetails;
        callback(null, options);
        setTimeout(function () {
          this.koreBot = koreBotChat(); 
          if (this.koreBot && this.koreBot.initToken) {
            this.koreBot.initToken(options);            
          }
        }, 2000);
      },
      error: function (err) {
        this.koreBot.showError(err.responseText);
      }
    });        
  } //end of assertion

  public assertion(){    
    this.koreBot = koreBotChat();  
    this.koreBot.show(this.chatConfig);
  }
  toggle() {
    
  }
  receiveMessage ($event){
    console.log($event);
  }

  navigateToSapianceReport (route:String,menu:String){
    this.menuTitle = menu;
    this.isActive = true;
    this.router.navigate(['/sapiancereport']);
  }
  navigateToTechnologyMaturity (route:String,menu:String){
    this.menuTitle = menu;
    this.isActive = true;
    this.router.navigate(['/technologymaturity']);
    //[class.active]="router.isRouteActive(router.generate(['/ here mention router name']))" 
  }
} //end of class
