class Picture {
    constructor(url, embed) {
        this.url = url;
        this.embed = embed;
    }
}

var pictures = [
    new Picture("https://live.staticflickr.com/3143/2759525172_cdc061f6f5_b.jpg", '<p style="font-size: 0.9rem;font-style: italic;"><img style="display: block;" src="https://live.staticflickr.com/3143/2759525172_cdc061f6f5_b.jpg" alt="Japan - Kyoto"><a href="https://www.flickr.com/photos/69049772@N00/2759525172">"Japan - Kyoto"</a><span> by <a href="https://www.flickr.com/photos/69049772@N00">Marc Veraart</a></span> is licensed under <a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY 2.0</a><a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=ecda6622-94d6-42cd-b79f-7412b2cd88a4" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /></a></p>') , 
    new Picture("https://live.staticflickr.com/174/426923507_6b0d48c04f_b.jpg", '<p style="font-size: 0.9rem;font-style: italic;"><img style="display: block;" src="https://live.staticflickr.com/174/426923507_6b0d48c04f_b.jpg" alt="modern architecture in Asakusa Tokyo Japan"><a href="https://www.flickr.com/photos/59328597@N00/426923507">"modern architecture in Asakusa Tokyo Japan"</a><span> by <a href="https://www.flickr.com/photos/59328597@N00">Retinafunk</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-SA 2.0</a><a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=7a639cde-ff97-422f-9de2-0d7860db8207" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></p>)'),
    new Picture("https://live.staticflickr.com/4006/4690802885_8559446270_b.jpg", '<p style="font-size: 0.9rem;font-style: italic;"><img style="display: block;" src="https://live.staticflickr.com/4006/4690802885_8559446270_b.jpg" alt="Japan"><a href="https://www.flickr.com/photos/24662369@N07/4690802885">"Japan"</a><span> by <a href="https://www.flickr.com/photos/24662369@N07">NASA Goddard Photo and Video</a></span> is licensed under <a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY 2.0</a><a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=bcee7f1a-17ea-4545-926e-73549d3726ce" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /></a></p>'),
    new Picture("https://live.staticflickr.com/3084/2580755158_3937099edc_b.jpg", '<p style="font-size: 0.9rem;font-style: italic;"><img style="display: block;" src="https://live.staticflickr.com/3084/2580755158_3937099edc_b.jpg" alt="The Nippon landscape at Tateyama - Kurobe Alpen Route."><a href="https://www.flickr.com/photos/40422902@N00/2580755158">"The Nippon landscape at Tateyama - Kurobe Alpen Route."</a><span> by <a href="https://www.flickr.com/photos/40422902@N00">skyseeker</a></span> is licensed under <a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY 2.0</a><a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=1fe60b98-3eb3-4170-a5b8-9352bf5769a5" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /></a></p>')
]

function renderLightbox(sender) {
    if (sender === undefined) {
        return;
    }
    var box = document.createElement("div");
    var url = sender.getElementsByTagName("img")[0].getAttribute("src");
    var img = document.createElement("img");
    console.log("picture url: " + url)
    img.setAttribute("src", url);
    box.classList.add("lightbox");
    var exit_button = document.createElement("button");
    exit_button.setAttribute("onclick", "closeLightbox()");
    exit_button.innerText = "X";
    exit_button.style.fontSize = "20px";
    box.appendChild(exit_button);
    var img_container = document.createElement("div");
    box.appendChild(img_container);
    img_container.appendChild(img);
    document.body.appendChild(box);
}

function displayThumbnails() {
    var lightbox_items = document.createElement("div");
    lightbox_items.classList.add("lightbox-items");


    for (let i = 0; i < pictures.length; i++) {
        let container = document.createElement("div");
        container.setAttribute("onclick", "renderLightbox(this)");
        container.classList.add("lightbox-item");

        let img = document.createElement("img");
        img.classList.add("thumbnail");
        img.setAttribute("src", pictures[i].url);
        
        container.appendChild(img);
        lightbox_items.appendChild(container);
    }

    document.body.appendChild(lightbox_items);
}

function closeLightbox() {
    var lightbox = document.getElementsByClassName("lightbox")[0];
    document.body.removeChild(lightbox);
}