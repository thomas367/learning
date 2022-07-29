/**
 * 
 * Bridge is a structural design pattern that lets you split a large class or a set of closely related
 * classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.
 *
 */

class About{
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return "About page in " + this.theme.getColor();
    }
}

class Careers{
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return "Careers page in " + this.theme.getColor();
    }
}


class DarkTheme{
    getColor() {
        return 'Dark Black';
    }
}
class LightTheme {
    getColor() {
        return 'Off white';
    }
}


const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"
