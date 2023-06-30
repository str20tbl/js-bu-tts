function q(selector) {
    return document.querySelector(selector)
}

function synthesize(text, speaker_id = "") {
    let base_url = "https://api.techiaith.org/coqui-tts/api/";
    let uri_text = text;
    let uri_speaker_id = speaker_id;
    let api_key = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx";
    let url = `${base_url}v1?testun=${uri_text}&siaradwr=${uri_speaker_id}&api_key=${api_key}`;
    fetch(encodeURI(url)).then(function (res) {
        if (!res.ok) throw Error(res.statusText);
        return res.blob();
    }).then(function (blob) {
        q('#audio').src = URL.createObjectURL(blob);
        q('#audio').hidden = false;
    });
}
