class Utilities {

    public trimUrl(url: any): Array<string> {
        let regex1 = /\/([^/]+)\/[^/]*$/;

        let regex2 = /^\/|\/$/g;

        let output: string = url.match(regex1)[0];

        output = output.replace(regex2, '');

        return output.split('/');
    }

}

export default new Utilities();