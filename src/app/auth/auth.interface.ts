export interface Login {
    accessToken?:string;
    status:      boolean;
    errors?:     Errors;
    user?:       User;
}

export interface Errors {
    No_control:  NoControl;
    password:    NoControl;
}

export interface NoControl {
    msg:        string;
    param:      string;
    location:   string;
}

export interface User {
    _id:        string;
    No_control: string;
    name:       string;
    major:      string;
    image:      string;
    online:     boolean;
}