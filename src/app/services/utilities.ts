class Utilities {

    public trimUrl(url: any): Array<string> {
        let regex1 = /\/([^/]+)\/[^/]*$/;

        let regex2 = /^\/|\/$/g;

        let string1: string = url.match(regex1)[0];

        let string2: string = string1.replace(regex2, '');

        return string2.split('/');
    }

}

export default new Utilities();