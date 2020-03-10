import HtmlNote from './HtmlNote';
import MemeNote from './MemeNote';
import UrlNote from './UrlNote';

const URL_REGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
const IMAGE_EXT = ['jpg', 'jpeg', 'gif', 'png'];

export function isUrl(str: string) {
    return URL_REGEX.test(str);
}

export function getNoteType(body: string) {
    if (isUrl(body)) {
        const url = new URL(body);
        const filename = url.pathname.split('/').reverse()[0]
        const ext = filename.split('.')[1];

        if (IMAGE_EXT.includes(ext)) {
            return MemeNote;
        } else {
            return UrlNote;
        }
    }

    return HtmlNote;
}