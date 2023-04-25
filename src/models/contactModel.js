/* 
*   Contact model
*/
export class ContactFormat {
    user = '';
    pass = '';
    connDate = '';
    isConnected = false;

    constructor(user, pass, connDate, isConnected) {
        this.user = user;
        this.pass = pass;
        this.connDate = connDate;
        this.isConnected = isConnected
    }
}

/* 
*   Date format for display (TODO: could be imported from diff file)
*/
export const dateFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};