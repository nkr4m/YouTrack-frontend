import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAvatarOptionsProvider({
            size: `xxl`,
            autoColor: true,
            rounded: true,
        }),
    ],
})
export class ProfileComponent implements OnInit {

  userDtls:any;

  constructor() { }

  ngOnInit(): void {

    this.userDtls = JSON.parse(sessionStorage.getItem("userDtls"));
    console.log(this.userDtls)


  }

  readonly users = [
    `Alex Inkin`,
    `Vladimir Potekhin`,
    `Nikita Barsukov`,
    `Maxim Ivanov`,
];



}
