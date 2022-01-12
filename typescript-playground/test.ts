export class Test {

    constructor(public antwort: number) {
        console.log('Hello "ngWorld"! 🤩', this.antwort)

        const tech = 'Angular';
        const headline = `Herzlich Willkommen zum ${tech}-Workshop!`;
        console.log(headline);
    }
}
