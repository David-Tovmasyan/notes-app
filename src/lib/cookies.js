// SOURCE

// https://www.w3schools.com/js/js_cookies.asp

export function setCookie(cname, cvalue, exdays=1) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    const name = `${cname}=`;
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        if (cookie.startsWith(name)) {
            return cookie.substring(name.length);
        }
    }
    return "";
}
