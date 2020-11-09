class Utilities {

    public trimUrl(url: any): Array<string> {
        const regex1 = /\/([^/]+)\/[^/]*$/;

        const regex2 = /^\/|\/$/g;

        let output: string = url.match(regex1)[0];

        output = output.replace(regex2, '');

        return output.split('/');
    }

}

export default new Utilities();