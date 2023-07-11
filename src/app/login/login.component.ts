import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
      // private accountService: AccountService,
      // private alertService: AlertService
  ) { }

  ngOnInit() {
      // this.form = this.formBuilder.group({
      //     username: ['', Validators.required],
      //     password: ['', Validators.required]
      // });
  }
  login(){
    console.log("in login ")
  }
  
  // convenience getter for easy access to form fields
  // get f() { return this.form.controls; }
  
  onSubmit() {
    this.submitted = true;
   let url = 'http://localhost:8080/login';
    console.log(this.form.value)
    this.http.post(url,this.form.value).subscribe(res =>{
      console.log(res)
    })
    
    this.router.navigate(['dashboard'])

      // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      // if (this.form.invalid) {
      //     return;
      // }

      this.loading = true;
      // this.accountService.login(this.f.username.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe({
      //         next: () => {
      //             // get return url from query parameters or default to home page
      //             const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      //             this.router.navigateByUrl(returnUrl);
      //         },
      //         error: error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         }
      //     });
  }
}