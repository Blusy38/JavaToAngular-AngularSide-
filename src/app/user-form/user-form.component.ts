import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
 
  user: User;
 //UserFormComponent takes a UserService instance in the constructor, so that the onSubmit () method saves the User object.
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.user = new User();
  }
 //To display the updated list, we call the gotoUserList () method after insertion, which redirects to the /users path
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/users']);
  }
}